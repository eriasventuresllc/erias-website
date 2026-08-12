import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Thin progress bar pinned to the top of the viewport that tracks scroll position.
const ScrollProgress: React.FC<{ className?: string }> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden="true"
      className={
        "fixed left-0 right-0 top-0 z-[200] h-[2px] origin-left " +
        "bg-gradient-to-r from-transparent via-primary to-transparent " +
        "shadow-[0_0_14px_hsl(var(--primary)/0.6)] pointer-events-none " +
        (className ?? "")
      }
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
