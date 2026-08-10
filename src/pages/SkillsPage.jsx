import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, Cloud, Cpu, Server, LayoutGrid, ChevronRight, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerContainer from '../components/animations/StaggerContainer';
import AnimatedProgressBar from '../components/animations/AnimatedProgressBar';

export default function SkillsPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { id: 'All', label: t('skillsPage.categories.All'), icon: <LayoutGrid size={16} /> },
    { id: 'Frontend', label: t('skillsPage.categories.Frontend'), icon: <LayoutGrid size={16} /> },
    { id: 'Backend', label: t('skillsPage.categories.Backend'), icon: <Server size={16} /> },
    { id: 'Database', label: t('skillsPage.categories.Database'), icon: <Database size={16} /> },
    { id: 'DevOps', label: t('skillsPage.categories.DevOps'), icon: <Cloud size={16} /> },
    { id: 'Architecture', label: t('skillsPage.categories.Architecture'), icon: <Cpu size={16} /> },
  ];

  const coreSkills = [
    {
      name: "React",
      category: "Frontend",
      description: t('skillsPage.skillDescriptions.React'),
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#61dafb]" fill="currentColor">
          <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-5c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-3.87 0-7-1.12-7-2s3.13-2 7-2 7 1.12 7 2-3.13 2-7 2zm-7.78 7.5c-2.48 4.31-1.1 7.23.9 8.38 2 1.16 5.58-.29 8.07-3.24-3.41-.6-6.42-2.34-8.97-5.14zm1.74-1c2.25 2.47 4.9 4 7.9 4.5-.47.88-1 1.7-1.59 2.42-2.18 2.58-4.93 3.69-6.31 2.9-1.38-.8-1.57-3.23.36-6.82zm13.82-4.14c-2.55 2.8-5.56 4.54-8.97 5.14 2.49 2.95 6.07 4.4 8.07 3.24 2-1.15 3.38-4.07.9-8.38zm-3.66 9.52c-1.38.79-4.13-.32-6.31-2.9-.59-.72-1.12-1.54-1.59-2.42 3-.5 5.65-2.03 7.9-4.5 1.93 3.59 1.74 6.02.36 6.82z"/>
        </svg>
      )
    },
    {
      name: "Angular",
      category: "Frontend",
      description: t('skillsPage.skillDescriptions.Angular'),
      rating: 4,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#dd0031]" fill="currentColor">
          <path d="M12 2.5L2.8 5.8l1.4 12.2L12 21.5l7.8-3.5 1.4-12.2L12 2.5zm0 3l5.3 12.2H15l-1.1-2.7H10.1L9 17.7H6.7L12 5.5zm1.5 7L12 8.7 10.5 12.5h3z"/>
        </svg>
      )
    },
    {
      name: "TypeScript",
      category: "Frontend",
      description: t('skillsPage.skillDescriptions.TypeScript'),
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#3178c6]" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111.473.075.908.216 1.305.422v2.738a5.213 5.213 0 0 0-1.378-.478 7.37 7.37 0 0 0-1.425-.131c-.507 0-.89.08-1.149.24-.258.16-.388.403-.388.731 0 .225.07.413.211.563.14.149.347.28.619.393.272.113.614.23.1026.352.412.122.848.271 1.308.449.46.179.872.417 1.238.713.365.295.647.665.844 1.111.197.445.295 1.003.295 1.673 0 .76-.178 1.416-.534 1.969-.357.553-.848.975-1.472 1.266-.624.29-1.359.435-2.208.435-.769 0-1.505-.084-2.208-.253a9.803 9.803 0 0 1-1.922-.703v-2.925c.684.441 1.406.778 2.166 1.012.759.234 1.444.352 2.053.352.516 0 .914-.089 1.195-.267.282-.178.422-.44.422-.788 0-.253-.085-.46-.253-.619-.169-.159-.398-.295-.689-.408-.291-.112-.642-.225-1.055-.337a10.875 10.875 0 0 1-1.308-.436 4.398 4.398 0 0 1-1.214-.712 2.766 2.766 0 0 1-.811-1.102c-.183-.436-.274-.97-.274-1.603 0-.741.173-1.378.52-1.913.347-.534.825-.942 1.434-1.223.61-.282 1.327-.422 2.152-.422zm-6.6 0v2.625h-3.3v10.875H5.4V12.375h-3.3V9.75h9.75z"/>
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      description: t('skillsPage.skillDescriptions.Tailwind CSS'),
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#38bdf8]" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      )
    },
    {
      name: "Laravel",
      category: "Backend",
      description: t('skillsPage.skillDescriptions.Laravel'),
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#ff2d20]" fill="currentColor">
          <path d="M12 1.5L2.5 5.5v7c0 5.25 4 10 9.5 11 5.5-1 9.5-5.75 9.5-11v-7L12 1.5zm6 11c0 3.75-2.5 7-6 8-3.5-1-6-4.25-6-8V7.25l6-2.5 6 2.5V12.5z"/>
        </svg>
      )
    },
    {
      name: "PHP",
      category: "Backend",
      description: t('skillsPage.skillDescriptions.PHP'),
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#777bb4]" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2v-5h2v5z"/>
        </svg>
      )
    },
    {
      name: "Node.js",
      category: "Backend",
      description: t('skillsPage.skillDescriptions.Node.js'),
      rating: 4,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#68a063]" fill="currentColor">
          <path d="M12 2a1 1 0 0 1 .5.13l7 4.07a1 1 0 0 1 .5.87v8.13a1 1 0 0 1-.5.87l-7 4.07a1 1 0 0 1-1 0l-7-4.07a1 1 0 0 1-.5-.87V7.07a1 1 0 0 1 .5-.87l7-4.07A1 1 0 0 1 12 2zm-1 3.25L5 8.7v6.6l6 3.45V14.6l-4-2.3v-1.15l4 2.3V5.25zm2 0v8.2l4-2.3V9.95l-4-2.3V5.25z"/>
        </svg>
      )
    },
    {
      name: "MySQL",
      category: "Database",
      description: t('skillsPage.skillDescriptions.MySQL'),
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#00758f]" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.029C18.31 21.164 22 17.013 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    },
    {
      name: "Redis",
      category: "Database",
      description: t('skillsPage.skillDescriptions.Redis'),
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#d82c20]" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5zm-8-3v4l8 4 8-4V9l-8 4-8-4z"/>
        </svg>
      )
    },
    {
      name: "Docker",
      category: "DevOps",
      description: t('skillsPage.skillDescriptions.Docker'),
      rating: 4,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#0db7ed]" fill="currentColor">
          <path d="M13.962 10.775h-2.43V8.337h2.43v2.438zm0-2.924h-2.43V5.414h2.43v2.437zm-2.923 2.924H8.61V8.337h2.43v2.438zm0-2.924H8.61V5.414h2.43v2.437zM8.61 10.775H6.18V8.337H8.61v2.438zm5.836-2.924h2.43V5.414h-2.43v2.437zm0 2.924h2.43V8.337h-2.43v2.438zm2.923-2.924h2.43V5.414h-2.43v2.437zm-8.27 4.908c-.066-.008-.13-.016-.2-.023a10.963 10.963 0 0 0-4.582.529l-.248.1a4.93 4.93 0 0 0-2.316 2.378c-.287.653-.393 1.343-.377 2.052.033 1.488.946 2.504 2.278 2.504h15.293c1.5 0 2.479-1.223 2.479-2.73 0-2.723-3.08-4.908-7.538-4.908z"/>
        </svg>
      )
    },
    {
      name: "Git",
      category: "DevOps",
      description: t('skillsPage.skillDescriptions.Git'),
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#f05032]" fill="currentColor">
          <path d="M23.2 11.5L12.5.8a1.7 1.7 0 0 0-2.4 0L8.7 2.2l3 3a1.7 1.7 0 0 1 .4 1.7L10.3 8.7a1.7 1.7 0 0 1-1.7-.4L6.9 6.6a1.7 1.7 0 0 1-.3-1.8L9 .8a1.7 1.7 0 0 0-2.4 0L.8 6.6a1.7 1.7 0 0 0 0 2.4l10.7 10.7a1.7 1.7 0 0 0 2.4 0l9.3-9.3a1.7 1.7 0 0 0 0-2.4z"/>
        </svg>
      )
    },
    {
      name: "REST API",
      category: "Architecture",
      description: t('skillsPage.skillDescriptions.REST API'),
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      )
    }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? coreSkills 
    : coreSkills.filter(skill => skill.category === activeCategory);

  const currentlyUsing = [
    { name: "React", icon: coreSkills[0].icon },
    { name: "Laravel", icon: coreSkills[4].icon },
    { name: "MySQL", icon: coreSkills[7].icon },
    { name: "Tailwind CSS", icon: coreSkills[3].icon },
    { name: "TypeScript", icon: coreSkills[2].icon }
  ];

  const learningExploring = [
    {
      name: "Kafka",
      description: t('skillsPage.learningSkills.Kafka'),
      progress: 60,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-slate-800" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4h-2v-5h2v5z"/>
        </svg>
      )
    },
    {
      name: "AWS",
      description: t('skillsPage.learningSkills.AWS'),
      progress: 50,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#ff9900]" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.3c-.6 0-1-.4-1-.9s.4-.9 1-.9 1 .4 1 .9-.4.9-1 .9zm3.8-3.4c-.6 0-1-.4-1-.9s.4-.9 1-.9 1 .4 1 .9-.4.9-1 .9zm-1.9-2.7c-.6 0-1-.4-1-.9s.4-.9 1-.9 1 .4 1 .9-.4.9-1 .9z"/>
        </svg>
      )
    },
    {
      name: "GraphQL",
      description: t('skillsPage.learningSkills.GraphQL'),
      progress: 40,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#e10098]" fill="currentColor">
          <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm8.5 5.9L12.5 12V4.4l8 3.5zm-9 0L3.5 12V4.4l8 3.5zm-8 6l8 4.5v-7.6l-8-3.5v6.6zm9 4.5l8-4.5v-6.6l-8 3.5v7.6z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-transparent flex flex-col justify-between font-sans pt-28 md:pt-36">
      
      {/* Navigation */}
      <Header />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 py-10 flex-1 w-full space-y-10">
        
        {/* Title */}
        <ScrollReveal direction="up" delay={100}>
          <h1 className="font-display font-extrabold text-4xl text-slate-900 tracking-tight">
            {t('skillsPage.title')}
          </h1>
        </ScrollReveal>

        {/* Categories Tab Row */}
        <ScrollReveal direction="up" delay={200}>
          <div className="flex overflow-x-auto pb-2 scrollbar-none gap-3 -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-sm font-semibold tracking-wide border transition-all shrink-0 cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/10'
                    : 'bg-white text-slate-600 border-slate-100 hover:border-slate-200 hover:text-slate-900 shadow-sm'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Core Skills Section */}
        <div className="space-y-6">
          <ScrollReveal direction="up">
            <h2 className="font-display font-bold text-lg text-slate-900 tracking-tight">
              {t('skillsPage.coreSkillsTitle')}
            </h2>
          </ScrollReveal>

          <StaggerContainer 
            stagger={100}
            direction="up"
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-white border border-slate-100/80 rounded-3xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                    {skill.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-sm text-slate-900 leading-none">
                      {skill.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-snug">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Star rating dots */}
                <div className="flex items-center space-x-1.5 pt-6 pl-18">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full ${
                        i < skill.rating ? 'bg-blue-600' : 'bg-slate-200'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>

        {/* Currently using most */}
        <div className="space-y-4">
          <ScrollReveal direction="up" className="flex items-center justify-between">
            <h2 className="font-display font-bold text-lg text-slate-900 tracking-tight">
              {t('skillsPage.currentlyUsingTitle')}
            </h2>
            <Link 
              to="/" 
              className="text-xs font-bold tracking-wider text-blue-600 hover:text-blue-700 uppercase flex items-center space-x-1"
            >
              <span>{t('skillsPage.viewWorkflow')}</span>
              <span>&rarr;</span>
            </Link>
          </ScrollReveal>

          <StaggerContainer 
            stagger={80} 
            direction="none" 
            scale={0.95} 
            className="bg-white border border-slate-100 rounded-3xl p-5 flex flex-wrap gap-4 items-center"
          >
            {currentlyUsing.map((tech) => (
              <div 
                key={tech.name} 
                className="flex items-center space-x-2 bg-slate-50 border border-slate-100/50 py-2 px-4 rounded-2xl hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  {tech.icon}
                </div>
                <span className="text-xs font-bold text-slate-700">{tech.name}</span>
              </div>
            ))}
          </StaggerContainer>
        </div>

        {/* Learning / Exploring */}
        <div className="space-y-4">
          <ScrollReveal direction="up" className="flex items-center justify-between">
            <h2 className="font-display font-bold text-lg text-slate-900 tracking-tight">
              {t('skillsPage.learningExploringTitle')}
            </h2>
            <Link 
              to="/" 
              className="text-xs font-bold tracking-wider text-blue-600 hover:text-blue-700 uppercase flex items-center space-x-1"
            >
              <span>{t('skillsPage.viewRoadmap')}</span>
              <span>&rarr;</span>
            </Link>
          </ScrollReveal>

          <StaggerContainer 
            stagger={100}
            direction="up"
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {learningExploring.map((tech) => (
              <div 
                key={tech.name} 
                className="bg-white border border-slate-100 rounded-3xl p-5 space-y-4 flex flex-col justify-between hover:shadow-sm transition-all duration-300 h-full"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                    {tech.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-sm text-slate-900 leading-none">
                      {tech.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-snug">
                      {tech.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <AnimatedProgressBar target={tech.progress} duration={1200} />
                  <div className="flex justify-end text-[10px] font-bold text-slate-400">
                    <span>{tech.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-2xl border border-blue-100 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
}
