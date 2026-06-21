import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/1.png';
import ParticleBackground from './animations/ParticleBackground';
import useMousePosition from '../hooks/useMousePosition';

/**
 * Premium, interactive Hero Banner component.
 * Features an interactive particle background (moving organically, attracted to mouse hover)
 * and custom-delayed fade-up entrance animations for layout content.
 */
export default function HeroBanner() {
  const heroRef = useRef(null);
  // Track mouse coordinates inside this section without triggering React re-renders
  const mouseRef = useMousePosition(heroRef);

  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white w-full select-none"
    >
      {/* Interactive Particle Background Canvas */}
      <ParticleBackground mouseRef={mouseRef} />

      {/* Decorative subtle background shape */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/20 -z-20 rounded-l-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Core Intro Content */}
        <div className="md:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Badge */}
          <span 
            className="text-blue-600 font-bold tracking-widest text-[10px] md:text-xs uppercase bg-blue-50 px-3 py-1 rounded animate-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            BACKEND DEVELOPER
          </span>
          
          {/* Title Text */}
          <h1 
            className="font-display font-extrabold text-5xl md:text-6xl text-slate-900 leading-[1.1] tracking-tight animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              Hoang Duy
            </span>
          </h1>
          
          {/* Subtitle / Description */}
          <p 
            className="text-slate-500 text-base md:text-lg max-w-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            I build reliable backend systems and APIs that solve real-world problems. 
            Focused on database optimization, clean architecture, and highly performant codebases.
          </p>
          
          {/* Call to Actions */}
          <div 
            className="flex flex-wrap gap-4 pt-4 animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            <a 
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
            </a>
            <Link 
              to="/contact"
              className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-lg text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Avatar / Profile Display */}
        <div 
          className="md:col-span-5 relative flex justify-center w-full animate-fade-up"
          style={{ animationDelay: '500ms' }}
        >
          {/* Dot patterns behind avatar */}
          <div className="absolute -right-4 top-4 w-24 h-24 bg-grid-dots opacity-40 -z-10 pointer-events-none" />
          <div className="absolute -left-6 bottom-6 w-20 h-20 bg-grid-dots opacity-30 -z-10 pointer-events-none" />
          
          {/* Avatar frame */}
          <div className="relative w-full max-w-sm aspect-[4/5]">
            <img 
              src={heroImg} 
              alt="Hoang Duy Backend Developer Avatar" 
              className="w-full h-full object-cover object-center transform hover:scale-[1.03] transition-transform duration-700 ease-out select-none pointer-events-none filter drop-shadow-[0_20px_35px_rgba(59,130,246,0.15)]"
            />
          </div>
          
          {/* Floating Availability Tag */}
          {/* <div className="absolute -left-4 top-1/3 bg-white/90 backdrop-blur border border-slate-100 p-3 rounded-xl shadow-lg flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-slate-700">
              Open for Freelance & Full-time
            </span>
          </div> */}
        </div>

      </div>
    </section>
  );
}
