import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TECHNICAL_COMPETENCIES } from '../../data/galleryData';

export default function TechnicalPillars({ onSelectCategory }) {
  const getFilterCategory = (competencyId) => {
    switch (competencyId) {
      case 'networking-infrastructure':
        return 'Networking & 5G/Fiber';
      case 'ai-assisted-engineering':
        return 'AI-Built Software';
      case 'security-access-control':
        return 'Smart Access & Security';
      case 'hardware-enterprise-systems':
        return 'AI Hardware & Servers';
      case 'pro-av-facilities':
      default:
        return 'Infrastructure & Ops';
    }
  };

  return (
    <section id="pillars" className="py-24 sm:py-32 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Technical Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Core Competencies &amp; Technical Skills
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xl">
            Directly synced to operational field deployments across enterprise networks, physical security, AI compute hardware, and modern automation.
          </p>
        </div>

        {/* Competencies Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/80 border border-zinc-800/80 rounded-lg overflow-hidden">
          {TECHNICAL_COMPETENCIES.map((comp) => {
            const filterCat = getFilterCategory(comp.id);

            return (
              <div
                key={comp.id}
                className="bg-[#121214] p-6 flex flex-col justify-between space-y-5 hover:bg-[#151518] transition-colors"
              >
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-zinc-100">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {comp.summary}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-1.5 pt-2 border-t border-zinc-900">
                    {comp.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-xs text-zinc-300 flex items-start gap-1.5 leading-relaxed">
                        <span className="text-zinc-600 font-mono mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {comp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Filter Link */}
                <div className="pt-3 border-t border-zinc-900">
                  <button
                    onClick={() => onSelectCategory(filterCat)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>View {filterCat} Proof</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
