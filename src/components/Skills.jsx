import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Binary, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Compass,
  Cpu
} from 'lucide-react';
import { skillCategories, skillStatusLegend } from '../data/skills';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools' },
    { id: 'cs', label: 'Computer Science' },
    { id: 'additional', label: 'Growth / Emerging' },
  ];

  const categoryIcons = {
    frontend: <Code2 className="w-5 h-5 text-indigo-400" />,
    backend: <Server className="w-5 h-5 text-cyan-400" />,
    databases: <Database className="w-5 h-5 text-purple-400" />,
    tools: <Wrench className="w-5 h-5 text-amber-400" />,
    cs: <Binary className="w-5 h-5 text-emerald-400" />,
    additional: <Sparkles className="w-5 h-5 text-pink-400" />
  };

  const statusBadge = (status) => {
    switch (status) {
      case 'Comfortable using':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Comfortable using
          </span>
        );
      case 'Currently learning':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-sky-500/10 text-sky-400 border border-sky-500/25">
            <Clock className="w-3 h-3 text-sky-400" />
            Currently learning
          </span>
        );
      case 'Exploring':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/25">
            <Compass className="w-3 h-3 text-purple-400" />
            Exploring
          </span>
        );
      default:
        return null;
    }
  };

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-[#090d16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technological Competencies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Organized honestly by practical experience level without artificial percentage meters.
          </p>
        </div>

        {/* Competency Level Legend */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-400 font-medium shrink-0">Proficiency Framework:</span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {skillStatusLegend.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full font-medium border ${item.color}`}>
                    {item.label}
                  </span>
                  <span className="text-slate-400 hidden md:inline text-[11px]">
                    — {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div 
              key={cat.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-800/80">
                      {categoryIcons[cat.id] || <Layers className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <h3 className="font-bold text-white text-base sm:text-lg">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {cat.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-400 mt-3 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/95 transition-all duration-200 hover:translate-x-1 hover:shadow-md hover:shadow-indigo-950/40 group/skill"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-semibold text-slate-200 group-hover/skill:text-indigo-300 transition-colors text-sm">
                          {skill.name}
                        </span>
                        {statusBadge(skill.status)}
                      </div>
                      <p className="text-xs text-slate-400 group-hover/skill:text-slate-300 leading-normal transition-colors">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
