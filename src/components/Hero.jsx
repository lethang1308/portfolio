import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/1.png';
import ScrollReveal from './animations/ScrollReveal';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Decorative background shapes */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/50 -z-10 rounded-l-[100px]" />
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <ScrollReveal 
          direction="up" 
          duration={800}
          className="md:col-span-7 flex flex-col items-start space-y-6"
        >
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded">
            BACKEND DEVELOPER
          </span>
          
          <h1 className="font-display font-extrabold text-5xl md:text-6xl text-slate-900 leading-[1.1] tracking-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              Hoang Duy
            </span>
          </h1>
          
          <p className="text-slate-500 text-base md:text-lg max-w-lg leading-relaxed">
            I build reliable backend systems and APIs that solve real-world problems. 
            Focused on database optimization, clean architecture, and highly performant codebases.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
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
        </ScrollReveal>

        {/* Right Graphic Column */}
        <ScrollReveal 
          direction="up" 
          delay={200} 
          duration={800}
          className="md:col-span-5 relative flex justify-center w-full"
        >
          {/* Dot pattern background */}
          <div className="absolute -right-4 top-4 w-24 h-24 bg-grid-dots opacity-40 -z-10" />
          <div className="absolute -left-6 bottom-6 w-20 h-20 bg-grid-dots opacity-30 -z-10" />
          
          {/* Main Photo Card */}
          <div className="relative w-full max-w-sm aspect-[4/5] bg-gradient-to-tr from-slate-100 to-slate-50 rounded-3xl overflow-hidden shadow-2xl shadow-slate-100 border border-slate-100/50">
            <img 
              src={heroImg} 
              alt="Hoang Duy Backend Developer" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          
          {/* Small floating info badge */}
          <div className="absolute -left-4 top-1/3 bg-white/90 backdrop-blur border border-slate-100 p-3 rounded-xl shadow-lg flex items-center space-x-3 hover:scale-105 transition-transform">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-slate-700">
              Open for Freelance & Full-time
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
