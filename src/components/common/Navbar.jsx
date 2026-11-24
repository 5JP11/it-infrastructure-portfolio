import React, { useState } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';
import { CANDIDATE_INFO } from '../../data/galleryData';

export default function Navbar({ onOpenResumeModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Capabilities', href: '#pillars' },
    { label: 'Proof of Work', href: '#gallery' },
    { label: 'Experience', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#09090B]/85 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Monogram / Name + Status Dot */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-mono text-xs sm:text-sm tracking-wider font-bold text-zinc-100 group-hover:text-white transition-colors">
            John Paulo (JP) Navarro
          </span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-[11px] font-mono font-medium text-emerald-400 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="hidden sm:inline">Available for Remote / Hybrid / Onsite</span>
            <span className="sm:hidden">Available</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs lg:text-sm font-mono font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 px-2 py-1 rounded transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CANDIDATE_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-1.5 rounded transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResumeModal}
            className="text-xs lg:text-sm font-mono font-bold text-zinc-950 bg-white hover:bg-zinc-200 px-3.5 py-1.5 rounded shadow-sm transition-all"
          >
            Resume
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-900 bg-[#09090B] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono text-zinc-400 hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-900 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="text-xs font-mono text-zinc-300 hover:text-white px-3 py-1.5 rounded border border-zinc-800"
            >
              Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono text-zinc-950 bg-white px-3 py-1.5 rounded font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
