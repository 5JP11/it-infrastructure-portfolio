import React, { useState } from 'react';
import { MANAGED_VENUES } from '../../data/galleryData';

function VenueLogoSlot({ venue }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group flex flex-col items-center text-center space-y-3">
      {/* Logo Container Tile */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#121214] border border-zinc-800/80 group-hover:border-zinc-600 transition-all duration-300 flex items-center justify-center p-2.5 overflow-hidden shadow-sm">
        {!hasError ? (
          <img
            src={venue.logo}
            alt={`${venue.name} logo`}
            className={`w-full h-full object-contain filter grayscale contrast-125 opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 ${
              venue.isLightBg ? 'rounded bg-white/95 p-1' : ''
            }`}
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-300 font-mono text-xs font-semibold tracking-wider">
            {venue.monogram}
          </div>
        )}
      </div>

      {/* Monospace Venue Labels Underneath */}
      <div className="space-y-0.5">
        <h4 className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
          {venue.name}
        </h4>
        <p className="text-[11px] font-mono text-zinc-500 leading-snug">
          {venue.tagline}
        </p>
      </div>
    </div>
  );
}

export default function VenuesManagedStrip() {
  return (
    <section className="py-12 sm:py-16 border-b border-zinc-900 bg-[#09090B]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Subtle Section Label */}
        <div className="text-center mb-8 sm:mb-10 space-y-1">
          <p className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
            MULTI-SITE INFRASTRUCTURE, POS/KDS &amp; PRO-AV MANAGED ACROSS
          </p>
        </div>

        {/* 4-Column Clean Logo Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-start justify-center">
          {MANAGED_VENUES.map((venue) => (
            <VenueLogoSlot key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </section>
  );
}
