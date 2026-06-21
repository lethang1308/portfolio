import React from 'react';
import { Briefcase, CheckCircle2, MapPin, Mail } from 'lucide-react';

export default function About() {
  const details = [
    {
      icon: <Briefcase className="text-blue-600" size={20} />,
      text: "3+ Years Experience",
    },
    {
      icon: <CheckCircle2 className="text-blue-600" size={20} />,
      text: "Available for new opportunities",
    },
    {
      icon: <MapPin className="text-blue-600" size={20} />,
      text: "Ho Chi Minh City, Vietnam",
    },
    {
      icon: <Mail className="text-blue-600" size={20} />,
      text: "duy.hoang.dev@gmail.com",
      href: "mailto:duy.hoang.dev@gmail.com",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* Left Column: Heading & Text */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
              About Me
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg">
              I'm a backend developer with a strong passion for building scalable applications 
              and designing clean, maintainable code. I enjoy working with modern technologies 
              and solving challenging architectural and algorithmic problems.
            </p>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg">
              My expertise covers designing RESTful and GraphQL APIs, optimizing database queries, 
              managing containerized workloads, and implementing secure authentication mechanisms.
            </p>
          </div>

          {/* Right Column: Key Details */}
          <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 md:p-8 space-y-6">
            {details.map((detail, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  {detail.icon}
                </div>
                {detail.href ? (
                  <a 
                    href={detail.href}
                    className="text-slate-700 text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    {detail.text}
                  </a>
                ) : (
                  <span className="text-slate-700 text-sm font-medium">
                    {detail.text}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
