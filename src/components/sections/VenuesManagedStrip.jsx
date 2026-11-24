import React, { useState } from 'react';
import { MANAGED_VENUES } from '../../data/galleryData';

function VenueLogoSlot({ venue }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group flex flex-col items-center text-center space-y-3">
      {/* Bigger Logo Container Tile with Hairline Glow */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-[#131316] border border-zinc-700/80 group-hover:border-zinc-400 group-hover:bg-[#18181c] group-hover:shadow-lg group-hover:shadow-zinc-950/60 transition-all duration-300 flex items-center justify-center p-3 sm:p-3.5 overflow-hidden shadow-md">
        {!hasError ? (
          <img
            src={venue.logo}
            alt={`${venue.name} logo`}
            className={`w-full h-full object-contain filter contrast-125 opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ${
              venue.isLightBg ? 'rounded-lg bg-white/95 p-1' : ''
            }`}
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-200 font-mono text-sm font-bold tracking-wider">
            {venue.monogram}
          </div>
        )}
      </div>

      {/* Bigger & Highlighted Monospace Venue Labels */}
      <div className="space-y-1">
        <h4 className="text-sm sm:text-base font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
          {venue.name}
        </h4>
        <p className="text-xs font-mono text-zinc-400 group-hover:text-zinc-300 leading-snug">
          {venue.tagline}
        </p>
      </div>
    </div>
  );
}

export default function VenuesManagedStrip() {
  return (
    <section className="py-8 sm:py-10 border-b border-zinc-900 bg-[#09090B]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Highlighted & Bigger Section Label */}
        <div className="text-center mb-6 sm:mb-7">
          <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-750 text-xs sm:text-sm font-mono tracking-wider text-zinc-200 font-bold uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>MULTI-SITE INFRASTRUCTURE, POS/KDS &amp; PRO-AV MANAGED ACROSS</span>
          </p>
        </div>

        {/* 4-Column Clean Logo Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-start justify-center pt-2">
          {MANAGED_VENUES.map((venue) => (
            <VenueLogoSlot key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </section>
  );
}
