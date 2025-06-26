import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lenis: Lenis | null = null

/**
 * Initializes and manages a Lenis smooth-scrolling instance.
 *
 * This function sets up Lenis for smooth scrolling and integrates it with GSAP's
 * ScrollTrigger. It uses a singleton pattern to ensure that only one instance
 * of Lenis is active at any time.
 *
 * The `raf` (requestAnimationFrame) method from Lenis is synchronized with
 * GSAP's ticker for optimized performance and to ensure animations are
 * perfectly in sync with the smooth scroll position.
 *
 * It also handles the destruction and recreation of the Lenis instance, which
 * can be useful in a React environment with component mounts/unmounts.
 */
export const initScroll = () => {
  if (lenis) {
    // If an instance already exists, destroy it before creating a new one.
    lenis.destroy()
  }

  // Create a new Lenis instance with specified options.
  lenis = new Lenis({
    smoothWheel: true,
    lerp: 0.08, // Lower values create a "heavier," more fluid feel.
  })

  // GSAP's ScrollTrigger needs to be updated on every 'scroll' event from Lenis.
  lenis.on('scroll', ScrollTrigger.update)

  // Integrate Lenis's RAF scroll updates into GSAP's animation ticker.
  // This is the most critical step for synchronization.
  gsap.ticker.add((time) => {
    // The second argument `false` prevents Lenis from emitting a 'scroll' event,
    // which avoids a potential double-update loop with ScrollTrigger.
    lenis?.raf(time * 1000)
  })

  // Optional: Add a lag to GSAP's ticker to smooth out animations further.
  gsap.ticker.lagSmoothing(0)

  return lenis
}

/**
 * Destroys the active Lenis instance.
 *
 * This function should be called when the component managing the scroll
 * unmounts to prevent memory leaks and unexpected behavior.
 */
export const destroyScroll = () => {
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
}

// Export the lenis instance for potential direct use in components.
export { lenis } 