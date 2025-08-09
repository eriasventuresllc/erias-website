"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CodeStreamProps = {
  className?: string;
  columns?: number;
  speedRangeSeconds?: [number, number];
  density?: number; // approximate characters per column
  charset?: string;
  color?: string;
};

const DEFAULT_CHARSET = "01{}[]()<>:=;/*+-_#&$@ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const CodeStream: React.FC<CodeStreamProps> = ({
  className,
  columns = 12,
  speedRangeSeconds = [14, 26],
  density = 24,
  charset = DEFAULT_CHARSET,
  color = "rgba(125, 211, 252, 0.35)", // sky-300 at ~35%
}) => {
  const columnSpecs = useMemo(() => {
    return Array.from({ length: columns }).map((_, idx) => {
      const duration =
        speedRangeSeconds[0] + Math.random() * (speedRangeSeconds[1] - speedRangeSeconds[0]);
      const delay = Math.random() * duration;
      const left = (idx + Math.random() * 0.5) * (100 / columns);
      const characters = Array.from({ length: density })
        .map(() => charset[Math.floor(Math.random() * charset.length)])
        .join("");
      const fontOpacity = 0.15 + Math.random() * 0.2;
      const fontSize = Math.random() > 0.5 ? "0.75rem" : "0.875rem"; // sm or base
      return { duration, delay, left: `${left}%`, characters, fontOpacity, fontSize };
    });
  }, [columns, density, charset, speedRangeSeconds]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* top/bottom gradient mask for subtle fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />

      {columnSpecs.map((spec, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-[200%] w-8 md:w-10"
          style={{ left: spec.left }}
          initial={{ y: "0%" }}
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: spec.duration, ease: "linear", repeat: Infinity, delay: spec.delay }}
        >
          {/* duplicate content blocks for seamless looping */}
          <div className="h-1/2">
            <div
              className="font-mono whitespace-pre leading-5 tracking-tight select-none"
              style={{ opacity: spec.fontOpacity, fontSize: spec.fontSize, color }}
            >
              {spec.characters}
              {"\n"}
              {spec.characters}
              {"\n"}
              {spec.characters}
            </div>
          </div>
          <div className="h-1/2">
            <div
              className="font-mono whitespace-pre leading-5 tracking-tight select-none"
              style={{ opacity: spec.fontOpacity, fontSize: spec.fontSize, color }}
            >
              {spec.characters}
              {"\n"}
              {spec.characters}
              {"\n"}
              {spec.characters}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};


