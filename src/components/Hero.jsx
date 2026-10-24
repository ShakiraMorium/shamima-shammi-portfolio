import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Send, 
  Mail, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal, 
  Code2, 
  Layers, 
  Database,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import TechOrbitAnimation from './TechOrbitAnimation';
import { personalInfo } from '../data/personalInfo';

export default function Hero({ onOpenResume, onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeHeroView, setActiveHeroView] = useState('orbit');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    onShowToast?.("Email copied to clipboard (Note: verify/replace placeholder address)", "info");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section 
      id="hero"
      aria-label="Introduction" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Brand & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status & Subtitle Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400"></span>
              <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-mono">
                Full-Stack Web Developer
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-mono text-cyan-400/90 hidden sm:inline">
                Python • Django REST • React
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                <span className="block text-slate-400 text-lg sm:text-xl font-medium tracking-wider uppercase mb-1">
                  Hello, I'm
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-indigo-300/90 font-medium tracking-tight">
                Python & Django Developer | React Developer | Digital Growth
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-snug tracking-tight">
              "{personalInfo.headline}"
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.supportingText}
            </p>

            {/* Academic Education Badge (BBA in Accounting) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-xs text-indigo-300 max-w-fit mx-auto lg:mx-0">
              <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Academic Background: <strong className="text-white font-semibold">BBA in Accounting</strong> (Analytical logic & financial data integrity)</span>
            </div>

            {/* Call To Action Buttons (3 CTAs required) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/45 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 shadow-sm hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download My Resume</span>
              </button>

              {/* Third CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-indigo-300 hover:text-indigo-200 bg-indigo-950/30 hover:bg-indigo-900/40 border border-indigo-700/40 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links & Verified Details */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
              {/* GitHub */}
              <a 
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md p-1"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a 
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-sky-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md p-1"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              {/* Email with copy */}
              <div className="inline-flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span className="font-mono text-xs text-slate-300">
                  {personalInfo.socials.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 hover:text-white text-slate-400 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Developer 3D Orbit / Code Terminal */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 rounded-3xl blur-md opacity-30 animate-pulse"></div>

              {/* View Switcher Header */}
              <div className="relative mb-3 flex items-center justify-between px-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Interactive Preview
                </span>
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 shadow-sm">
                  <button
                    onClick={() => setActiveHeroView('orbit')}
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeHeroView === 'orbit'
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-cyan-300" />
                    <span>3D Tech Orbit</span>
                  </button>
                  <button
                    onClick={() => setActiveHeroView('terminal')}
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeHeroView === 'terminal'
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3 h-3 text-indigo-300" />
                    <span>IDE Code</span>
                  </button>
                </div>
              </div>

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-[#0d1322] border border-slate-800/90 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-center">
                
                {activeHeroView === 'orbit' ? (
                  <div className="p-4 flex flex-col items-center justify-center w-full">
                    <TechOrbitAnimation 
                      onSelectSkill={(skillName) => {
                        onShowToast?.(`Selected skill: ${skillName}. Check the Skills section for full details.`, "info");
                      }} 
                    />
                  </div>
                ) : (
                  <div>
                    {/* Portrait Header with Developer Avatar */}
                    <div className="p-6 pb-4 bg-gradient-to-b from-[#131b2e] to-[#0d1322] border-b border-slate-800/80">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img 
                            src="/assets/avatar.jpg" 
                            alt="Shamima Shammi - Full-Stack Developer" 
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-indigo-500/50 shadow-lg shadow-indigo-950"
                            loading="eager"
                          />
                          <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0d1322] rounded-full flex items-center justify-center">
                            <span className="w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75"></span>
                            <span className="absolute w-3 h-3 bg-emerald-500 rounded-full"></span>
                          </span>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-white text-lg sm:text-xl">
                              {personalInfo.name}
                            </h3>
                          </div>
                          <p className="text-xs font-mono text-indigo-400">
                            @ShakiraMorium
                          </p>
                          <p className="text-xs text-slate-400">
                            Python • Django • React • PostgreSQL
                          </p>
                          <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 pt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            Ready to contribute to engineering teams
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Simulated IDE / Code Terminal Window */}
                    <div className="bg-[#090d16] p-4 font-mono text-xs text-slate-300">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-[11px] text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                          <span className="ml-2 text-slate-400">shamima_profile.py</span>
                        </div>
                        <span className="text-indigo-400">Python 3.12</span>
                      </div>

                      <div className="space-y-1 text-slate-300 leading-relaxed font-mono">
                        <p><span className="text-purple-400">class</span> <span className="text-cyan-300">Developer</span>:</p>
                        <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</p>
                        <p className="pl-8 text-slate-400">self.name = <span className="text-emerald-300">"{personalInfo.name}"</span></p>
                        <p className="pl-8 text-slate-400">self.education = <span className="text-emerald-300">"BBA in Accounting"</span></p>
                        <p className="pl-8 text-slate-400">self.stack = [<span className="text-amber-300">"Django"</span>, <span className="text-amber-300">"DRF"</span>, <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"PostgreSQL"</span>]</p>
                        <p className="pl-8 text-slate-400">self.mindset = <span className="text-emerald-300">"Continuous Growth"</span></p>
                        <p className="pl-4 pt-1"><span className="text-purple-400">def</span> <span className="text-blue-400">create_impact</span>(self):</p>
                        <p className="pl-8 text-indigo-300"><span className="text-purple-400">return</span> <span className="text-emerald-300">"Turn complex ideas into reliable solutions."</span></p>
                      </div>

                      {/* Terminal Stats Footer */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-500 block">Status:</span>
                          <span className="text-emerald-400 font-semibold">Active & Building</span>
                        </div>
                        <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-500 block">Location:</span>
                          <span className="text-slate-300 font-semibold">Remote / Flexible</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
