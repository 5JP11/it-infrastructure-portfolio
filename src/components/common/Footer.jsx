import React, { useState } from 'react';
import { ArrowUp, Copy, Check, Linkedin, Mail } from 'lucide-react';
import { CANDIDATE_INFO } from '../../data/galleryData';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CANDIDATE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 bg-[#09090B] py-12 text-xs font-mono text-zinc-500">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>{CANDIDATE_INFO.monogram} · SYSTEMS OPERATIONAL (99.9% UPTIME)</span>
          </div>
          <p className="text-[11px] text-zinc-600">
            {CANDIDATE_INFO.fullName} · {CANDIDATE_INFO.headline} · {CANDIDATE_INFO.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            onClick={handleCopy}
            className="hover:text-zinc-300 transition-colors flex items-center gap-1"
          >
            {copied ? <Check className="w-3 h-3 text-zinc-200" /> : <Copy className="w-3 h-3 text-zinc-600" />}
            <span>{copied ? 'Copied' : CANDIDATE_INFO.email}</span>
          </button>
          <a 
            href={CANDIDATE_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-zinc-300 transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3 h-3" />
            <span>LinkedIn</span>
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors ml-2"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
