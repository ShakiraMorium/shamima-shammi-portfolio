import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Database, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Sparkles,
  FileCode,
  BookOpen
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, onClose }) {
  const [activeSection, setActiveSection] = useState('all');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  const sections = [
    { id: 'all', title: 'Full Case Study' },
    { id: 'scope', title: '1-4: Scope & Goals' },
    { id: 'arch', title: '5-9: Architecture & APIs' },
    { id: 'engineering', title: '10-12: Challenges & Security' },
    { id: 'future', title: '13-15: Testing & Roadmap' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0d1322] border border-slate-700/80 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400">
                15-Point Engineering Case Study
              </span>
              <h2 id="case-study-title" className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={`hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium border ${project.statusColor}`}>
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

        {/* Navigation Filter Bar */}
        <div className="px-6 py-2.5 bg-slate-900/60 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeSection === s.id
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-slate-300 text-sm leading-relaxed">
          
          {/* Quick Hero Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-900/40 flex flex-col sm:flex-row items-center gap-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full sm:w-48 h-32 object-cover rounded-xl border border-slate-800"
            />
            <div className="space-y-2 text-xs sm:text-sm">
              <span className="text-indigo-400 font-mono text-[11px] uppercase tracking-wider block">
                Technical Blueprint
              </span>
              <p className="text-slate-200 font-medium">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 font-mono text-[11px] text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 1-4: Scope & Problem */}
          {(activeSection === 'all' || activeSection === 'scope') && (
            <section className="space-y-6">
              <div className="border-b border-slate-800 pb-2">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="text-indigo-400">01 - 04</span> Project Scope & Foundations
                </h3>
              </div>

              {/* 1. Project Overview */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-indigo-400 font-mono">1.</span> Project Overview
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>

              {/* 2. Problem Statement */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-indigo-400 font-mono">2.</span> Problem Statement
                </h4>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-xs sm:text-sm">
                  {caseStudy.problemStatement}
                </div>
              </div>

              {/* 3. Project Objectives */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-indigo-400 font-mono">3.</span> Project Objectives
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {caseStudy.projectObjectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. User Requirements */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-indigo-400 font-mono">4.</span> User Requirements
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {caseStudy.userRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Section 5-9: Architecture & APIs */}
          {(activeSection === 'all' || activeSection === 'arch') && (
            <section className="space-y-6">
              <div className="border-b border-slate-800 pb-2">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="text-cyan-400">05 - 09</span> Architecture, Implementation & Data
                </h3>
              </div>

              {/* 5. Technical Architecture */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">5.</span> Technical Architecture
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {caseStudy.technicalArchitecture}
                </p>
              </div>

              {/* 6. Frontend Implementation */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">6.</span> Frontend Implementation
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {caseStudy.frontendImplementation}
                </p>
              </div>

              {/* 7. Backend Implementation */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">7.</span> Backend Implementation
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {caseStudy.backendImplementation}
                </p>
              </div>

              {/* 8. Database Structure */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">8.</span> Database Structure
                </h4>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-indigo-300 text-xs font-mono overflow-x-auto whitespace-pre-wrap">
                  {caseStudy.databaseStructure}
                </pre>
              </div>

              {/* 9. API Design */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">9.</span> API Design & Endpoints
                </h4>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300 text-xs font-mono overflow-x-auto whitespace-pre-wrap">
                  {caseStudy.apiDesign}
                </pre>
              </div>
            </section>
          )}

          {/* Section 10-12: Challenges & Security */}
          {(activeSection === 'all' || activeSection === 'engineering') && (
            <section className="space-y-6">
              <div className="border-b border-slate-800 pb-2">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="text-amber-400">10 - 12</span> Challenges, Solutions & Security
                </h3>
              </div>

              {/* 10. Technical Challenges */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-amber-400 font-mono">10.</span> Key Technical Challenges
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {caseStudy.challenges.map((c, idx) => (
                    <li key={idx} className="p-3 rounded-lg bg-amber-950/20 border border-amber-900/30 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 11. Solutions Implemented */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-amber-400 font-mono">11.</span> Solutions Implemented
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {caseStudy.solutions.map((sol, idx) => (
                    <li key={idx} className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 12. Security Considerations */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-amber-400 font-mono">12.</span> Security Considerations
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {caseStudy.security.map((sec, idx) => (
                    <li key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{sec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Section 13-15: Testing, Roadmap, and Verification */}
          {(activeSection === 'all' || activeSection === 'future') && (
            <section className="space-y-6">
              <div className="border-b border-slate-800 pb-2">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="text-purple-400">13 - 15</span> Testing, Future Roadmap & Source Verification
                </h3>
              </div>

              {/* 13. Testing Approach */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-purple-400 font-mono">13.</span> Testing Approach
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {caseStudy.testingApproach}
                </p>
              </div>

              {/* 14. Future Improvements */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-purple-400 font-mono">14.</span> Future Improvements & Roadmap
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {caseStudy.futureImprovements.map((imp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 15. Repository & Live Verification */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="text-purple-400 font-mono">15.</span> Repository & Live Demo Verification
                </h4>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs pt-1">
                  <div>
                    <span className="text-slate-400 block">GitHub Repository:</span>
                    <a 
                      href={caseStudy.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 underline font-mono flex items-center gap-1 mt-0.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{caseStudy.repositoryUrl}</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-slate-400 block">Live Deployment Status:</span>
                    <span className="text-amber-400 font-mono flex items-center gap-1 mt-0.5">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{caseStudy.demoUrlPlaceholder}</span>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#090d16] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono hidden sm:inline">
            Press ESC or click close to exit
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors ml-auto cursor-pointer"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
