import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Database, Shield, Cpu, Code, Server, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import Footer from '../components/Footer';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] px-6 text-center">
        <h1 className="text-6xl font-extrabold text-slate-900">404</h1>
        <p className="text-xl text-slate-500 mt-4">Project not found</p>
        <Link 
          to="/" 
          className="mt-6 inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col justify-between font-sans">
      {/* Header Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100 py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 group">
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold tracking-widest uppercase">Back to Home</span>
          </Link>
          <div className="border-[2px] border-slate-900 px-2 py-0.5 font-display font-extrabold text-sm tracking-wider text-slate-900 select-none">
            HD
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 flex-1 w-full space-y-12">
        {/* Title Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight">
              {project.title}
            </h1>
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-950 text-white hover:bg-slate-800 px-5 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>Source Code</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Card Section */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Shield size={20} />
            </div>
            <h2 className="font-display font-bold text-xl text-slate-900">
              Key System Features
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-slate-600 text-sm">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Database & Architecture Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Architecture Card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Cpu size={20} />
              </div>
              <h2 className="font-display font-bold text-lg text-slate-900">
                System Architecture
              </h2>
            </div>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Database Card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center text-violet-600">
                <Database size={20} />
              </div>
              <h2 className="font-display font-bold text-lg text-slate-900">
                Database Schema Design
              </h2>
            </div>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              {project.databaseDesign}
            </p>
          </div>
        </div>

        {/* Performance Logs */}
        <div className="bg-slate-950 border border-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl text-slate-300 font-mono text-xs md:text-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-900 pb-4">
            <div className="flex items-center space-x-3">
              <Server size={18} className="text-emerald-400" />
              <span className="font-bold text-slate-100">Performance Metrics & Benchmarks</span>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900 space-y-1">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Caching Layer</div>
              <p className="text-slate-300 text-sm leading-relaxed font-mono mt-2">
                {project.performance.caching}
              </p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900 space-y-1">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Load Simulation</div>
              <p className="text-slate-300 text-sm leading-relaxed font-mono mt-2">
                {project.performance.loadTesting}
              </p>
            </div>
          </div>
        </div>

        {/* API Endpoint Documentation Block */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
              <Code size={20} />
            </div>
            <h2 className="font-display font-bold text-xl text-slate-900">
              Core API Endpoint Documentation
            </h2>
          </div>
          
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-4 font-bold text-slate-700 w-24">Method</th>
                  <th className="p-4 font-bold text-slate-700 w-48">Endpoint</th>
                  <th className="p-4 font-bold text-slate-700">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {project.endpoints.map((ep, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded text-[10px] font-extrabold tracking-wide uppercase ${
                        ep.method === 'GET' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                        ep.method === 'POST' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                        'bg-yellow-50 text-yellow-600 border border-yellow-100'
                      }`}>
                        {ep.method}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-xs text-slate-800 font-semibold">{ep.path}</td>
                    <td className="p-4 text-slate-500 text-xs md:text-sm">{ep.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
