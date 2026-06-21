import React from 'react';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

export default function Skills() {
  const skillsList = [
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#68a063]" fill="currentColor">
          <path d="M12 2a1 1 0 0 1 .5.13l7 4.07a1 1 0 0 1 .5.87v8.13a1 1 0 0 1-.5.87l-7 4.07a1 1 0 0 1-1 0l-7-4.07a1 1 0 0 1-.5-.87V7.07a1 1 0 0 1 .5-.87l7-4.07A1 1 0 0 1 12 2zm-1 3.25L5 8.7v6.6l6 3.45V14.6l-4-2.3v-1.15l4 2.3V5.25zm2 0v8.2l4-2.3V9.95l-4-2.3V5.25z"/>
        </svg>
      )
    },
    {
      name: "NestJS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#ea2849]" fill="currentColor">
          <path d="M12 1.5L2.5 5.5v7c0 5.25 4 10 9.5 11 5.5-1 9.5-5.75 9.5-11v-7L12 1.5zm6 11c0 3.75-2.5 7-6 8-3.5-1-6-4.25-6-8V7.25l6-2.5 6 2.5V12.5z M12 6.5l-4 3.5h3v4h2v-4h3l-4-3.5z"/>
        </svg>
      )
    },
    {
      name: "Express.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
          <text x="8" y="15" fill="currentColor" stroke="none" fontSize="8" fontWeight="bold">EX</text>
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#336791]" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4h-2v-5h2v5z"/>
        </svg>
      )
    },
    {
      name: "MySQL",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#00758f]" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.029C18.31 21.164 22 17.013 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    },
    {
      name: "MongoDB",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#13aa52]" fill="currentColor">
          <path d="M12 2a9.96 9.96 0 0 0-4.7 1.2c-.3.2-.3.6 0 .8.8.5 1.5 1.1 2.2 1.8.8.8 1.4 1.8 1.8 2.8.4-1 .9-2 1.8-2.8a12.8 12.8 0 0 1 2.2-1.8c.3-.2.3-.6 0-.8A9.96 9.96 0 0 0 12 2zm-2.4 8.7c-.1-.7-.1-1.5 0-2.2-.4.6-.7 1.3-.9 2 .2.1.6.2.9.2zm4.8 0c.3 0 .7-.1.9-.2-.2-.7-.5-1.4-.9-2 .1.7.1 1.5 0 2.2zM12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/>
        </svg>
      )
    },
    {
      name: "Redis",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#d82c20]" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5zm-8-3v4l8 4 8-4V9l-8 4-8-4z"/>
        </svg>
      )
    },
    {
      name: "Docker",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#0db7ed]" fill="currentColor">
          <path d="M13.962 10.775h-2.43V8.337h2.43v2.438zm0-2.924h-2.43V5.414h2.43v2.437zm-2.923 2.924H8.61V8.337h2.43v2.438zm0-2.924H8.61V5.414h2.43v2.437zM8.61 10.775H6.18V8.337H8.61v2.438zm5.836-2.924h2.43V5.414h-2.43v2.437zm0 2.924h2.43V8.337h-2.43v2.438zm2.923-2.924h2.43V5.414h-2.43v2.437zm-8.27 4.908c-.066-.008-.13-.016-.2-.023a10.963 10.963 0 0 0-4.582.529l-.248.1a4.93 4.93 0 0 0-2.316 2.378c-.287.653-.393 1.343-.377 2.052.033 1.488.946 2.504 2.278 2.504h15.293c1.5 0 2.479-1.223 2.479-2.73 0-2.723-3.08-4.908-7.538-4.908z"/>
        </svg>
      )
    },
    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#f05032]" fill="currentColor">
          <path d="M23.2 11.5L12.5.8a1.7 1.7 0 0 0-2.4 0L8.7 2.2l3 3a1.7 1.7 0 0 1 .4 1.7L10.3 8.7a1.7 1.7 0 0 1-1.7-.4L6.9 6.6a1.7 1.7 0 0 1-.3-1.8L9 .8a1.7 1.7 0 0 0-2.4 0L.8 6.6a1.7 1.7 0 0 0 0 2.4l10.7 10.7a1.7 1.7 0 0 0 2.4 0l9.3-9.3a1.7 1.7 0 0 0 0-2.4z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up" duration={800}>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight text-center mb-16">
            Skills
          </h2>
        </ScrollReveal>
        
        <StaggerContainer 
          stagger={100}
          direction="up"
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        >
          {skillsList.map((skill) => (
            <div 
              key={skill.name} 
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center transform group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-300">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
              </div>
              <span className="text-xs font-bold text-slate-600 mt-4 group-hover:text-blue-600 tracking-wider transition-colors duration-300 uppercase">
                {skill.name}
              </span>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
