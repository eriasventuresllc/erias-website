import React from "react";
import { cn } from "@/lib/utils";

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

/**
 * Ultra-clean HUD panel: near-invisible fill, hairline border, and thin
 * bracket ticks on opposing corners that warm to the brand color on hover.
 *
 * The file keeps the `spotlight-card` name so existing imports still work.
 */
export const SpotlightCard = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, innerClassName, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative h-full rounded-sm hud-ticks",
          "border border-white/[0.08] bg-white/[0.015]",
          "transition-all duration-700 ease-out",
          "hover:border-white/[0.18] hover:bg-white/[0.03]",
          className
        )}
        {...rest}
      >
        <div className={cn("relative z-[1] h-full", innerClassName)}>{children}</div>
      </div>
    );
  }
);

SpotlightCard.displayName = "SpotlightCard";

export default SpotlightCard;
