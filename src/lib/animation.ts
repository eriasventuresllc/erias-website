// Shared animation constants for consistent motion language across the site.

import type { Transition } from "framer-motion";

type Ease = NonNullable<Transition["ease"]>;

export const EASE_STANDARD: Ease = [0.4, 0, 0.2, 1];          // material "standard"
export const EASE_EMPHASIZED: Ease = [0.2, 0, 0, 1];           // decisive entrances
export const EASE_OUT_EXPO: Ease = [0.16, 1, 0.3, 1];          // dramatic out
export const EASE_IN_OUT_CUBIC: Ease = [0.65, 0, 0.35, 1];     // smooth loops

export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 26,
  mass: 0.9,
};

export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 28,
  mass: 0.7,
};

export const SPRING_GENTLE: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 1,
};

export const FADE_SOFT: Transition = {
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

export const INITIAL_FADE_UP = {
  opacity: 0,
  y: -20,
};

export const INITIAL_FADE_SCALE = {
  opacity: 0,
  scale: 0.92,
};

export const PAGE_TRANSITION: Transition = {
  type: "tween",
  ease: EASE_STANDARD,
  duration: 0.5,
};

// Generic container/stagger helpers for Framer Motion variants.
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren, delayChildren },
  },
});

export const fadeUp = (duration = 0.6, delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: EASE_OUT_EXPO },
  },
});

export const fadeScale = (duration = 0.55, delay = 0) => ({
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay, ease: EASE_OUT_EXPO },
  },
});
