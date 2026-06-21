import React, { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

/**
 * Reusable animation component to reveal content on scroll.
 * Supports direction transitions and zoom scale reveals.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elements to animate
 * @param {number} props.delay - Delay in milliseconds (default: 0)
 * @param {number} props.duration - Duration in milliseconds (default: 800)
 * @param {'up' | 'down' | 'left' | 'right' | 'none'} props.direction - Travel direction (default: 'up')
 * @param {number} props.scale - Initial scale (default: 1)
 * @param {boolean} props.once - Animate only once (default: true)
 * @param {number} props.threshold - Intersection threshold (default: 0.1)
 * @param {string} props.className - Additional class names
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 800,
  direction = 'up',
  scale = 1,
  once = true,
  threshold = 0.1,
  className = '',
}) {
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold, once });
  
  // Check user motion preferences to skip animations
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const getTransform = () => {
    if (isIntersecting) return 'none';
    
    let transformStr = '';
    
    // Translation direction
    switch (direction) {
      case 'up':
        transformStr += 'translateY(40px) ';
        break;
      case 'down':
        transformStr += 'translateY(-40px) ';
        break;
      case 'left':
        transformStr += 'translateX(-40px) ';
        break;
      case 'right':
        transformStr += 'translateX(40px) ';
        break;
      case 'none':
      default:
        break;
    }

    // Scale reveal
    if (scale !== 1) {
      transformStr += `scale(${scale}) `;
    }

    return transformStr.trim() || 'none';
  };

  const style = {
    opacity: isIntersecting ? 1 : 0,
    transform: getTransform(),
    transitionProperty: prefersReducedMotion ? 'none' : 'opacity, transform',
    transitionDuration: prefersReducedMotion ? '0ms' : `${duration}ms`,
    transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Apple/Stripe-like smooth ease-out
    willChange: prefersReducedMotion ? 'auto' : 'opacity, transform',
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
