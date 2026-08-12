import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

// Counts from 0 to `value` once the element enters the viewport. Uses a spring for a natural feel.
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
  className,
  decimals = 0,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 70, damping: 20, mass: 1 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      const controls = { cancelled: false };
      const start = performance.now();
      const target = value;
      const step = (t: number) => {
        if (controls.cancelled) return;
        const elapsed = (t - start) / 1000;
        const p = Math.min(1, elapsed / duration);
        // easeOutExpo for satisfying deceleration
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        mv.set(target * eased);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      return () => {
        controls.cancelled = true;
      };
    }
  }, [inView, value, duration, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(v.toFixed(decimals));
    });
    return () => unsub();
  }, [spring, decimals]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
