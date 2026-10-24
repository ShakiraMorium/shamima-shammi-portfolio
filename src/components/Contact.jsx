import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Copy, 
  Check, 
  AlertCircle, 
  Info,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required.";
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Message must be at least 15 characters long.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      onShowToast?.("Please complete all required fields correctly.", "error");
      return;
    }

    setIsSubmitting(true);
    // Simulate frontend validation & demonstration response without fake external claims
    setTimeout(() => {
      setIsSubmitting(false);
      setDemoSubmitted(true);
      onShowToast?.("Demonstration received: Email client fallback generated below.", "info");
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    onShowToast?.("Email address copied to clipboard.", "info");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoUrl = `mailto:${personalInfo.socials.email}?subject=${encodeURIComponent(formData.subject || 'Opportunity Inquiry')}&body=${encodeURIComponent(
    `Hello Shamima,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#0b0f19] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 uppercase tracking-wider">
            <Send className="w-3.5 h-3.5 text-indigo-400" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have a Project or Opportunity in Mind?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {personalInfo.socials.availability}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Let's Connect
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I'm open to discussing developer opportunities, collaborative projects, and opportunities to contribute to useful digital products.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                
                {/* LinkedIn */}
                <a 
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Professional Network
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                      LinkedIn Profile
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a 
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Code Repositories
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      github.com/ShakiraMorium
                    </span>
                  </div>
                </a>

                {/* Email Card with Copy button */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase text-slate-400 block">
                          Email Address
                        </span>
                        <span className="text-xs sm:text-sm font-mono text-slate-200">
                          {personalInfo.socials.email}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="text-[11px] text-amber-400/90 bg-amber-950/20 px-2.5 py-1 rounded border border-amber-900/30 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 shrink-0" />
                    <span>{personalInfo.socials.emailNote}</span>
                  </div>
                </div>

              </div>

              {/* Work Availability Badge */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-xs text-emerald-300 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Ready for technical interviews, coding challenges, and collaborative inquiries.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Fill out the form below. For immediate delivery, you can also launch your local mail client.
                </p>
              </div>

              {demoSubmitted ? (
                <div className="p-6 rounded-xl bg-slate-900/90 border border-indigo-500/40 space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 text-emerald-400">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <h4 className="font-bold text-base text-white">
                      Form Validated Successfully
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong>Demonstration Note:</strong> As a client-side portfolio, this form validates all input fields accurately. To send this message directly to Shamima right now, click the button below to launch your default mail app with your message pre-loaded:
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Default Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setDemoSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 text-slate-100 text-sm border focus:outline-none focus:ring-2 transition-all ${
                          errors.name 
                            ? 'border-rose-500 focus:ring-rose-500/50' 
                            : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                        }`}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. recruiter@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 text-slate-100 text-sm border focus:outline-none focus:ring-2 transition-all ${
                          errors.email 
                            ? 'border-rose-500 focus:ring-rose-500/50' 
                            : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                        }`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Junior Full-Stack Role / Project Inquiry"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 text-slate-100 text-sm border focus:outline-none focus:ring-2 transition-all ${
                        errors.subject 
                          ? 'border-rose-500 focus:ring-rose-500/50' 
                          : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                      }`}
                      aria-invalid={errors.subject ? 'true' : 'false'}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Shamima, we reviewed your projects and would like to discuss..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 text-slate-100 text-sm border focus:outline-none focus:ring-2 transition-all resize-y ${
                        errors.message 
                          ? 'border-rose-500 focus:ring-rose-500/50' 
                          : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                      }`}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-mono">
                      * All fields are verified locally
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition-all shadow-md shadow-indigo-600/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      {isSubmitting ? (
                        <span>Validating...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
