import React, { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

/**
 * Animated Progress Bar Component.
 * Animates its width from 0 to target when visible in viewport.
 * Supports prefers-reduced-motion to skip animation.
 * 
 * @param {Object} props
 * @param {number} props.target - Target percentage (e.g., 85)
 * @param {number} props.duration - Animation duration in milliseconds (default: 1200)
 */
export default function AnimatedProgressBar({ target, duration = 1200 }) {
  const containerRef = useRef(null);
  const isVisible = useIntersectionObserver(containerRef, { threshold: 0.1, once: true });

  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  return (
    <div ref={containerRef} className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-600 rounded-full transition-all"
        style={{
          width: isVisible ? `${target}%` : '0%',
          transitionDuration: prefersReducedMotion ? '0ms' : `${duration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  );
}
