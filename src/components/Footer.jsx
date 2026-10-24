import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Heart, 
  Terminal, 
  Code2, 
  GraduationCap 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070a12] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-300 to-cyan-200 text-xs">
                  SS
                </div>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              "{personalInfo.tagline}"
            </p>

            <div className="flex items-center gap-2 text-indigo-400 text-[11px] font-mono">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>BBA in Accounting • Full-Stack Web Developer</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block font-semibold">
              Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About & Background</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Featured Projects & Case Studies</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">My Development Journey</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">6-Stage Process</a>
              </li>
              <li>
                <a href="#growth" className="hover:text-white transition-colors">Digital Growth & Marketing</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Profiles & Resume */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block font-semibold">
              Connect & Verify
            </span>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 hover:text-indigo-300 hover:border-indigo-500/40 transition-colors"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div>
              <button
                onClick={onOpenResume}
                className="text-xs font-mono text-indigo-400 hover:text-indigo-300 underline cursor-pointer"
              >
                Open Interactive ATS Resume Modal →
              </button>
            </div>

            <p className="text-[11px] text-slate-500">
              Open to junior & entry-level engineering roles, technical internships, and collaborative software projects worldwide.
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {currentYear} {personalInfo.name}. Built with React, Tailwind CSS, Python & Django inspiration.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
