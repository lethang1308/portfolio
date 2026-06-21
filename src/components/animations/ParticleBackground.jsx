import React, { useEffect, useRef } from 'react';

/**
 * Interactive Particle Background using HTML5 Canvas API.
 * High performance (60 FPS), responsive, respects reduced motion, and avoids React re-renders.
 * 
 * @param {Object} props
 * @param {React.MutableRefObject} props.mouseRef - Ref to track mouse position coordinates
 */
export default function ParticleBackground({ mouseRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    
    // Check system preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Responsive configuration
    const getParticleConfig = () => {
      const isMobile = window.innerWidth < 768;
      return {
        count: isMobile ? 50 : 125, // Adjusted count for better visibility
        connectionDistance: 85,     // Faint connection line range
        interactionRadius: 165,     // Larger interactive pull area
        attractionForce: 0.65,      // Stronger and smoother responsive force
        baseSpeed: prefersReducedMotion ? 0.05 : 0.5 // Base float velocity
      };
    };

    let config = getParticleConfig();

    // HSL Colors matching the theme: Blue, Purple, Pink, Orange
    const colorPalette = [
      'hsla(220, 90%, 56%, ',  // Blue
      'hsla(262, 83%, 58%, ',  // Purple
      'hsla(325, 83%, 58%, ',  // Pink
      'hsla(24, 95%, 53%, '    // Orange
    ];

    // Helper to generate a random HSL color with opacity
    const getRandomColor = () => {
      const baseColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      const opacity = (Math.random() * 0.35 + 0.25).toFixed(2); // increased opacity for clarity
      return {
        base: baseColor,
        opacity: parseFloat(opacity)
      };
    };

    class Particle {
      constructor() {
        this.reset();
        // Distribute randomly across the canvas initially
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.radius = Math.random() * 2.8 + 1.8; // larger particle size (1.8px - 4.6px)
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // Random base drift direction
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 0.4 + 0.1) * config.baseSpeed;
        this.driftX = Math.cos(angle) * speed;
        this.driftY = Math.sin(angle) * speed;
        
        this.vx = this.driftX;
        this.vy = this.driftY;
        
        const colorData = getRandomColor();
        this.colorBase = colorData.base;
        this.colorOpacity = colorData.opacity;
      }

      update(mouse) {
        let forceX = 0;
        let forceY = 0;

        if (mouse && mouse.isActive && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < config.interactionRadius) {
            // Attraction: pull particles gently towards the cursor with ease-out interpolation
            const force = (config.interactionRadius - dist) / config.interactionRadius;
            forceX = (dx / dist) * force * config.attractionForce;
            forceY = (dy / dist) * force * config.attractionForce;
          }
        }

        // Apply friction and blend back towards original drift velocity
        this.vx = this.vx * 0.95 + this.driftX * 0.05 + forceX;
        this.vy = this.vy * 0.95 + this.driftY * 0.05 + forceY;

        // Clamp speed to prevent wild acceleration
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = prefersReducedMotion ? 0.1 : 1.8;
        if (speed > maxSpeed) {
          this.vx = (this.vx / speed) * maxSpeed;
          this.vy = (this.vy / speed) * maxSpeed;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Wrapping boundaries
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.y > canvas.height + 10) this.y = -10;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorBase}${this.colorOpacity})`;
        ctx.fill();
      }
    }

    // Set size and initialize particles
    const initCanvas = () => {
      const rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      config = getParticleConfig();
      
      particles = [];
      for (let i = 0; i < config.count; i++) {
        particles.push(new Particle());
      }
    };

    initCanvas();

    // Handle resizing
    let resizeTimeout;
    const handleResize = () => {
      // Debounce resize to prevent performance drop during active dragging
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const rect = canvas.parentNode.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        config = getParticleConfig();
        
        // Re-scale/clamp particles to the new viewport size safely
        particles.forEach(p => {
          if (p.x > canvas.width) p.x = Math.random() * canvas.width;
          if (p.y > canvas.height) p.y = Math.random() * canvas.height;
        });

        // Adjust count if viewport bounds changed classes (desktop vs mobile)
        if (particles.length !== config.count) {
          if (particles.length < config.count) {
            const diff = config.count - particles.length;
            for (let i = 0; i < diff; i++) {
              particles.push(new Particle());
            }
          } else {
            particles = particles.slice(0, config.count);
          }
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      // Keep canvas display size synchronized to handle layout shifts and initial mounts
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        particles.forEach(p => {
          if (p.x > canvas.width) p.x = Math.random() * canvas.width;
          if (p.y > canvas.height) p.y = Math.random() * canvas.height;
        });
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef?.current;

      // Update and Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(mouse);
        p.draw();
      }

      // Draw faint connections between close particles
      if (!prefersReducedMotion) {
        ctx.lineWidth = 0.6;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const pi = particles[i];
            const pj = particles[j];
            
            const dx = pi.x - pj.x;
            const dy = pi.y - pj.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < config.connectionDistance) {
              const alpha = (1 - (dist / config.connectionDistance)) * 0.07; // extremely light connection
              ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`; // slate-400 tint
              ctx.beginPath();
              ctx.moveTo(pi.x, pi.y);
              ctx.lineTo(pj.x, pj.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [mouseRef]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 block pointer-events-none"
    />
  );
}
