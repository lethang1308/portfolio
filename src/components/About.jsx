import React from 'react';
import { Briefcase, CheckCircle2, MapPin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from './animations/ScrollReveal';

export default function About() {
  const { t } = useTranslation();

  const details = [
    {
      icon: <Briefcase className="text-blue-600" size={20} />,
      text: t('about.exp'),
    },
    {
      icon: <CheckCircle2 className="text-blue-600" size={20} />,
      text: t('about.available'),
    },
    {
      icon: <MapPin className="text-blue-600" size={20} />,
      text: t('about.location'),
    },
    {
      icon: <Mail className="text-blue-600" size={20} />,
      text: "dinhthang.dev@gmail.com",
      href: "mailto:dinhthang.dev@gmail.com",
    },
  ];

  return (
    <section id="about" className="py-20 bg-transparent border-t border-slate-100/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* Left Column: Heading & Text */}
          <ScrollReveal direction="up" duration={800} className="space-y-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
              {t('about.title')}
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg">
              {t('about.p1')}
            </p>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg">
              {t('about.p2')}
            </p>
          </ScrollReveal>

          {/* Right Column: Key Details */}
          <ScrollReveal 
            direction="up" 
            delay={200} 
            duration={800}
            className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 md:p-8 space-y-6 w-full"
          >
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
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
