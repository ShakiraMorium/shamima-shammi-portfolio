import React from 'react';
import { 
  ExternalLink, 
  BookOpen, 
  CheckCircle, 
  Layers, 
  AlertTriangle,
  Sparkles,
  ArrowRight,
  ZoomIn
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onOpenCaseStudy, onPreviewFrontPage }) {
  return (
    <article className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800 hover:border-indigo-500/30 transition-all duration-300">
      
      {/* Top Media & Front Page Preview Trigger */}
      <div 
        onClick={() => onPreviewFrontPage?.(project)}
        className="relative group overflow-hidden bg-slate-950 aspect-[16/9] cursor-pointer"
        title="Click to view full-size front page image"
      >
        <img 
          src={project.image} 
          alt={`Front page screenshot of ${project.title}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
        
        {/* Hover Zoom Banner */}
        <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-white font-medium text-xs border border-indigo-500/50 shadow-xl">
            <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
            <span>Inspect Front Page UI</span>
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${project.statusColor}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {project.status}
          </span>
        </div>

        {/* Category Pill */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 bg-slate-900/80 backdrop-blur-md border border-slate-700/60">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-indigo-300/80 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Problem Solved */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5 font-semibold">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              The Problem Solved
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Project Overview */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.overview}
          </p>

          {/* Key Features */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
              Key Features:
            </span>
            <ul className="space-y-1.5">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* My Contribution */}
          <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-900/40 text-xs text-indigo-200">
            <strong className="text-indigo-300 block mb-0.5">My Engineering Contribution:</strong>
            <p className="text-slate-300 text-xs leading-relaxed">{project.myContribution}</p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
              Tech Stack:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions: Code, Demo, Front Page UI, and Case Study Button */}
        <div className="pt-4 border-t border-slate-800 space-y-2.5">
          
          <div className="flex items-center gap-2">
            {/* View Front Page Button */}
            <button
              onClick={() => onPreviewFrontPage?.(project)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/50 transition-colors cursor-pointer"
              title="Show full front-page UI image"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Front Page UI</span>
            </button>

            {/* GitHub Repo */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
              <span>Repo</span>
            </a>

            {/* Live Demo Status */}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-500/50 shadow-sm shadow-emerald-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                title={`Open live website: ${project.demoUrl}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live App</span>
              </a>
            ) : (
              <div 
                className="flex-1 inline-flex items-center justify-center px-2 py-2 rounded-xl text-[11px] font-mono text-slate-400 bg-slate-900/50 border border-slate-800 text-center"
                title={project.demoNote}
              >
                <span>Staging</span>
              </div>
            )}
          </div>

          {/* Case Study Full Button */}
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <BookOpen className="w-4 h-4 text-indigo-200" />
            <span>Read 15-Point Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 ml-auto text-indigo-200" />
          </button>

        </div>

      </div>

    </article>
  );
}
