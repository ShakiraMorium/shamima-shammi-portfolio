import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Journey', href: '#journey' },
    { name: 'Process', href: '#process' },
    { name: 'Digital Growth', href: '#growth' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/25 py-2.5 sm:py-3' 
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#" 
            className="flex items-center gap-2 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1"
            aria-label="Shamima Shammi Portfolio Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow shrink-0">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-tr from-indigo-300 to-cyan-200">
                SS
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-slate-100 tracking-tight text-sm sm:text-base lg:text-lg group-hover:text-indigo-300 transition-colors truncate">
                {personalInfo.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-indigo-400/90 tracking-wide uppercase truncate">
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Visible on lg and larger: >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Live Recruiter Status Indicator (Visible on 2xl / xl screens) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Roles</span>
            </div>

            {/* Resume Button (Always visible on sm+, and accessible in drawer on mobile) */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer"
              title="View ATS-Optimized Resume"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
              <span>Resume</span>
            </button>

            {/* Let's Talk CTA (Visible on sm+) */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-lg transition-all shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>

            {/* Mobile Quick Resume Button (< sm screens) */}
            <button
              onClick={onOpenResume}
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg"
              aria-label="View Resume"
              title="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>CV</span>
            </button>

            {/* Hamburger Menu Toggle (Visible on Mobile & Tablet: < 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700/70 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-indigo-300" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile & Tablet Full Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-[57px] sm:top-[65px] bottom-0 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 overflow-y-auto px-4 pt-4 pb-8 flex flex-col justify-between animate-in slide-in-from-top-2 duration-200 shadow-2xl z-50"
        >
          <div className="space-y-4">
            
            {/* Recruiter Hiring Status */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-medium">Available for Junior / Entry-Level Roles</span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            {/* Navigation Links Grid / Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm sm:text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 active:bg-slate-800 rounded-xl transition-all border border-transparent hover:border-slate-700/50"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              ))}
            </div>

          </div>

          {/* Drawer Bottom Actions */}
          <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-3">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 active:scale-[0.98] transition-all"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View ATS Resume</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-xl shadow-md shadow-indigo-600/30 active:scale-[0.98] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center justify-between pt-2 px-2 text-xs text-slate-400">
              <span className="truncate">{personalInfo.email}</span>
              <div className="flex items-center gap-3">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-1.5 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-1.5 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-300" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
