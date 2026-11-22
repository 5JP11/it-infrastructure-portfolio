import React from 'react';
import { AI_OPERATOR_METHODOLOGY } from '../../data/galleryData';

export default function AiOperatorMethodology() {
  return (
    <section className="py-14 border-b border-zinc-900 bg-[#0B0B0E]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-6 space-y-1">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Execution Methodology
          </span>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-100">
            How I Work: The AI-First Operator
          </h2>
        </div>

        {/* 3-Column Minimalist Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800/80 border border-zinc-800/80 rounded-lg overflow-hidden">
          {AI_OPERATOR_METHODOLOGY.map((step) => (
            <div 
              key={step.step}
              className="bg-[#121214] p-5 sm:p-6 space-y-2 hover:bg-[#151518] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-500 font-bold">
                  STEP {step.step}
                </span>
                <h3 className="text-sm font-semibold text-zinc-200">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
