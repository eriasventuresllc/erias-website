import React from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number; // kept for API compatibility; unused
  scale?: number; // kept for API compatibility; unused
  children: React.ReactNode;
  className?: string;
}

/**
 * Plain wrapper. The original 3D tilt was removed per design feedback; this
 * component now just forwards children inside a flex container so existing
 * call sites continue to compile.
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className,
  // max, scale intentionally ignored
  max: _max,
  scale: _scale,
  ...rest
}) => {
  return (
    <div className={cn("relative h-full", className)} {...rest}>
      {children}
    </div>
  );
};

export default TiltCard;
