import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { User, Star, Milestone, ShieldCheck, Award, Target, ChevronRight, Mail, MapPin } from 'lucide-react';
import heroImg from '../assets/1.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerContainer from '../components/animations/StaggerContainer';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

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
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    "Write clean, maintainable and tested code",
    "Design for scale and future changes",
    "Automate everything that can be automated",
    "Measure, observe and improve continuously",
    "Security and reliability by design"
  ];

  const journey = [
    { year: "2019", title: "Started my journey with Python and Django. Built my first REST API." },
    { year: "2020", title: "Discovered Node.js / Express and fell in love with asynchronous programming." },
    { year: "2021", title: "Started working with Docker, microservices, and cluster architectures." },
    { year: "2022", title: "Focused on database scalability, caching optimization (Redis), and observability." },
    { year: "2023+", title: "Building reliable platforms, mentoring junior developers, and contributing to open source." }
  ];

  const buildSystems = [
    {
      title: "API Design",
      desc: "RESTful and gRPC APIs with clarity and versioning.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: "Authentication",
      desc: "Secure auth with JWT, OAuth2 and RBAC.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: "Database Design",
      desc: "Normalized schemas, indexes and query optimization.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    },
    {
      title: "Caching",
      desc: "Redis for caching, sessions and rate limiting.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    },
    {
      title: "Observability",
      desc: "Logs, metrics and tracing for actionable insights.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12h25" />
          <path d="M6 12L10 4l4 16 4-12 2 4" />
        </svg>
      )
    },
    {
      title: "Deployment",
      desc: "CI/CD pipelines, containerized and automated.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    }
  ];

  const technologies = [
    { name: "Go", color: "#00ADD8", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.09 13.92H8.48v-2.28h4.63v2.28zm2.2-3.8H8.48V9.84h6.81v2.28z"/></svg> },
    { name: "Python", color: "#3776AB", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1.06 6.53v1.07h-2.12v-1.07h2.12z"/></svg> },
    { name: "PostgreSQL", color: "#336791", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4h-2v-5h2v5z"/></svg> },
    { name: "Redis", color: "#D82C20", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5zm-8-3v4l8 4 8-4V9l-8 4-8-4z"/></svg> },
    { name: "Kafka", color: "#000000", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4h-2v-5h2v5z"/></svg> },
    { name: "Docker", color: "#2496ED", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.029C18.31 21.164 22 17.013 22 12c0-5.523-4.477-10-10-10z"/></svg> },
    { name: "Kubernetes", color: "#326CE5", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm8.5 5.9L12.5 12V4.4l8 3.5zm-9 0L3.5 12V4.4l8 3.5zm-8 6l8 4.5v-7.6l-8-3.5v6.6zm9 4.5l8-4.5v-6.6l-8 3.5v7.6z"/></svg> },
    { name: "AWS", color: "#FF9900", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.3c-.6 0-1-.4-1-.9s.4-.9 1-.9 1 .4 1 .9-.4.9-1 .9zm3.8-3.4c-.6 0-1-.4-1-.9s.4-.9 1-.9 1 .4 1 .9-.4.9-1 .9zm-1.9-2.7c-.6 0-1-.4-1-.9s.4-.9 1-.9 1 .4 1 .9-.4.9-1 .9z"/></svg> },
    { name: "Nginx", color: "#009639", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.4 8.7c-.1-.7-.1-1.5 0-2.2-.4.6-.7 1.3-.9 2 .2.1.6.2.9.2zm4.8 0c.3 0 .7-.1.9-.2-.2-.7-.5-1.4-.9-2 .1.7.1 1.5 0 2.2zM12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/></svg> },
    { name: "Terraform", color: "#7B42BC", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M23.2 11.5L12.5.8a1.7 1.7 0 0 0-2.4 0L8.7 2.2l3 3a1.7 1.7 0 0 1 .4 1.7L10.3 8.7a1.7 1.7 0 0 1-1.7-.4L6.9 6.6a1.7 1.7 0 0 1-.3-1.8L9 .8a1.7 1.7 0 0 0-2.4 0L.8 6.6a1.7 1.7 0 0 0 0 2.4l10.7 10.7a1.7 1.7 0 0 0 2.4 0l9.3-9.3a1.7 1.7 0 0 0 0-2.4z"/></svg> }
  ];

  const focusAreas = [
    { title: "Microservices", desc: "Building scalable and loosely coupled services." },
    { title: "Performance Optimization", desc: "Improving latency, throughput and resource usage." },
    { title: "Clean Architecture", desc: "Building maintainable and testable backend systems." },
    { title: "Security Best Practices", desc: "Implementing security at every layer of the system." }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col justify-between font-sans pt-28 md:pt-36">
      
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
                About Me
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <p className="text-slate-500 text-sm mt-2">
                Backend developer passionate about building reliable, scalable and secure systems.
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
                <img src={heroImg} alt="Hoang Duy Profile" className="w-full h-full object-cover object-center" />
              </div>
              <div>
                <h2 className="font-display font-extrabold text-xl text-slate-900">Hoang Duy</h2>
                <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mt-1">Backend Developer</p>
              </div>
              
              <div className="w-full border-t border-slate-100 pt-4 space-y-3 text-left">
                <div className="flex items-center space-x-3 text-slate-600 text-xs">
                  <MapPin size={16} className="text-slate-400" />
                  <span>Ho Chi Minh City, Vietnam</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-semibold text-slate-800">Available for opportunities</span>
                </div>
              </div>

              {/* Social Icons inside Profile Card */}
              <div className="flex items-center space-x-3 pt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-950 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-950 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:duy.hoang.dev@gmail.com" className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-950 transition-colors">
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
                <h2 className="font-display font-extrabold text-lg">My Story</h2>
              </div>
              
              <div className="text-slate-500 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  I'm a backend developer who loves turning complex business ideas into robust, scalable, 
                  and resilient systems. My journey started with a strong curiosity about how information 
                  flows behind the scenes—from raw web requests down to databases, caching queues, and background jobs.
                </p>
                <p>
                  Over the years, I've built and optimized secure APIs, structured microservices, and designed 
                  high-throughput database models that serve thousands of active users. I enjoy solving complex 
                  algorithmic bottlenecks, tweaking database query planners, and writing testable and maintainable codes.
                </p>
                <p>
                  When I'm not writing codes, you can find me reading architectural design patterns, experimenting 
                  with server operations, or exploring open source backend projects.
                </p>
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
                <h2 className="font-display font-extrabold text-lg">My Principles</h2>
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
                <h2 className="font-display font-extrabold text-lg">Backend Journey</h2>
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
                <h2 className="font-display font-extrabold text-lg">How I Build Systems</h2>
              </div>

              <div className="space-y-4 overflow-y-auto max-h-[360px] scrollbar-none pr-1 w-full">
                {buildSystems.map((sys, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      {sys.icon}
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
                <h2 className="font-display font-extrabold text-lg">Favorite Technologies</h2>
              </div>

              <div className="grid grid-cols-5 gap-4">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center p-3 rounded-2xl bg-slate-50/50 border border-slate-100 hover:scale-105 hover:bg-slate-50 hover:shadow-sm transition-all duration-300">
                    <div style={{ color: tech.color }} className="w-10 h-10 flex items-center justify-center shrink-0">
                      {tech.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 mt-2">{tech.name}</span>
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
                <h2 className="font-display font-extrabold text-lg">Achievements</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-center space-y-1">
                  <div className="text-2xl font-extrabold text-blue-600 font-display">
                    <Counter end={15} suffix="+" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Projects Built</div>
                </div>
                <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-center space-y-1">
                  <div className="text-2xl font-extrabold text-blue-600 font-display">
                    <Counter end={5} suffix="+" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">OS Contribs</div>
                </div>
                <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-center space-y-1">
                  <div className="text-2xl font-extrabold text-blue-600 font-display">
                    <Counter end={3} suffix="+" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Years Exp</div>
                </div>
                <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-center space-y-1">
                  <div className="text-2xl font-extrabold text-blue-600 font-display">
                    <Counter end={100} suffix="K+" />
                  </div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider leading-none">RPS Handled/Day</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Bento Row 4: Currently Focused On */}
        <div className="bg-white border border-slate-100/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-slate-800">
            <Target size={20} className="text-blue-600" />
            <h2 className="font-display font-extrabold text-lg">Currently Focused On</h2>
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
                Let's build something impactful together
              </h2>
              <p className="text-slate-500 text-sm max-w-lg">
                I'm open to exciting opportunities, architectural reviews, and engineering collaborations.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0 justify-center">
              <Link 
                to="/" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs tracking-wider uppercase transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                View My Projects
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center space-x-2 border border-slate-200 hover:bg-slate-50 bg-white text-slate-700 font-bold px-6 py-3.5 rounded-xl text-xs tracking-wider uppercase transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail size={14} />
                <span>Get In Touch</span>
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
