import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Sparkles, ZoomIn } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectPreviewModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
    >
      <div 
        className="relative w-full max-w-5xl max-h-[94vh] flex flex-col rounded-2xl bg-[#0b0f19] border border-slate-700/80 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <ZoomIn className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider">
                Full-Bleed Front Page UI Preview
              </span>
              <h2 id="preview-modal-title" className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${project.statusColor}`}>
              {project.status}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* High-Resolution Front Page Screenshot View */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 group">
            <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-slate-300">Front Page Interface • {project.title}</span>
              </div>
              <span className="text-cyan-400 font-medium">1440x900 Clean UI View</span>
            </div>

            <img 
              src={project.image} 
              alt={`Full Front Page Interface of ${project.title}`}
              className="w-full h-auto object-cover object-top"
              loading="eager"
            />
          </div>

          {/* Front Page Feature Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Front Page Architecture & Layout</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.overview}
              </p>
              <div className="space-y-1.5 pt-1">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Technologies Applied on This Page</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live Page</span>
                  </a>
                ) : (
                  <span className="flex-1 px-3 py-2 text-center rounded-xl bg-slate-950 text-[11px] font-mono text-slate-400 border border-slate-800">
                    Staging / Repo Available
                  </span>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#090d16] border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Close Front Page View
          </button>
        </div>

      </div>
    </div>
  );
}
