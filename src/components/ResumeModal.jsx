import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Mail, 
  MapPin, 
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';

export default function ResumeModal({ onClose, onShowToast }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumePlainText = `
SHAMIMA SHAMMI
Full-Stack Web Developer | Python, Django, React, JavaScript
Location: ${personalInfo.socials.location}
Email: ${personalInfo.socials.email}
LinkedIn: ${personalInfo.socials.linkedin}
GitHub: ${personalInfo.socials.github}

==================================================
PROFESSIONAL SUMMARY
==================================================
${personalInfo.about.lead}
${personalInfo.about.paragraphs.join(' ')}

==================================================
ACADEMIC EDUCATION
==================================================
Bachelor of Business Administration (BBA) in Accounting
Focus: Financial logic, analytical data auditing, transactional accuracy, and business workflows.

==================================================
VERIFIED CERTIFICATIONS
==================================================
CSE Fundamentals With Phitron (Fall 2024 Semester)
Issuer: Phitron.io / Programming Hero | Grade: CGPA 3.67
Validation ID: PHBATCH67881101066 (Verified at https://phitron.io/verification)
Topics: C, C++, OOP, Data Structures (Linked Lists, Trees, Graphs, Heaps), Algorithms (Sorting, Searching, BFS/DFS).

==================================================
TECHNICAL SKILLS
==================================================
- Frontend: HTML5, CSS3, JavaScript (ES6+), React, JSX, Responsive Design, Tailwind CSS
- Backend: Python, Django, Django REST Framework, RESTful APIs, Authentication & Authorization
- Databases: PostgreSQL, SQL, Database Design, MongoDB
- Tools: Git, GitHub, Visual Studio Code, Swagger / OpenAPI, Deployment Config
- CS Fundamentals: Object-Oriented Programming (OOP), Data Structures & Algorithms, C, C++
- Growth & Awareness: Technical SEO, Conversion Optimization, Meta Ads Manager principles

==================================================
FEATURED PROJECTS
==================================================
1. Pet Adoption E-Commerce Platform [In Progress]
Stack: React, JavaScript, Python, Django REST Framework, PostgreSQL
- Multi-attribute filtering, health status verification, and structured adoption inquiry queue.
Repo: ${personalInfo.socials.github}

2. Event Management System [Prototype]
Stack: Python, Django, HTML, CSS, JavaScript, PostgreSQL
- Role-based permissions, RSVP seat capacity limits, and organizer dashboard.
Repo: ${personalInfo.socials.github}

3. Modern E-Commerce Application [Prototype]
Stack: React, JavaScript, Tailwind CSS, REST APIs
- Instant search, persistent shopping cart state, and responsive checkout drawer.
Repo: ${personalInfo.socials.github}

==================================================
WHAT I BRING TO AN ENGINEERING TEAM
==================================================
- Willingness to Learn & Rapid Adaptability
- Structured Problem-Solving & Analytical Precision
- Attention to Data Integrity & Edge-Case Validation
- Clear Communication & Collaborative Alignment
- Commitment to Writing Clean, Maintainable Code
    `.trim();

    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    onShowToast?.("ATS Resume text copied to clipboard.", "info");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-preview-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0e1424] border border-slate-700/80 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Actions Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-indigo-400 tracking-wider">
                ATS-Optimized Format
              </span>
              <h2 id="resume-preview-title" className="text-base sm:text-lg font-bold text-white">
                Shamima Shammi — Resume
              </h2>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">Copy Text</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              title="Print or Save as PDF via Browser"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <a
              href="/Shamima_Shammi_Resume.txt"
              download="Shamima_Shammi_Resume.txt"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
              title="Download ATS Text File"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .txt</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS-Friendly Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-900 font-sans text-xs sm:text-sm selection:bg-indigo-100 selection:text-indigo-900">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 text-center space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-950">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-slate-800 tracking-wide uppercase">
              Full-Stack Web Developer | Python & Django Developer | React Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-700 pt-1 font-mono">
              <span>{personalInfo.socials.location}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.socials.email}`} className="text-slate-900 underline font-medium">
                {personalInfo.socials.email}
              </a>
              <span>•</span>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-900 underline">
                LinkedIn Profile
              </a>
              <span>•</span>
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-slate-900 underline">
                GitHub: ShakiraMorium
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              {personalInfo.about.lead} {personalInfo.about.paragraphs[0]} {personalInfo.about.paragraphs[1]}
            </p>
          </div>

          {/* Academic Education (BBA in Accounting) */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-slate-900">
                Bachelor of Business Administration (BBA) in Accounting
              </span>
              <span className="text-xs text-slate-600 font-mono">
                [Graduation Year / In Progress]
              </span>
            </div>
            <p className="text-xs text-slate-600 italic">
              Relevant Focus: Financial information systems, analytical auditing, computational precision, and business process workflow analysis.
            </p>
          </div>

          {/* Verified Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              Verified Certifications
            </h2>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-slate-900">
                CSE Fundamentals With Phitron — Phitron.io / Programming Hero
              </span>
              <span className="text-xs text-emerald-700 font-mono font-semibold">
                CGPA 3.67 • Fall 2024
              </span>
            </div>
            <p className="text-xs text-slate-700">
              Credential ID: <strong>PHBATCH67881101066</strong> (Verified via phitron.io/verification). Core curriculum: Procedural C, Object-Oriented C++, Data Structures (Linked Lists, Binary Trees, Heaps), Graph Algorithms (BFS, DFS), Complexity Analysis.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-800">
              <p>
                <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React, JSX, Responsive Web Design, Tailwind CSS
              </p>
              <p>
                <strong>Backend:</strong> Python, Django, Django REST Framework, RESTful API Development, Authentication & Authorization
              </p>
              <p>
                <strong>Databases:</strong> PostgreSQL, SQL, Database Design, MongoDB
              </p>
              <p>
                <strong>Tools & Workflow:</strong> Git, GitHub, Visual Studio Code, Swagger / OpenAPI, Deployment Config
              </p>
              <p>
                <strong>Computer Science:</strong> Object-Oriented Programming (OOP), Data Structures & Algorithms, C, C++
              </p>
              <p>
                <strong>Growth Awareness:</strong> Technical SEO, Conversion Rate Optimization (CRO), Meta Ads Manager principles
              </p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              Technical Projects
            </h2>

            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-950">
                    {proj.title} <span className="font-normal text-slate-600">[{proj.status}]</span>
                  </span>
                  <span className="text-xs font-mono text-slate-600">
                    {proj.technologies.slice(0, 4).join(', ')}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {proj.problem} Built using {proj.technologies.join(', ')}. {proj.myContribution}
                </p>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                  {proj.highlights.slice(0, 3).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Strengths */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              Core Engineering Attributes
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Willingness to learn, structured problem solving, meticulous attention to detail (honed by accounting background), clear technical communication, and commitment to clean, maintainable code.
            </p>
          </div>

        </div>

        {/* Modal Footer Notice */}
        <div className="px-6 py-3 bg-[#090d16] border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between no-print">
          <span>ATS formatted single-column layout for automated recruiter tracking systems.</span>
          <button
            onClick={onClose}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
