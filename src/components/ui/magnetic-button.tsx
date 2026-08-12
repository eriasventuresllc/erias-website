import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

type Variant = "primary" | "subtle";

interface PillButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart"> {
  children: React.ReactNode;
  variant?: Variant;
  as?: "button" | "a" | "div";
  /** Internal SPA route — when provided, clicks navigate via react-router. */
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

/**
 * Soft pill-shaped button with a clean border, subtle hover brightening, and a
 * gentle press down on active. No magnetic movement, no shine sweep.
 *
 * The component name stays `MagneticButton` so callers don't need to change
 * their imports; the behavior is intentionally simpler per design feedback.
 */
export const MagneticButton: React.FC<PillButtonProps> = ({
  children,
  variant = "primary",
  className,
  as = "button",
  to,
  href,
  target,
  rel,
  onClick,
  ...rest
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick?.(e as React.MouseEvent<HTMLButtonElement>);
    if (to && !e.defaultPrevented) {
      e.preventDefault();
      navigate(to);
    }
  };

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center gap-2.5",
    "h-11 px-6 rounded-sm select-none",
    "font-mono text-xs md:text-[13px] font-medium uppercase tracking-[0.18em]",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-0",
    "active:translate-y-[1px] active:scale-[0.985]"
  );

  const variantClasses =
    variant === "primary"
      ? cn(
          "bg-primary/10 text-white",
          "border border-primary/40",
          "hover:bg-primary/20 hover:border-primary/70",
          "hover:shadow-[0_0_28px_-8px_hsl(var(--primary)/0.55)]"
        )
      : cn(
          "bg-transparent text-white/85",
          "border border-white/15",
          "hover:bg-white/[0.04] hover:text-white hover:border-white/35"
        );

  const Tag: React.ElementType = as === "a" || to ? "a" : as === "div" ? "div" : "button";

  const elProps: React.HTMLAttributes<HTMLElement> & {
    href?: string;
    target?: string;
    rel?: string;
  } = {
    onClick: handleClick,
    className: cn(baseClasses, variantClasses, className),
    ...rest,
  };

  if (to) {
    elProps.href = to;
  } else if (href) {
    elProps.href = href;
    elProps.target = target;
    elProps.rel = rel;
  }

  return <Tag {...elProps}>{children}</Tag>;
};

export default MagneticButton;
