import React, { useState, useRef, useEffect } from 'react';

const PLAYLIST = [
  { id: 'run-1', src: '/videos/monkeytype-1.mp4', label: 'RUN 01/02', name: 'Run 01' },
  { id: 'run-2', src: '/videos/monkeytype-2.mp4', label: 'RUN 02/02', name: 'Run 02' }
];

export default function TypingTelemetry() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const handleEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  const currentRun = PLAYLIST[currentIndex];

  return (
    <div className="mt-12 max-w-3xl">
      {/* Minimalist Telemetry Header Bar */}
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-2.5 px-0.5">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wider uppercase text-zinc-400 font-semibold">
            LIVE TELEMETRY // KEYBOARD THROUGHPUT
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Dynamic Run Pill Switcher */}
          <div className="flex items-center gap-1 bg-zinc-900/90 border border-zinc-800 rounded px-1 py-0.5">
            {PLAYLIST.map((run, idx) => (
              <button
                key={run.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                  currentIndex === idx
                    ? 'bg-zinc-800 text-zinc-100 font-semibold shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
                title={`Switch to ${run.label}`}
              >
                {run.label}
              </button>
            ))}
          </div>

          <span className="text-zinc-700 hidden sm:inline">•</span>
          <span className="text-zinc-400 font-medium hidden sm:inline">
            ~99 WPM • MONKEYTYPE
          </span>
        </div>
      </div>

      {/* Precision Cropped Viewport Frame */}
      <div className="relative w-full max-w-3xl h-[200px] sm:h-[240px] overflow-hidden rounded-xl border border-zinc-800/80 bg-[#09090B] shadow-2xl">
        <video
          ref={videoRef}
          key={currentRun.src}
          src={currentRun.src}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleEnded}
          className="pointer-events-none w-full h-full object-cover scale-[1.38] mix-blend-lighten contrast-[1.38] brightness-[0.82] saturate-[0.85] transition-opacity duration-500"
          style={{
            objectPosition: 'center 45%'
          }}
        />

        {/* Soft Inner Edge Vignette so cropped edges fade naturally into the #09090B obsidian page */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_36px_18px_#09090B] rounded-xl" />
      </div>
    </div>
  );
}
