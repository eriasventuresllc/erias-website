"use client";
import React, { useEffect, useMemo, useRef } from "react";

type PointerMode = "none" | "attract" | "repel";

export interface NodesBackgroundProps {
  className?: string;
  density?: number; // nodes per pixel
  numNodes?: number; // overrides density if set
  speed?: number; // base pixel speed per ms (scaled by DPR)
  radiusRange?: [number, number];
  linkDistance?: number; // px
  linkWidth?: number; // px
  linkOpacity?: number; // 0..1 (max opacity at zero distance)
  background?: string | "transparent"; // canvas clear color
  nodeColor?: string;
  lineColor?: string;
  glow?: number; // shadowBlur for nodes
  wrap?: boolean;
  retina?: boolean; // use devicePixelRatio
  maxDpr?: number; // clamp devicePixelRatio
  pointer?: boolean;
  pointerMode?: PointerMode;
  pointerRadius?: number; // px
  pointerStrength?: number; // 0..1
  parallax?: number; // 0..1
  fpsCap?: number; // 0 uncapped
  blendMode?: "lighter" | "source-over";
  maxConnectionsPerNode?: number; // soft cap per node
}

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

class RNG {
  s: number;
  constructor(seed = (Math.random() * 1e9) >>> 0) {
    this.s = seed >>> 0;
  }
  next() {
    let x = this.s >>> 0;
    x ^= x << 13; x >>>= 0;
    x ^= x >> 17; x >>>= 0;
    x ^= x << 5;  x >>>= 0;
    this.s = x >>> 0;
    return (x >>> 0) / 0xffffffff;
  }
  range(a: number, b: number) { return a + (b - a) * this.next(); }
}

class Grid {
  cell: number;
  cols: number;
  rows: number;
  bins: Array<Array<Point>>;
  constructor(w: number, h: number, cell: number) {
    this.cell = Math.max(8, cell | 0);
    this.cols = Math.ceil(w / this.cell);
    this.rows = Math.ceil(h / this.cell);
    this.bins = new Array(this.cols * this.rows);
    for (let i = 0; i < this.bins.length; i++) this.bins[i] = [];
  }
  idx(cx: number, cy: number) { return cy * this.cols + cx; }
  clear() { for (const b of this.bins) b.length = 0; }
  insert(p: Point) {
    const cx = clamp((p.x / this.cell) | 0, 0, this.cols - 1);
    const cy = clamp((p.y / this.cell) | 0, 0, this.rows - 1);
    this.bins[this.idx(cx, cy)].push(p);
    p._cx = cx; p._cy = cy;
  }
  *neighbors(p: Point) {
    const cx = p._cx, cy = p._cy;
    for (let y = cy - 1; y <= cy + 1; y++) {
      if (y < 0 || y >= this.rows) continue;
      for (let x = cx - 1; x <= cx + 1; x++) {
        if (x < 0 || x >= this.cols) continue;
        yield* this.bins[this.idx(x, y)];
      }
    }
  }
}

type Point = {
  x: number; y: number; vx: number; vy: number; r: number; id: number;
  _cx: number; _cy: number;
};

export const NodesBackground: React.FC<NodesBackgroundProps> = ({
  className,
  density = 0.00012,
  numNodes,
  speed = 0.15,
  radiusRange = [1.0, 2.2],
  linkDistance = 140,
  linkWidth = 1.0,
  linkOpacity = 0.55,
  background = "transparent",
  nodeColor = "#a5fff6",
  lineColor = "#9bf3ee",
  glow = 12,
  wrap = true,
  retina = true,
  maxDpr,
  pointer = true,
  pointerMode = "attract",
  pointerRadius = 160,
  pointerStrength = 0.06,
  parallax = 0.03,
  fpsCap = 0,
  blendMode = "lighter",
  maxConnectionsPerNode = 3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const runningRef = useRef(false);
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const dprRef = useRef(1);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const rng = useMemo(() => new RNG(), []);
  const pointsRef = useRef<Point[] | null>(null);
  const gridRef = useRef<Grid | null>(null);
  const sizeRef = useRef({ width: 0, height: 0 });

  const targetCount = (w: number, h: number) => {
    if (typeof numNodes === "number") return Math.max(8, numNodes | 0);
    return Math.max(8, (w * h * density) | 0);
  };

  const initParticles = (w: number, h: number) => {
    const count = targetCount(w, h);
    const [r0, r1] = radiusRange;
    const pts: Point[] = new Array(count);
    for (let i = 0; i < count; i++) {
      pts[i] = {
        x: rng.range(0, w),
        y: rng.range(0, h),
        vx: rng.range(-1, 1) * speed,
        vy: rng.range(-1, 1) * speed,
        r: rng.range(r0, r1),
        id: i,
        _cx: 0,
        _cy: 0,
      };
    }
    pointsRef.current = pts;
  };

  const reseedIfNeeded = (w: number, h: number) => {
    const pts = pointsRef.current;
    if (!pts) { initParticles(w, h); return; }
    const target = targetCount(w, h);
    const diff = target - pts.length;
    const [r0, r1] = radiusRange;
    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        pts.push({
          x: rng.range(0, w),
          y: rng.range(0, h),
          vx: rng.range(-1, 1) * speed,
          vy: rng.range(-1, 1) * speed,
          r: rng.range(r0, r1),
          id: pts.length,
          _cx: 0,
          _cy: 0,
        });
      }
    } else if (diff < 0) {
      pts.length = target;
    }
  };

  const clearCanvas = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    if (background && background !== "transparent") {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, w, h);
    } else {
      ctx.clearRect(0, 0, w, h);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: background === "transparent", desynchronized: true });
    if (!ctx) return;
    ctxRef.current = ctx;

    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() || { width: innerWidth, height: innerHeight } as DOMRect;
      const rawDpr = retina ? (globalThis.devicePixelRatio || 1) : 1;
      const dpr = typeof maxDpr === "number" ? Math.min(rawDpr, Math.max(1, maxDpr)) : rawDpr;
      dprRef.current = dpr;
      sizeRef.current.width = Math.max(1, rect.width | 0);
      sizeRef.current.height = Math.max(1, rect.height | 0);
      canvas.width = Math.max(1, (sizeRef.current.width * dpr) | 0);
      canvas.height = Math.max(1, (sizeRef.current.height * dpr) | 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cell = Math.max(16, (linkDistance * 0.75) | 0);
      gridRef.current = new Grid(sizeRef.current.width, sizeRef.current.height, cell);
      reseedIfNeeded(sizeRef.current.width, sizeRef.current.height);
      clearCanvas(ctx, sizeRef.current.width, sizeRef.current.height);
    };

    handleResize();
    const ro = new ResizeObserver(handleResize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    addEventListener("resize", handleResize, { passive: true });

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!pointer) return;
      const t = (e as TouchEvent).touches ? (e as TouchEvent).touches[0] : (e as MouseEvent);
      mouseRef.current.x = t.clientX;
      mouseRef.current.y = t.clientY;
      mouseRef.current.active = true;
    };
    const onLeave = () => { mouseRef.current.active = false; };
    if (pointer) {
      addEventListener("mousemove", onMove, { passive: true });
      addEventListener("touchmove", onMove, { passive: true });
      addEventListener("mouseleave", onLeave, { passive: true });
    }

    runningRef.current = true;
    lastRef.current = performance.now();

    const step = (now: number) => {
      if (!runningRef.current) return;
      const ctx = ctxRef.current;
      const grid = gridRef.current;
      const pts = pointsRef.current;
      if (!ctx || !grid || !pts) { rafRef.current = requestAnimationFrame(step); return; }

      let dt = now - lastRef.current;
      if (fpsCap > 0) {
        const minDelta = 1000 / fpsCap;
        if (dt < minDelta) { rafRef.current = requestAnimationFrame(step); return; }
      }
      lastRef.current = now;

      const { width: w, height: h } = sizeRef.current;
      clearCanvas(ctx, w, h);
      grid.clear();

      const mx = mouseRef.current.active ? mouseRef.current.x : w * 0.5;
      const my = mouseRef.current.active ? mouseRef.current.y : h * 0.5;

      // move
      for (const p of pts) {
        if (mouseRef.current.active && pointerMode !== "none") {
          const dx = mx - p.x, dy = my - p.y;
          const d2 = dx*dx + dy*dy;
          const r = pointerRadius;
          if (d2 < r*r) {
            const d = Math.max(1e-4, Math.sqrt(d2));
            const ux = dx / d, uy = dy / d;
            const s = (pointerStrength * (1 - d / r));
            const dir = pointerMode === "attract" ? 1 : -1;
            p.vx = p.vx * (1 - s) + dir * ux * speed * s * 6;
            p.vy = p.vy * (1 - s) + dir * uy * speed * s * 6;
          }
        }

        p.x += (p.vx * dt) + (mx - w * 0.5) * parallax * 0.0005 * dt;
        p.y += (p.vy * dt) + (my - h * 0.5) * parallax * 0.0005 * dt;

        if (wrap) {
          if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
        } else {
          if (p.x < 0 || p.x > w) { p.vx *= -1; p.x = clamp(p.x, 0, w); }
          if (p.y < 0 || p.y > h) { p.vy *= -1; p.y = clamp(p.y, 0, h); }
        }

        grid.insert(p);
      }

      // links
      ctx.lineWidth = linkWidth;
      ctx.strokeStyle = lineColor;
      ctx.globalCompositeOperation = blendMode;
      for (const p of pts) {
        let connected = 0;
        for (const q of grid.neighbors(p)) {
          if (q.id <= p.id) continue;
          const dx = q.x - p.x, dy = q.y - p.y;
          const d2 = dx*dx + dy*dy;
          if (d2 > linkDistance * linkDistance) continue;
          // Soft-cap connections per node to reduce draw calls
          if (maxConnectionsPerNode > 0 && connected >= maxConnectionsPerNode) break;
          const d = Math.sqrt(d2);
          const a = (1 - d / linkDistance);
          ctx.globalAlpha = clamp(linkOpacity * a * a, 0, 1);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
          connected++;
        }
      }
      ctx.globalAlpha = 1;

      // nodes
      ctx.fillStyle = nodeColor;
      ctx.shadowBlur = glow;
      ctx.shadowColor = nodeColor;
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = "source-over";

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      runningRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      removeEventListener("resize", handleResize as any);
      if (pointer) {
        removeEventListener("mousemove", onMove as any);
        removeEventListener("touchmove", onMove as any);
        removeEventListener("mouseleave", () => {});
      }
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [density, numNodes, speed, radiusRange?.[0], radiusRange?.[1], linkDistance, linkWidth, linkOpacity, background, nodeColor, lineColor, glow, wrap, retina, pointer, pointerMode, pointerRadius, pointerStrength, parallax, fpsCap]);

  return (
    <canvas
      ref={canvasRef}
      className={"absolute inset-0 w-full h-full -z-10 pointer-events-none " + (className || "")}
    />
  );
};



