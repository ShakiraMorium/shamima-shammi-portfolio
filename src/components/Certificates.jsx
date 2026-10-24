import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  ZoomIn, 
  X, 
  FileCheck, 
  Sparkles,
  Calendar,
  GraduationCap
} from 'lucide-react';
import { certificates } from '../data/certificates';

export default function Certificates() {
  const [zoomedCert, setZoomedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 bg-[#090d16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Academic Achievements
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Rigorous technical training and verified accomplishments in computer science and software development.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="max-w-4xl mx-auto">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
                
                {/* Certificate Image Preview with Zoom Trigger */}
                <div className="md:col-span-5 relative group">
                  <div 
                    onClick={() => setZoomedCert(cert)}
                    className="relative rounded-xl overflow-hidden border-2 border-slate-700/80 shadow-lg cursor-pointer bg-slate-950 aspect-[4/3] flex items-center justify-center"
                    title="Click to view full certificate"
                  >
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} - ${cert.recipient}`} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/95 text-white text-xs font-semibold border border-emerald-500/50 shadow-xl">
                        <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Inspect Certificate</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>ID: {cert.validationNumber}</span>
                    </span>
                    <span className="text-emerald-400 font-semibold">{cert.grade}</span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cert.statusColor}`}>
                        {cert.status}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                        {cert.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-300">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-slate-400 font-mono">
                      Awarded to: <strong className="text-slate-200">{cert.recipient}</strong>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills / Topics Covered */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                      Curriculum & Core Competencies:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                      {cert.skillsLearned.map((skill, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Verification */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>Verify on Phitron.io</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>

                    <button
                      onClick={() => setZoomedCert(cert)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      <ZoomIn className="w-4 h-4 text-cyan-400" />
                      <span>View Full Certificate</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Full-Size Lightbox Modal */}
      {zoomedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setZoomedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0c1220] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden p-4 sm:p-6 my-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white text-base sm:text-lg">
                  {zoomedCert.title} — {zoomedCert.issuer}
                </h3>
              </div>
              <button
                onClick={() => setZoomedCert(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close zoomed view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-white p-2 flex items-center justify-center shadow-inner">
              <img 
                src={zoomedCert.image} 
                alt={zoomedCert.title} 
                className="w-full h-auto max-h-[75vh] object-contain rounded"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-1">
              <span>Validation Number: <strong className="font-mono text-emerald-400">{zoomedCert.validationNumber}</strong></span>
              <a 
                href={zoomedCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-medium"
              >
                <span>Official Verification Portal: phitron.io/verification</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
