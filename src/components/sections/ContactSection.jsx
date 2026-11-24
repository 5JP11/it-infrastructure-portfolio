import React, { useState } from 'react';
import { Mail, Copy, Check, Phone, MapPin, Send, Linkedin, Download } from 'lucide-react';
import { CANDIDATE_INFO } from '../../data/galleryData';

export default function ContactSection({ onOpenResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Senior IT Operations & Infrastructure Lead',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CANDIDATE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Direct Info (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>AVAILABLE IMMEDIATELY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                Initiate Contact
              </h2>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 leading-relaxed">
                Open to 100% Remote / WFH and Hybrid Roles across US EST, APAC, and Global timezones.
              </p>
            </div>

            <div className="pt-2 space-y-3 text-xs font-mono">
              {/* Email Box */}
              <div className="p-3 rounded border border-zinc-800 bg-[#121214] flex items-center justify-between">
                <span className="text-zinc-300 truncate mr-2">{CANDIDATE_INFO.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-zinc-500 hover:text-white transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-zinc-200" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Box */}
              <div className="p-3 rounded border border-zinc-800 bg-[#121214] flex items-center justify-between">
                <span className="text-zinc-300">{CANDIDATE_INFO.phone}</span>
                <a
                  href={`tel:${CANDIDATE_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Call
                </a>
              </div>

              {/* LinkedIn Box */}
              <div className="p-3 rounded border border-zinc-800 bg-[#121214] flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <a
                  href={CANDIDATE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Connect ↗
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${CANDIDATE_INFO.email}?subject=Senior%20IT%20Operations%20%26%20Infrastructure%20Lead%20Inquiry`}
                  className="flex-1 py-2 px-3 text-center rounded bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors"
                >
                  Send Direct Mail
                </a>
                <button
                  onClick={onOpenResumeModal}
                  className="py-2 px-3 rounded border border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
                >
                  Resume
                </button>
                <a
                  href={CANDIDATE_INFO.resumePdf}
                  download="John_Paulo_Navarro_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded border border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors flex items-center justify-center gap-1 text-xs"
                  title="Download Official PDF Resume"
                >
                  <Download className="w-3.5 h-3.5 text-zinc-400" />
                  <span>PDF</span>
                </a>
              </div>

              <div className="pt-4 text-[11px] text-zinc-500 space-y-1">
                <div>Candidate: {CANDIDATE_INFO.fullName}</div>
                <div>Location: {CANDIDATE_INFO.location}</div>
                <div>Availability: Full-time / Contractor / Multi-Site Operations</div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg bg-[#121214] border border-zinc-800 space-y-6">
              <h3 className="text-base font-semibold text-zinc-100">
                Direct Inquiry Transmission
              </h3>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-2">
                  <div className="text-xs font-mono text-zinc-200 font-semibold">
                    Transmission Dispatched
                  </div>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Thank you. Details have been logged. You may also contact directly via <span className="text-zinc-300 font-mono">{CANDIDATE_INFO.email}</span> or <span className="text-zinc-300 font-mono">{CANDIDATE_INFO.phone}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', role: 'Senior IT Operations & Infrastructure Lead', message: '' });
                    }}
                    className="text-xs font-mono text-zinc-500 hover:text-zinc-300 underline pt-2 block mx-auto"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 block">
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hiring Manager / Enterprise Corp"
                        className="w-full px-3 py-2 rounded bg-[#09090B] border border-zinc-800 text-xs font-mono text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 block">
                        Work Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hiring@company.com"
                        className="w-full px-3 py-2 rounded bg-[#09090B] border border-zinc-800 text-xs font-mono text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 block">
                      Role / Scope of Engagement
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-[#09090B] border border-zinc-800 text-xs font-mono text-zinc-200 focus:outline-none focus:border-zinc-600"
                    >
                      <option value="Senior IT Operations & Infrastructure Lead">Senior IT Operations &amp; Infrastructure Lead (Remote / Hybrid)</option>
                      <option value="Network & Fiber Engineer (MikroTik / Fortinet / Aruba)">Network &amp; Fiber Engineer (MikroTik / Fortinet / Aruba)</option>
                      <option value="Hardware & Supercomputer Servicing (DGX / Linux)">Hardware &amp; Supercomputer Servicing (DGX / Linux)</option>
                      <option value="AI-Assisted Systems Builder & Automation">AI-Assisted Systems Builder &amp; Automation Lead</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 block">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline role scope, operational timeline, or infrastructure requirements..."
                      className="w-full px-3 py-2 rounded bg-[#09090B] border border-zinc-800 text-xs font-mono text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded bg-white text-zinc-950 font-mono text-xs font-semibold hover:bg-zinc-200 transition-colors"
                  >
                    Dispatch Transmission
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
