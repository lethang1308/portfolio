import { useState, useEffect } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * Supports prefers-reduced-motion to skip observing and show items immediately.
 * 
 * @param {React.RefObject} elementRef - React ref of the element to observe
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Percent of element visibility to trigger (default: 0.1)
 * @param {string} options.rootMargin - Margin around the root (default: '0px')
 * @param {boolean} options.once - Disconnect observer after element becomes visible (default: true)
 * @returns {boolean} - Whether the element is intersecting/visible
 */
export default function useIntersectionObserver(
  elementRef,
  { threshold = 0.1, rootMargin = '0px', once = true } = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsIntersecting(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          // If once is false, toggle visibility back off when exiting viewport
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element && !once) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [elementRef, threshold, rootMargin, once]);

  return isIntersecting;
}
