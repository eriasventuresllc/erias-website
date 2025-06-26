import React, { useLayoutEffect, Suspense, lazy } from 'react';
import { initScroll, destroyScroll } from '../../lib/scrollBridge';

// Feature flag to enable/disable the new hero experience
const ENABLE_SMOOTH_HERO = true;

// Lazy load the new components to split them into separate chunks
const HeroScene = lazy(() => import('./HeroScene'));
const KpiCounters = lazy(() => import('./KpiCounters'));

const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    if (!ENABLE_SMOOTH_HERO) return;

    // Check for user's preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      return; // Do not initialize Lenis if reduced motion is preferred
    }

    // Initialize the smooth scroll functionality
    initScroll();

    // Cleanup function to destroy the Lenis instance on component unmount
    return () => {
      destroyScroll();
    };
  }, []);

  if (!ENABLE_SMOOTH_HERO) {
    return <>{children}</>;
  }

  return (
    <>
      <Suspense fallback={<div className="h-screen w-full bg-base" />}>
        <HeroScene />
        <KpiCounters />
      </Suspense>
      {/* Render the original page content below the new sections */}
      {children}
    </>
  );
};

export default SmoothScrollWrapper; 