import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
          <span className="font-mono text-xs tracking-wider font-semibold text-zinc-100 group-hover:text-white transition-colors">
            JP.NAVARRO
          </span>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="hidden sm:inline">Available for Remote / Hybrid</span>
            <span className="sm:hidden">Available</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenResumeModal}
            className="text-xs font-mono text-zinc-300 hover:text-white px-2.5 py-1 rounded border border-zinc-800 hover:border-zinc-700 transition-colors"
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
