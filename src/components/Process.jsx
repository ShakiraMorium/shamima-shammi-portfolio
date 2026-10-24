import React, { useState } from 'react';
import { 
  Compass, 
  Layout, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  Rocket, 
  Workflow, 
  ArrowRight 
} from 'lucide-react';
import { developmentProcess } from '../data/process';

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepIcons = {
    Compass: <Compass className="w-5 h-5 text-indigo-400" />,
    Layout: <Layout className="w-5 h-5 text-cyan-400" />,
    Code2: <Code2 className="w-5 h-5 text-purple-400" />,
    Cpu: <Cpu className="w-5 h-5 text-pink-400" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    Rocket: <Rocket className="w-5 h-5 text-amber-400" />
  };

  return (
    <section id="process" className="py-20 bg-[#0b0f19] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineering Discipline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Development Process
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A methodical six-stage approach to transform real-world problems into stable, testable software.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (hidden on mobile, visible on lg+) */}
        <div className="hidden lg:block mb-12">
          <div className="grid grid-cols-6 gap-3 relative">
            
            {/* Connecting Track Line */}
            <div className="absolute top-7 left-8 right-8 h-0.5 bg-slate-800 -z-0" />

            {developmentProcess.map((item, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-4 rounded-xl transition-all relative z-10 flex flex-col items-start cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isSelected
                      ? 'bg-slate-900 border-2 border-indigo-500 shadow-xl shadow-indigo-950/50 -translate-y-1'
                      : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 font-mono text-xs font-bold transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/40'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {item.step}
                  </div>

                  <h3 className="font-bold text-white text-sm tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Active Step Deep-Dive Card */}
        <div className="hidden lg:block max-w-4xl mx-auto p-6 rounded-2xl bg-slate-900/90 border border-indigo-500/30">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-indigo-950/50 border border-indigo-700/40">
              {stepIcons[developmentProcess[activeStepIndex].icon]}
            </div>
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                Stage {developmentProcess[activeStepIndex].step} Deep Dive
              </span>
              <h4 className="text-xl font-bold text-white">
                {developmentProcess[activeStepIndex].title} — {developmentProcess[activeStepIndex].summary}
              </h4>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mt-4 pl-16">
            {developmentProcess[activeStepIndex].details}
          </p>
        </div>

        {/* Mobile & Tablet Vertical Timeline (visible on < lg) */}
        <div className="lg:hidden space-y-4">
          {developmentProcess.map((item) => (
            <div
              key={item.step}
              className="glass-card p-5 rounded-2xl space-y-3 cursor-default"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-mono text-xs font-bold shadow-sm">
                  {item.step}
                </span>
                <div className="flex items-center gap-2">
                  {stepIcons[item.icon]}
                  <h3 className="font-bold text-white text-base">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs font-medium text-indigo-300">
                {item.summary}
              </p>

              <p className="text-xs text-slate-400 leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
