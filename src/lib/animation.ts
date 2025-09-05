// Shared animation constants for consistent easing across the site

export const EASE_STANDARD = [0.4, 0, 0.2, 1] as const; // Material-like standard curve

export const SPRING_SOFT = {
  type: "spring" as const,
  stiffness: 180,
  damping: 26,
  mass: 0.9,
};

export const FADE_SOFT = {
  duration: 0.6,
  ease: EASE_STANDARD,
};

export const ENTER_SOFT = {
  opacity: 1,
  y: 0,
};

export const INITIAL_FADE_DOWN = {
  opacity: 0,
  y: 20,
};

export const PAGE_TRANSITION = {
  type: "tween" as const,
  ease: EASE_STANDARD,
  duration: 0.5,
};



