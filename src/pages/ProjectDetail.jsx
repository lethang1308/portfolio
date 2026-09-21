import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Database, Shield, Cpu, Code, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getLocalizedProjects } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProjectDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const localizedProjects = getLocalizedProjects(i18n.language);
  const project = localizedProjects.find((p) => p.id === id);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-6 text-center">
        <h1 className="text-6xl font-extrabold text-slate-900">404</h1>
        <p className="text-xl text-slate-500 mt-4">{t('projectDetail.notFound')}</p>
        <Link 
          to="/" 
          className="mt-6 inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all"
        >
          <ArrowLeft size={18} />
          <span>{t('projectDetail.backToHome')}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent flex flex-col justify-between font-sans pt-28 md:pt-36">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 flex-1 w-full space-y-12">
        {/* Title Section */}
        <div className="space-y-4">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight">
            {project.title}
          </h1>

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

        {/* Project Image Preview Banner */}
        {project.image && (
          <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-100/80 relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top" 
            />
          </div>
        )}

        {/* Features Card Section */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Shield size={20} />
            </div>
            <h2 className="font-display font-bold text-xl text-slate-900">
              {t('projectDetail.systemFeaturesTitle')}
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
                {t('projectDetail.systemArchitectureTitle')}
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
                {t('projectDetail.databaseDesignTitle')}
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
              <span className="font-bold text-slate-100">{t('projectDetail.perfMetricsTitle')}</span>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900 space-y-1">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{t('projectDetail.cachingLayer')}</div>
              <p className="text-slate-300 text-sm leading-relaxed font-mono mt-2">
                {project.performance.caching}
              </p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900 space-y-1">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{t('projectDetail.loadSimulation')}</div>
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
              {t('projectDetail.apiEndpointDocTitle')}
            </h2>
          </div>
          
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-4 font-bold text-slate-700 w-24">{t('projectDetail.tableMethod')}</th>
                  <th className="p-4 font-bold text-slate-700 w-48">{t('projectDetail.tableEndpoint')}</th>
                  <th className="p-4 font-bold text-slate-700">{t('projectDetail.tableDesc')}</th>
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
