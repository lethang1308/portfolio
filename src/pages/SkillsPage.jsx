import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, Cloud, Cpu, Server, LayoutGrid, ChevronRight, ArrowUp } from 'lucide-react';
import Footer from '../components/Footer';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerContainer from '../components/animations/StaggerContainer';
import AnimatedProgressBar from '../components/animations/AnimatedProgressBar';

export default function SkillsPage() {
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
    { id: 'All', label: 'All', icon: <LayoutGrid size={16} /> },
    { id: 'Backend', label: 'Backend', icon: <Server size={16} /> },
    { id: 'Database', label: 'Database', icon: <Database size={16} /> },
    { id: 'DevOps', label: 'DevOps', icon: <Cloud size={16} /> },
    { id: 'Architecture', label: 'Architecture', icon: <Cpu size={16} /> },
  ];

  const coreSkills = [
    {
      name: "Node.js",
      category: "Backend",
      description: "JavaScript runtime for scalable apps",
      rating: 4,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#68a063]" fill="currentColor">
          <path d="M12 2a1 1 0 0 1 .5.13l7 4.07a1 1 0 0 1 .5.87v8.13a1 1 0 0 1-.5.87l-7 4.07a1 1 0 0 1-1 0l-7-4.07a1 1 0 0 1-.5-.87V7.07a1 1 0 0 1 .5-.87l7-4.07A1 1 0 0 1 12 2zm-1 3.25L5 8.7v6.6l6 3.45V14.6l-4-2.3v-1.15l4 2.3V5.25zm2 0v8.2l4-2.3V9.95l-4-2.3V5.25z"/>
        </svg>
      )
    },
    {
      name: "NestJS",
      category: "Backend",
      description: "Progressive Node.js framework",
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#ea2849]" fill="currentColor">
          <path d="M12 1.5L2.5 5.5v7c0 5.25 4 10 9.5 11 5.5-1 9.5-5.75 9.5-11v-7L12 1.5zm6 11c0 3.75-2.5 7-6 8-3.5-1-6-4.25-6-8V7.25l6-2.5 6 2.5V12.5z M12 6.5l-4 3.5h3v4h2v-4h3l-4-3.5z"/>
        </svg>
      )
    },
    {
      name: "Express",
      category: "Backend",
      description: "Fast, unopinionated web framework",
      rating: 4,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
          <text x="8" y="15" fill="currentColor" stroke="none" fontSize="8" fontWeight="bold">EX</text>
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      category: "Database",
      description: "Advanced relational database",
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#336791]" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4h-2v-5h2v5z"/>
        </svg>
      )
    },
    {
      name: "MySQL",
      category: "Database",
      description: "Reliable relational database",
      rating: 4,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#00758f]" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.029C18.31 21.164 22 17.013 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    },
    {
      name: "MongoDB",
      category: "Database",
      description: "NoSQL document database",
      rating: 4,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#13aa52]" fill="currentColor">
          <path d="M12 2a9.96 9.96 0 0 0-4.7 1.2c-.3.2-.3.6 0 .8.8.5 1.5 1.1 2.2 1.8.8.8 1.4 1.8 1.8 2.8.4-1 .9-2 1.8-2.8a12.8 12.8 0 0 1 2.2-1.8c.3-.2.3-.6 0-.8A9.96 9.96 0 0 0 12 2zm-2.4 8.7c-.1-.7-.1-1.5 0-2.2-.4.6-.7 1.3-.9 2 .2.1.6.2.9.2zm4.8 0c.3 0 .7-.1.9-.2-.2-.7-.5-1.4-.9-2 .1.7.1 1.5 0 2.2zM12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/>
        </svg>
      )
    },
    {
      name: "Redis",
      category: "Database",
      description: "In-memory data structure store",
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
      description: "Containerization platform",
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
      description: "Version control system",
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#f05032]" fill="currentColor">
          <path d="M23.2 11.5L12.5.8a1.7 1.7 0 0 0-2.4 0L8.7 2.2l3 3a1.7 1.7 0 0 1 .4 1.7L10.3 8.7a1.7 1.7 0 0 1-1.7-.4L6.9 6.6a1.7 1.7 0 0 1-.3-1.8L9 .8a1.7 1.7 0 0 0-2.4 0L.8 6.6a1.7 1.7 0 0 0 0 2.4l10.7 10.7a1.7 1.7 0 0 0 2.4 0l9.3-9.3a1.7 1.7 0 0 0 0-2.4z"/>
        </svg>
      )
    },
    {
      name: "JWT Auth",
      category: "Architecture",
      description: "Secure authentication with JWT",
      rating: 4,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      )
    },
    {
      name: "REST API",
      category: "Architecture",
      description: "Design & build RESTful services",
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      )
    },
    {
      name: "System Design",
      category: "Architecture",
      description: "Scalable & reliable system architecture",
      rating: 5,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <line x1="7" y1="10" x2="7" y2="14" />
          <line x1="10" y1="7" x2="14" y2="7" />
          <line x1="14" y1="17" x2="10" y2="17" />
          <line x1="17" y1="10" x2="17" y2="14" />
        </svg>
      )
    }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? coreSkills 
    : coreSkills.filter(skill => skill.category === activeCategory);

  const currentlyUsing = [
    { name: "Node.js", icon: coreSkills[0].icon },
    { name: "NestJS", icon: coreSkills[1].icon },
    { name: "PostgreSQL", icon: coreSkills[3].icon },
    { name: "Docker", icon: coreSkills[7].icon },
    { name: "Git", icon: coreSkills[8].icon }
  ];

  const learningExploring = [
    {
      name: "Kafka",
      description: "Event streaming platform",
      progress: 60,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-slate-800" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4h-2v-5h2v5z"/>
        </svg>
      )
    },
    {
      name: "AWS",
      description: "Cloud services & deployment",
      progress: 50,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#ff9900]" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.3c-.6 0-1-.4-1-.9s.4-.9 1-.9 1 .4 1 .9-.4.9-1 .9zm3.8-3.4c-.6 0-1-.4-1-.9s.4-.9 1-.9 1 .4 1 .9-.4.9-1 .9zm-1.9-2.7c-.6 0-1-.4-1-.9s.4-.9 1-.9 1 .4 1 .9-.4.9-1 .9z"/>
        </svg>
      )
    },
    {
      name: "GraphQL",
      description: "Query language for APIs",
      progress: 40,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#e10098]" fill="currentColor">
          <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm8.5 5.9L12.5 12V4.4l8 3.5zm-9 0L3.5 12V4.4l8 3.5zm-8 6l8 4.5v-7.6l-8-3.5v6.6zm9 4.5l8-4.5v-6.6l-8 3.5v7.6z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col justify-between font-sans">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100 py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="border-[2px] border-slate-900 px-3 py-1 font-display font-extrabold text-lg tracking-wider text-slate-900">
            HD
          </Link>
          <ScrollReveal direction="down" className="flex items-center space-x-1 text-xs font-bold tracking-widest text-slate-600 uppercase">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-blue-600">Skills</span>
          </ScrollReveal>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 py-10 flex-1 w-full space-y-10">
        
        {/* Title */}
        <ScrollReveal direction="up" delay={100}>
          <h1 className="font-display font-extrabold text-4xl text-slate-900 tracking-tight">
            Skills
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
              Core Skills
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
              Currently using most
            </h2>
            <Link 
              to="/" 
              className="text-xs font-bold tracking-wider text-blue-600 hover:text-blue-700 uppercase flex items-center space-x-1"
            >
              <span>View workflow</span>
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
              Learning / Exploring
            </h2>
            <Link 
              to="/" 
              className="text-xs font-bold tracking-wider text-blue-600 hover:text-blue-700 uppercase flex items-center space-x-1"
            >
              <span>View roadmap</span>
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
