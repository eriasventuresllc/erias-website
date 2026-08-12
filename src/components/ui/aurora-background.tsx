import React from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  intensity?: "soft" | "medium" | "strong";
  showGrid?: boolean;
}

// Fixed, non-interactive layer of animated blurred orbs + subtle grid. Works as a page backdrop.
export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className,
  intensity = "medium",
  showGrid = true,
}) => {
  const opacity =
    intensity === "soft" ? "opacity-40" : intensity === "strong" ? "opacity-[0.85]" : "opacity-60";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className={cn("absolute inset-0", opacity)}>
        {/* Primary rose orb, top-left */}
        <div
          className="absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full blur-[120px] animate-aurora-a"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.55), transparent 60%)",
          }}
        />
        {/* Purple orb, top-right */}
        <div
          className="absolute -top-24 right-[-12rem] h-[36rem] w-[36rem] rounded-full blur-[110px] animate-aurora-b"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(280 75% 60% / 0.30), transparent 60%)",
          }}
        />
        {/* Warm rose orb, bottom-center */}
        <div
          className="absolute bottom-[-18rem] left-1/3 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full blur-[130px] animate-aurora-c"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.40), transparent 60%)",
          }}
        />
      </div>

      {showGrid && (
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-[0.35]" />
      )}

      {/* Fine film grain for a premium, less "flat digital" texture */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette so content stays the focus */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
