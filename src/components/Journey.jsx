import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Code, 
  Terminal, 
  CheckCircle2, 
  Users, 
  Sparkles, 
  Target,
  ArrowRight,
  ShieldCheck,
  BrainCircuit,
  MessageSquare,
  Workflow,
  Cpu
} from 'lucide-react';
import { journeyMilestones, whatIBring, careerObjective } from '../data/journey';

export default function Journey() {
  const qualityIcons = {
    learning: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
    'problem-solving': <Workflow className="w-5 h-5 text-cyan-400" />,
    detail: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    communication: <MessageSquare className="w-5 h-5 text-purple-400" />,
    collaboration: <Users className="w-5 h-5 text-amber-400" />,
    adaptability: <Sparkles className="w-5 h-5 text-rose-400" />,
    'clean-code': <Cpu className="w-5 h-5 text-sky-400" />
  };

  return (
    <section id="journey" className="py-20 bg-[#090d16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Trajectory & Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Development Journey
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A transparent progression from academic business logic to modern full-stack web engineering.
          </p>
        </div>

        {/* Career Objective Spotlight */}
        <div className="mb-16 max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-indigo-950/40 border border-indigo-800/40 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono font-medium">
            <Target className="w-3.5 h-3.5 text-indigo-400" />
            <span>Target Opportunity & Career Objective</span>
          </div>
          <blockquote className="text-slate-100 text-base sm:text-lg italic font-medium leading-relaxed">
            "{careerObjective}"
          </blockquote>
        </div>

        {/* Part 1: Milestones Timeline */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 border-b border-slate-800 pb-3">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            <span>Education & Technical Milestones</span>
          </h3>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 sm:before:left-6 before:w-0.5 before:bg-slate-800">
            {journeyMilestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-12 group">
                {/* Timeline node */}
                <div className="absolute left-1.5 sm:left-4.5 top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_14px_rgba(56,189,248,0.8)] transition-all duration-300" />

                <div className="glass-card p-5 sm:p-6 rounded-xl space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-indigo-400 font-semibold">
                      {milestone.period}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${milestone.badgeColor}`}>
                      {milestone.badge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    {milestone.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: What I Bring to a Development Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              What I Bring to a Development Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Professional attributes and engineering habits I bring into team workflows each day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIBring.map((quality) => (
              <div 
                key={quality.id}
                className="glass-card p-6 rounded-2xl group space-y-3 cursor-default"
              >
                <div className="p-3 rounded-xl bg-slate-800/90 w-fit group-hover:scale-110 group-hover:bg-indigo-600/20 group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300">
                  {qualityIcons[quality.id] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                </div>
                <h4 className="font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                  {quality.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
