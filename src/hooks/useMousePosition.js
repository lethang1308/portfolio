import { useEffect, useRef } from 'react';

/**
 * Custom hook to track mouse/touch positions relative to a target element.
 * Updates a ref instead of state to prevent React component re-renders during motion.
 * 
 * @param {React.RefObject} elementRef - Ref of the container to track mouse position within
 * @returns {React.MutableRefObject<{x: number|null, y: number|null, isActive: boolean}>} Ref containing mouse status
 */
export default function useMousePosition(elementRef) {
  const mouseRef = useRef({ x: null, y: null, isActive: false });

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isActive: true
      };
    };

    const handleMouseEnter = () => {
      mouseRef.current.isActive = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null, isActive: false };
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const rect = element.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
          isActive: true
        };
      }
    };

    const handleTouchStart = () => {
      mouseRef.current.isActive = true;
    };

    const handleTouchEnd = () => {
      mouseRef.current = { x: null, y: null, isActive: false };
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    // Add touch support for mobile compatibility
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [elementRef]);

  return mouseRef;
}
