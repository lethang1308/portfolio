import React from 'react';
import ScrollReveal from './ScrollReveal';

/**
 * A simplified wrapper for standard scroll-reveal fade-up animations.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {number} props.delay - Delay in milliseconds (default: 0)
 * @param {number} props.duration - Duration in milliseconds (default: 800)
 * @param {boolean} props.once - Run animation once (default: true)
 * @param {string} props.className - Extra classes
 */
export default function FadeUpSection({
  children,
  delay = 0,
  duration = 800,
  once = true,
  className = '',
}) {
  return (
    <ScrollReveal
      direction="up"
      delay={delay}
      duration={duration}
      once={once}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
}
