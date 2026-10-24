import React, { useState } from 'react';
import { Sparkles, FolderGit2, ShieldCheck, Info, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects({ onOpenCaseStudy, onPreviewFrontPage }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => {
        if (filter === 'live') return Boolean(p.demoUrl);
        if (filter === 'fullstack') return p.category.includes('Full-Stack');
        if (filter === 'frontend') return p.category.includes('Frontend');
        return true;
      });

  const liveCount = projects.filter(p => Boolean(p.demoUrl)).length;

  return (
    <section id="projects" className="py-20 bg-[#0b0f19] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Practical Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Architectural Studies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical web applications designed to solve real-world problems. Includes live deployed Vercel platforms and comprehensive 15-point engineering case studies.
          </p>
        </div>

        {/* Recruiter Transparency Banner */}
        <div className="mb-10 max-w-4xl mx-auto p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-200">Engineering Authenticity & Live Demonstrations:</span>
            <p className="text-slate-400 mt-0.5">
              These applications reflect active production builds deployed live on Vercel and functional developmental prototypes. Test live web apps directly or inspect architectural trade-offs, schemas, and problem-solving methodologies in each case study.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Projects ({projects.length})
          </button>

          <button
            onClick={() => setFilter('live')}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              filter === 'live'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-emerald-950/30 text-emerald-400 hover:bg-emerald-900/40 border border-emerald-800/40'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live on Vercel ({liveCount})</span>
          </button>

          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              filter === 'fullstack'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Full-Stack (Python & Django + React)
          </button>

          <button
            onClick={() => setFilter('frontend')}
            className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              filter === 'frontend'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Frontend (React & Modern State)
          </button>
        </div>

        {/* Projects Grid: 2 columns on tablet and desktop for rich presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenCaseStudy={onOpenCaseStudy}
              onPreviewFrontPage={onPreviewFrontPage}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
