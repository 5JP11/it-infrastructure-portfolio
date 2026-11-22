import React from 'react';
import { AI_WORKFLOW_MATRIX } from '../../data/galleryData';

export default function AiArchitectureDeepDive() {
  return (
    <section id="ai-workflow" className="py-24 sm:py-32 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Execution Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            AI-First Systems Architecture
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xl">
            Bridging bare-metal physical infrastructure and rapid AI developer workflows to build high-performance on-prem software with zero vendor lock-in.
          </p>
        </div>

        {/* 4-Step Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/80 border border-zinc-800/80 rounded-lg overflow-hidden">
          {AI_WORKFLOW_MATRIX.map((step, idx) => (
            <div 
              key={idx}
              className="bg-[#121214] p-5 flex flex-col justify-between space-y-4 hover:bg-[#151518] transition-colors"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 font-semibold block">
                  {step.step}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 block">
                  OWNER: {step.owner.toUpperCase()}
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans pt-1">
                  {step.role}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-900">
                <div className="flex flex-wrap gap-1">
                  {step.tools.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Case Study 1 */}
          <div className="p-6 rounded-lg bg-[#121214] border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">CASE STUDY 01</span>
              <span className="text-zinc-200 font-semibold">$0/mo Cloud SaaS</span>
            </div>

            <h3 className="text-base font-semibold text-zinc-100">
              AI-Built Local LAN Digital Signage Platform
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              Commercial cloud signage services typically charge $100–$150/screen/month and fail whenever external internet drops. Using AI developer tools as an execution accelerator, I engineered and deployed a custom digital signage web application running natively on on-prem Synology NAS Web Station across 20+ commercial screens.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="p-2.5 rounded border border-zinc-850 bg-zinc-950/40">
                <span className="text-[10px] text-zinc-500 block">ANNUAL SAVINGS</span>
                <span className="text-zinc-200 font-semibold">$1,800+ Per Venue</span>
              </div>
              <div className="p-2.5 rounded border border-zinc-850 bg-zinc-950/40">
                <span className="text-[10px] text-zinc-500 block">NETWORK DEPENDENCY</span>
                <span className="text-zinc-200 font-semibold">100% Offline Resilient</span>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="p-6 rounded-lg bg-[#121214] border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">CASE STUDY 02</span>
              <span className="text-zinc-200 font-semibold">Internal Automation</span>
            </div>

            <h3 className="text-base font-semibold text-zinc-100">
              Custom Internal HRIS &amp; Shift Management App
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              Standard SaaS HR tools lacked flexibility for multi-site commercial venue shifts and charged high per-seat license fees. Using Claude Code and Antigravity, I developed a custom internal HRIS tailored to local operational staff schedules, integrated directly with biometric check-in logs.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="p-2.5 rounded border border-zinc-850 bg-zinc-950/40">
                <span className="text-[10px] text-zinc-500 block">DEPLOYMENT TIMELINE</span>
                <span className="text-zinc-200 font-semibold">&lt; 1 Week</span>
              </div>
              <div className="p-2.5 rounded border border-zinc-850 bg-zinc-950/40">
                <span className="text-[10px] text-zinc-500 block">DATA STORAGE</span>
                <span className="text-zinc-200 font-semibold">100% On-Premise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
