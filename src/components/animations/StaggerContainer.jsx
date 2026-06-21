import React from 'react';
import ScrollReveal from './ScrollReveal';

/**
 * A container component that staggers the entrance animation of its children.
 * Each child is wrapped inside a ScrollReveal element with a sequentially increasing delay.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Direct child elements to stagger
 * @param {number} props.stagger - Milliseconds delay increment per child (default: 100)
 * @param {number} props.duration - Transition duration per child in milliseconds (default: 800)
 * @param {'up' | 'down' | 'left' | 'right' | 'none'} props.direction - Travel direction (default: 'up')
 * @param {boolean} props.once - Animate only once (default: true)
 * @param {string} props.className - CSS class names for the container wrapper
 */
export default function StaggerContainer({
  children,
  stagger = 100,
  duration = 800,
  direction = 'up',
  once = true,
  className = '',
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        
        return (
          <ScrollReveal
            direction={direction}
            delay={index * stagger}
            duration={duration}
            once={once}
          >
            {child}
          </ScrollReveal>
        );
      })}
    </div>
  );
}
