import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  // Render custom tech mockups based on project id instead of relying on external images
  const renderTechMockup = (projectId) => {
    switch (projectId) {
      case 'ecommerce-api':
        return (
          <div className="w-full h-full bg-slate-900 font-mono text-[10px] text-emerald-400 p-4 flex flex-col justify-between select-none">
            <div className="space-y-1">
              <div className="text-slate-500 font-semibold">// STRIPE WEBHOCK LISTENER</div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">POST</span>
                <span className="text-slate-100">/v1/orders/webhook</span>
                <span className="bg-emerald-500/20 text-emerald-400 px-1 rounded">200 OK</span>
              </div>
              <div className="text-slate-400 ml-4">{"{ status: 'success', event: 'charge.succeeded' }"}</div>
            </div>
            
            <div className="border-t border-slate-800 pt-2 space-y-1">
              <div className="text-slate-500 font-semibold">// REDIS CACHE hit:true</div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">GET</span>
                <span className="text-slate-100">/v1/products?limit=10</span>
                <span className="text-slate-400">12ms</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-slate-500 border-t border-slate-800 pt-2 text-[9px]">
              <span>MongoDB: Connected</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        );
      case 'blog-platform-api':
        return (
          <div className="w-full h-full bg-slate-950 font-mono text-[10px] text-cyan-400 p-4 flex flex-col justify-between select-none">
            <div className="space-y-1">
              <div className="text-slate-500 font-semibold">// NESTJS MODULE DIAGRAM</div>
              <div className="text-pink-400">@Module({"{"}</div>
              <div className="pl-3 text-slate-300">
                imports: [TypeOrmModule.forFeature([PostEntity])],<br />
                controllers: [PostController],<br />
                providers: [PostService, PostGateway],
              </div>
              <div className="text-pink-400">{"})"}</div>
            </div>

            <div className="border-t border-slate-900 pt-2 space-y-1">
              <div className="text-slate-500 font-semibold">// POSTGRESQL CTE TREE QUERY</div>
              <div className="text-slate-400 truncate">WITH RECURSIVE comment_tree AS (...)</div>
            </div>

            <div className="flex justify-between items-center text-slate-600 border-t border-slate-900 pt-2 text-[9px]">
              <span>Socket.io: Active</span>
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
            </div>
          </div>
        );
      case 'task-management-api':
        return (
          <div className="w-full h-full bg-slate-900 font-mono text-[10px] text-purple-400 p-4 flex flex-col justify-between select-none">
            <div className="space-y-1">
              <div className="text-slate-500 font-semibold">// JEST TEST SUITE</div>
              <div className="text-emerald-400 font-bold">✓ POST /tasks - should create a new task (45ms)</div>
              <div className="text-emerald-400 font-bold">✓ PATCH /tasks/:id/assign - assign success (20ms)</div>
              <div className="text-red-400 font-bold">✗ GET /analytics - unauthorized (fails with 401)</div>
            </div>

            <div className="border-t border-slate-800 pt-2 space-y-1">
              <div className="text-slate-500 font-semibold">// BULLMQ WORKER QUEUE</div>
              <div className="flex items-center space-x-2 text-slate-300">
                <span>Queue: [deadline-notifications]</span>
                <span className="text-purple-400 font-semibold">Active: 4</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-slate-500 border-t border-slate-800 pt-2 text-[9px]">
              <span>MySQL: Pool Active (10)</span>
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-center text-white text-xs font-semibold">
            Backend Architecture
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Title Grid */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Production-ready API architectures and service layers.
            </p>
          </div>
          <a 
            href="#projects" 
            className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-bold tracking-wider text-blue-600 hover:text-blue-700 uppercase"
          >
            <span>View all projects</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Technical Code Console Mockup Header */}
              <div className="h-44 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
                {/* Console header bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900/60 border-b border-slate-800/80">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">server_api.log</span>
                </div>
                {/* Render the specific code simulation inside */}
                {renderTechMockup(project.id)}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm mt-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="bg-slate-50 border border-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md text-[10px] font-semibold tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Links Footer */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold tracking-widest text-slate-700 hover:text-blue-600 uppercase"
                  >
                    <span>View Details</span>
                    <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-900 transition-colors"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile only View All link */}
        <div className="sm:hidden text-center mt-10">
          <a 
            href="#projects" 
            className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase"
          >
            <span>View all projects</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
