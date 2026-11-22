import React from 'react';
import { CAREER_TIMELINE, ACTIVE_UPSKILLING } from '../../data/galleryData';

export default function CareerTimeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Work Experience &amp; Pedigree
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Career Timeline &amp; Experience
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xl">
            A comprehensive track record of multi-site IT leadership, global enterprise support in Dubai, precision property engineering, and foundational aviation mechanics.
          </p>
        </div>

        {/* Minimal Two-Column Timeline */}
        <div className="space-y-12">
          {CAREER_TIMELINE.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pt-8 first:pt-0 border-t first:border-t-0 border-zinc-900"
            >
              {/* Left Column: Dates & Meta in Monospace (4 cols) */}
              <div className="md:col-span-4 space-y-1">
                <div className="text-xs font-mono text-zinc-300 font-medium">
                  {item.period}
                </div>
                <div className="text-xs font-mono text-zinc-500">
                  {item.location}
                </div>
                <div className="pt-2">
                  <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Right Column: Role & Achievements (8 cols) */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-100">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mt-0.5">
                    {item.company}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {item.summary}
                </p>

                <ul className="space-y-2 pt-1">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-zinc-600 font-mono mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/60 border border-zinc-800 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Technical Upskilling Block */}
        <div className="p-6 sm:p-8 rounded-lg bg-[#121214] border border-zinc-800 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Continuous Professional Development
            </span>
            <h3 className="text-base sm:text-lg font-semibold text-zinc-100">
              Active Technical Upskilling &amp; Certifications Track
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              Currently expanding industrial control logic, PLC ladder programming, and enterprise cloud architecture to unify IT and operational technology (OT).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {ACTIVE_UPSKILLING.map((skill, sIdx) => (
              <div key={sIdx} className="p-4 rounded border border-zinc-850 bg-zinc-950/40 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">{skill.platform}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-semibold">
                    {skill.status}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-zinc-200">
                  {skill.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
