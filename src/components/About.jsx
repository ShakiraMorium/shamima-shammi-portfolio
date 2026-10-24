import React from 'react';
import { 
  Code, 
  Server, 
  Database, 
  GraduationCap, 
  Target, 
  HeartHandshake, 
  Sparkles,
  Calculator,
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  const pillars = [
    {
      title: "Frontend Engineering",
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      description: "Crafting intuitive, accessible user interfaces in React with responsive styling, smooth interactions, and fluid state management."
    },
    {
      title: "Backend & REST APIs",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      description: "Developing robust server-side applications in Python with Django and Django REST Framework, focusing on clean architecture and data validation."
    },
    {
      title: "Database Design",
      icon: <Database className="w-5 h-5 text-purple-400" />,
      description: "Structuring relational databases in PostgreSQL with normalized tables, foreign keys, and performant query design."
    },
    {
      title: "Business & Financial Logic",
      icon: <Calculator className="w-5 h-5 text-emerald-400" />,
      description: "Leveraging my BBA in Accounting to bring numerical precision, transactional integrity, and commercial awareness to software products."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0b0f19] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & My Engineering Approach
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Combining software development skills with analytical business insight to create reliable, user-centered digital solutions.
          </p>
        </div>

        {/* Grid Layout: Biography & Academic Accounting Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-400" />
                <span>My Developer Journey</span>
              </h3>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                {personalInfo.about.lead}
              </p>

              {personalInfo.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}

              {/* Career Objective Box */}
              <div className="pt-4 border-t border-slate-800">
                <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40">
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs uppercase tracking-wider mb-1">
                    <Target className="w-4 h-4 text-indigo-400" />
                    <span>Career Objective</span>
                  </div>
                  <p className="text-sm text-slate-200 italic leading-relaxed">
                    "{personalInfo.about.careerObjective}"
                  </p>
                </div>
              </div>
            </div>

            {/* Core Pillars 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-5 rounded-2xl group cursor-default space-y-2.5"
                >
                  <div className="p-3 rounded-xl bg-slate-800/90 w-fit group-hover:scale-110 group-hover:bg-indigo-600/20 group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <h4 className="font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: BBA in Accounting & Cross-Discipline Synergy */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Highlight Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-[#131b2e] to-[#0c1222] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                    Academic Background
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    BBA in Accounting
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {personalInfo.about.academicEducation.description}
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  How Accounting Strengthens My Software Development:
                </h4>
                
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span><strong>Data Precision & Double-Entry Logic:</strong> Deep understanding of balance sheets, ledgers, and zero-loss transactional integrity maps directly to idempotent API designs and relational database constraints.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span><strong>Structured Audit Mindset:</strong> Natural instinct to trace edge cases, validate data at every boundary, and maintain thorough error handling and logs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span><strong>Commercial Alignment:</strong> Ability to view technical features through the lens of business value, user acquisition costs, and workflow efficiency.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Profile Summary Badge */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-indigo-400" />
                <span>At a Glance</span>
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                  <span className="text-slate-500 block text-[11px]">Primary Languages</span>
                  <span className="text-slate-200 font-semibold">Python, JavaScript</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                  <span className="text-slate-500 block text-[11px]">Key Frameworks</span>
                  <span className="text-slate-200 font-semibold">Django, React</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                  <span className="text-slate-500 block text-[11px]">Primary Database</span>
                  <span className="text-slate-200 font-semibold">PostgreSQL</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                  <span className="text-slate-500 block text-[11px]">Work Preference</span>
                  <span className="text-emerald-400 font-semibold">Remote / Hybrid</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
