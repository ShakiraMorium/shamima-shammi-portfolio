import React from 'react';
import { 
  TrendingUp, 
  Search, 
  Target, 
  Users, 
  BarChart3, 
  Layers, 
  Info, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { digitalGrowthPillars, growthDisclaimer } from '../data/digitalGrowth';

export default function DigitalGrowth() {
  const pillarIcons = {
    Search: <Search className="w-5 h-5 text-cyan-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    Target: <Target className="w-5 h-5 text-indigo-400" />,
    Users: <Users className="w-5 h-5 text-amber-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-purple-400" />,
    Layers: <Layers className="w-5 h-5 text-pink-400" />
  };

  return (
    <section id="growth" className="py-20 bg-[#090d16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with clear separation note */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Complementary Business Acumen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Digital Growth & Marketing Awareness
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Bridging technical code delivery with audience discovery, SEO performance, and user conversion principles.
          </p>
        </div>

        {/* Responsible Disclaimer Notice */}
        <div className="mb-12 max-w-3xl mx-auto p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
          <p className="text-slate-400">
            {growthDisclaimer}
          </p>
        </div>

        {/* 6 Growth Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalGrowthPillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="glass-card p-6 rounded-2xl group space-y-3 cursor-default"
            >
              <div className="p-3 rounded-xl bg-slate-800/90 w-fit group-hover:scale-110 group-hover:bg-purple-600/20 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                {pillarIcons[pillar.icon] || <TrendingUp className="w-5 h-5 text-indigo-400" />}
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Synergy Summary Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/30 via-slate-900 to-indigo-950/30 border border-purple-900/40 text-center max-w-3xl mx-auto">
          <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
            Why Growth Awareness Matters for Software Teams
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Engineers who understand conversion funnels, search indexing, and user behavior build cleaner data schemas, more thoughtful onboarding flows, and applications that naturally attract and retain active users.
          </p>
        </div>

      </div>
    </section>
  );
}
