import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Copy, Check, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { CANDIDATE_INFO, CORE_STATS } from '../../data/galleryData';

export default function Hero({ onOpenResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CANDIDATE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Contact & Location Strip */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-zinc-500 mb-8 pb-4 border-b border-zinc-900">
          <div className="flex items-center gap-1.5 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>{CANDIDATE_INFO.location}</span>
          </div>

          <span className="text-zinc-800 hidden sm:inline">/</span>

          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-zinc-500" />
            <button
              onClick={handleCopyEmail}
              className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1"
              title="Click to copy email address"
            >
              <span>{CANDIDATE_INFO.email}</span>
              {copiedEmail ? (
                <Check className="w-3 h-3 text-emerald-400 ml-1" />
              ) : (
                <Copy className="w-3 h-3 text-zinc-600 hover:text-zinc-400 ml-1" />
              )}
            </button>
          </div>

          <span className="text-zinc-800 hidden sm:inline">/</span>

          <div className="flex items-center gap-1.5 text-zinc-300">
            <Phone className="w-3.5 h-3.5 text-zinc-500" />
            <a href={`tel:${CANDIDATE_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
              {CANDIDATE_INFO.phone}
            </a>
          </div>

          <span className="text-zinc-800 hidden sm:inline">/</span>

          <div className="flex items-center gap-1.5">
            <a
              href={CANDIDATE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              title="View LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-2.5 h-2.5 text-zinc-500" />
            </a>
          </div>

          <span className="text-zinc-800 hidden lg:inline">/</span>

          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Open to 100% Remote / WFH &amp; Hybrid</span>
          </div>
        </div>

        {/* Hero Headline with Circular Profile Avatar Slot */}
        <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8 mb-6">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold block">
              {CANDIDATE_INFO.fullName}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-50 leading-[1.12]">
              Senior IT Operations &amp; Infrastructure Lead
            </h1>
            <p className="text-base sm:text-lg font-mono text-zinc-400">
              Network Engineering · High-Performance Hardware · AI-Assisted Systems Builder
            </p>
          </div>

          {/* Profile Photo Avatar Slot */}
          <div className="shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-zinc-800 bg-[#121214] shadow-sm overflow-hidden relative group">
              {!imgError ? (
                <img
                  src={CANDIDATE_INFO.profilePhoto}
                  alt={CANDIDATE_INFO.fullName}
                  className="w-full h-full object-cover object-top rounded-full transition-all duration-300"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-zinc-300 font-mono text-sm font-semibold">
                  JPN
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Professional Summary (Exact Resume Sync) */}
        <div className="mt-6 max-w-3xl space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
          <p>
            {CANDIDATE_INFO.summary}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white text-zinc-950 font-mono text-xs font-semibold hover:bg-zinc-200 transition-colors"
          >
            <span>View Proof of Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-zinc-800 text-zinc-300 font-mono text-xs hover:border-zinc-700 hover:text-white transition-colors"
          >
            <span>Contact / Resume</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-zinc-400 font-mono text-xs hover:text-zinc-200 transition-colors"
          >
            <span>Quick Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Minimalist Stats Row */}
        <div className="mt-14 pt-8 border-t border-zinc-900 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0">
          {CORE_STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className={`sm:px-6 first:pl-0 last:border-r-0 ${
                idx < CORE_STATS.length - 1 ? 'sm:border-r sm:border-zinc-900' : ''
              }`}
            >
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-zinc-100 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-zinc-300 font-medium">
                {stat.label}
              </div>
              <div className="mt-0.5 text-[11px] font-mono text-zinc-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
