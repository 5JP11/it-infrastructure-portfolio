import React, { useState, useMemo } from 'react';
import { VENDOR_ECOSYSTEM, VENDOR_CATEGORIES } from '../../data/vendorData';

export default function VendorEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState('All Ecosystem');

  const filteredVendors = useMemo(() => {
    if (selectedCategory === 'All Ecosystem') return VENDOR_ECOSYSTEM;
    return VENDOR_ECOSYSTEM.filter((v) => v.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="ecosystem" className="py-20 sm:py-24 border-b border-zinc-900 bg-[#09090B]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Hardware, Platforms &amp; Automation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Vendor &amp; Device Ecosystem
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xl">
              Enterprise equipment, network routers, biometric access, cloud directories, and industrial PLC tools actively deployed and administered.
            </p>
          </div>

          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
            {VENDOR_ECOSYSTEM.length} Verified Vendors
          </span>
        </div>

        {/* Highlighted Category Filter Tabs */}
        <div className="mb-8 flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar pb-2">
          {VENDOR_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs sm:text-sm font-mono font-bold px-3.5 py-2 rounded-lg whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-zinc-100 text-zinc-950 border-white shadow-md scale-[1.02]'
                    : 'bg-[#121214] border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-650 hover:bg-zinc-900'
                }`}
              >
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Minimalist Grid of Hardware & Device Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filteredVendors.map((vendor) => (
            <div
              key={vendor.id}
              className="group p-4 rounded-lg bg-[#121214] border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between space-y-3 hover:bg-[#151518]"
            >
              <div className="flex items-start justify-between">
                {/* Vector Brand Icon */}
                <div className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-colors">
                  {vendor.icon}
                </div>
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-500 transition-colors">
                  {vendor.category}
                </span>
              </div>

              <div className="space-y-0.5">
                <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {vendor.name}
                </h4>
                <p className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors leading-snug">
                  {vendor.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
