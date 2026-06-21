import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300">
          
          {/* Left Text Column */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 tracking-tight">
              Interested in working together?
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-lg">
              I'm always open to discussing new projects, APIs architecture design, 
              system optimization, or full-time opportunities.
            </p>
          </div>

          {/* Right Button Column */}
          <div className="shrink-0">
            <a 
              href="mailto:duy.hoang.dev@gmail.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
