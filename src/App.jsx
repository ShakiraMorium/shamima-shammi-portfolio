import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Journey from './components/Journey';
import Process from './components/Process';
import DigitalGrowth from './components/DigitalGrowth';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ProjectPreviewModal from './components/ProjectPreviewModal';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [selectedPreviewProject, setSelectedPreviewProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'info' });

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast({ message: '', type: 'info' });
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section with 3D Tech Orbit around Center Portrait */}
        <Hero 
          onOpenResume={() => setResumeModalOpen(true)} 
          onShowToast={showToast}
        />

        {/* 2. About Me Section (with BBA in Accounting) */}
        <About />

        {/* 3. Technical Skills Section (no arbitrary percentages) */}
        <Skills />

        {/* 4. Featured Projects Section with Front Page UI Previews */}
        <Projects 
          onOpenCaseStudy={(project) => setSelectedCaseStudy(project)} 
          onPreviewFrontPage={(project) => setSelectedPreviewProject(project)}
        />

        {/* 5. Verified Certifications & Academic Credentials */}
        <Certificates />

        {/* 6. Development Journey & What I Bring to a Team */}
        <Journey />

        {/* 6. Development Process (6 stages) */}
        <Process />

        {/* 7. Digital Growth & Marketing (distinct section) */}
        <DigitalGrowth />

        {/* 8. Contact Section */}
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* 15-Point Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

      {/* Full-Bleed Front Page UI Preview Modal */}
      {selectedPreviewProject && (
        <ProjectPreviewModal
          project={selectedPreviewProject}
          onClose={() => setSelectedPreviewProject(null)}
        />
      )}

      {/* ATS Resume Modal */}
      {resumeModalOpen && (
        <ResumeModal
          onClose={() => setResumeModalOpen(false)}
          onShowToast={showToast}
        />
      )}

      {/* Toast Feedback */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />

    </div>
  );
}
