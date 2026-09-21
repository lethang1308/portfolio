import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { User, Star, Milestone, ShieldCheck, Award, Target, ChevronRight, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroImg from '../assets/1.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerContainer from '../components/animations/StaggerContainer';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import SkillIcon from '../components/SkillIcon';
import { homeSkills } from '../data/skills';

/**
 * Custom Counter Component for Statistics
 */
function Counter({ end, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, once: true });

  useEffect(() => {
    if (!isVisible) return;
    
    const target = parseInt(end, 10);
    if (isNaN(target)) {
      setCount(end);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutPage() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = t('aboutPage.principles', { returnObjects: true }) || [];
  const journey = t('aboutPage.journey', { returnObjects: true }) || [];
  const buildSystems = t('aboutPage.buildSystems', { returnObjects: true }) || [];
  const focusAreas = t('aboutPage.focusAreas', { returnObjects: true }) || [];

  const buildSystemIcons = [
    (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12h25" />
        <path d="M6 12L10 4l4 16 4-12 2 4" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  ];

  return (
    <div className="min-h-screen bg-transparent flex flex-col justify-between font-sans pt-28 md:pt-36">
      
      {/* Navigation */}
      <Header />

      {/* Main Bento Grid */}
      <main className="max-w-6xl mx-auto px-6 py-10 flex-1 w-full space-y-8">
        
        {/* Title Header */}
        <div className="flex items-center space-x-4">
          <ScrollReveal direction="down">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <User size={24} />
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal direction="up" delay={100}>
              <h1 className="font-display font-extrabold text-4xl text-slate-900 tracking-tight leading-none">
                {t('aboutPage.title')}
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <p className="text-slate-500 text-sm mt-2">
                {t('aboutPage.subtitle')}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Bento Row 1: Profile & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Profile Card (4/12 Cols) */}
          <ScrollReveal 
            direction="left" 
            duration={800} 
            className="lg:col-span-4 w-full flex"
          >
            <div className="bg-white border border-slate-100/80 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center space-y-4 w-full">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-slate-50 shadow-md">
                <img src={heroImg} alt="Dinh Thang Profile" className="w-full h-full object-cover object-center" />
              </div>
              <div>
                <h2 className="font-display font-extrabold text-xl text-slate-900">Dinh Thang</h2>
                <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mt-1">{t('aboutPage.role')}</p>
              </div>
              
              <div className="w-full border-t border-slate-100 pt-4 space-y-3 text-left">
                <div className="flex items-center space-x-3 text-slate-600 text-xs">
                  <MapPin size={16} className="text-slate-400" />
                  <span>{t('aboutPage.location')}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-semibold text-slate-800">{t('aboutPage.status')}</span>
                </div>
              </div>

              {/* Social Icons inside Profile Card */}
              <div className="flex items-center space-x-3 pt-2">
                <a href="https://github.com/lethang1308" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-950 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-950 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:ledinhthang13082003@gmail.com" className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-950 transition-colors">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* My Story Card (8/12 Cols) */}
          <ScrollReveal 
            direction="right" 
            duration={800} 
            className="lg:col-span-8 w-full flex"
          >
            <div className="bg-white border border-slate-100/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-4 w-full">
              <div className="flex items-center space-x-3 text-slate-800">
                <User size={20} className="text-blue-600" />
                <h2 className="font-display font-extrabold text-lg">{t('aboutPage.storyTitle')}</h2>
              </div>
              
              <div className="text-slate-500 text-sm md:text-base leading-relaxed space-y-4">
                <p>{t('aboutPage.storyP1')}</p>
                <p>{t('aboutPage.storyP2')}</p>
                <p>{t('aboutPage.storyP3')}</p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Bento Row 2: Principles, Timeline & How I Build Systems */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: My Principles (4/12 Cols) */}
          <ScrollReveal 
            direction="up" 
            delay={0} 
            className="lg:col-span-4 w-full flex"
          >
            <div className="bg-white border border-slate-100/80 rounded-3xl p-6 shadow-sm space-y-6 w-full">
              <div className="flex items-center space-x-3 text-slate-800">
                <Star size={20} className="text-blue-600" />
                <h2 className="font-display font-extrabold text-lg">{t('aboutPage.principlesTitle')}</h2>
              </div>
              
              <ul className="space-y-4">
                {principles.map((principle, index) => (
                  <li key={index} className="flex items-start space-x-3 text-xs md:text-sm text-slate-600 leading-snug">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Center: Backend Journey (4/12 Cols) */}
          <ScrollReveal 
            direction="up" 
            delay={150} 
            className="lg:col-span-4 w-full flex"
          >
            <div className="bg-white border border-slate-100/80 rounded-3xl p-6 shadow-sm space-y-6 w-full">
              <div className="flex items-center space-x-3 text-slate-800">
                <Milestone size={20} className="text-blue-600" />
                <h2 className="font-display font-extrabold text-lg">{t('aboutPage.journeyTitle')}</h2>
              </div>

              {/* Timeline */}
              <div className="relative border-l-2 border-slate-100 pl-4 ml-2 space-y-6">
                {journey.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle dot on line */}
                    <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white" />
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {item.year}
                    </span>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: How I Build Systems (4/12 Cols) */}
          <ScrollReveal 
            direction="up" 
            delay={300} 
            className="lg:col-span-4 w-full flex"
          >
            <div className="bg-white border border-slate-100/80 rounded-3xl p-6 shadow-sm space-y-6 w-full">
              <div className="flex items-center space-x-3 text-slate-800">
                <ShieldCheck size={20} className="text-blue-600" />
                <h2 className="font-display font-extrabold text-lg">{t('aboutPage.buildSystemsTitle')}</h2>
              </div>

              <div className="space-y-4 overflow-y-auto max-h-[360px] scrollbar-none pr-1 w-full">
                {buildSystems.map((sys, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      {buildSystemIcons[idx % buildSystemIcons.length]}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xs text-slate-900 leading-tight">
                        {sys.title}
                      </h3>
                      <p className="text-slate-500 text-[11px] leading-snug mt-0.5">
                        {sys.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Bento Row 3: Favorite Technologies & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Favorite Tech (8/12 Cols) */}
          <ScrollReveal 
            direction="left" 
            duration={800} 
            className="lg:col-span-8 w-full flex"
          >
            <div className="bg-white border border-slate-100/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 w-full">
              <div className="flex items-center space-x-3 text-slate-800">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <h2 className="font-display font-extrabold text-lg">{t('aboutPage.favoriteTechTitle')}</h2>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {homeSkills.map((name) => (
                  <div key={name} className="flex flex-col items-center p-3 rounded-2xl bg-slate-50/50 border border-slate-100 hover:scale-105 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer group">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      <SkillIcon name={name} className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 mt-2 text-center uppercase tracking-wider group-hover:text-blue-600 transition-colors">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Achievements (4/12 Cols) */}
          <ScrollReveal 
            direction="right" 
            duration={800} 
            className="lg:col-span-4 w-full flex"
          >
            <div className="bg-white border border-slate-100/80 rounded-3xl p-6 shadow-sm space-y-6 w-full">
              <div className="flex items-center space-x-3 text-slate-800">
                <Award size={20} className="text-blue-600" />
                <h2 className="font-display font-extrabold text-lg">{t('aboutPage.achievementsTitle')}</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-center space-y-1">
                  <div className="text-2xl font-extrabold text-blue-600 font-display">
                    <Counter end={15} suffix="+" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t('aboutPage.achievements.projects')}</div>
                </div>
                <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-center space-y-1">
                  <div className="text-2xl font-extrabold text-blue-600 font-display">
                    <Counter end={5} suffix="+" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t('aboutPage.achievements.openSource')}</div>
                </div>
                <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-center space-y-1">
                  <div className="text-2xl font-extrabold text-blue-600 font-display">
                    <Counter end={3} suffix="+" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t('aboutPage.achievements.experience')}</div>
                </div>
                <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-center space-y-1">
                  <div className="text-2xl font-extrabold text-blue-600 font-display">
                    <Counter end={100} suffix="K+" />
                  </div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider leading-none">{t('aboutPage.achievements.rps')}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Bento Row 4: Currently Focused On */}
        <div className="bg-white border border-slate-100/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-slate-800">
            <Target size={20} className="text-blue-600" />
            <h2 className="font-display font-extrabold text-lg">{t('aboutPage.focusedTitle')}</h2>
          </div>

          <StaggerContainer 
            stagger={100} 
            direction="up" 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {focusAreas.map((area, idx) => (
              <div key={idx} className="bg-slate-50/50 border border-slate-100 p-4 rounded-2xl space-y-1 hover:shadow-sm transition-shadow">
                <h3 className="font-display font-bold text-sm text-slate-900">{area.title}</h3>
                <p className="text-slate-500 text-xs leading-normal">{area.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>

        {/* Bento Row 5: Call to Action Banner */}
        <ScrollReveal 
          direction="up" 
          scale={0.98} 
          duration={800}
          className="w-full"
        >
          <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <h2 className="font-display font-extrabold text-xl md:text-2xl text-slate-900 leading-tight">
                {t('aboutPage.ctaTitle')}
              </h2>
              <p className="text-slate-500 text-sm max-w-lg">
                {t('aboutPage.ctaDesc')}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0 justify-center">
              <Link 
                to="/" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs tracking-wider uppercase transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {t('aboutPage.ctaProjects')}
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center space-x-2 border border-slate-200 hover:bg-slate-50 bg-white text-slate-700 font-bold px-6 py-3.5 rounded-xl text-xs tracking-wider uppercase transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail size={14} />
                <span>{t('aboutPage.ctaContact')}</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
