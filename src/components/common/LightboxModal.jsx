import React, { useEffect, useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check, 
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function LightboxModal({ 
  item, 
  isOpen, 
  onClose, 
  onPrev, 
  onNext, 
  currentIndex, 
  totalCount 
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  const handleCopyFilename = () => {
    navigator.clipboard.writeText(item.filename);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Box */}
      <div 
        className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#121214] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0E0E10]">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-zinc-200 font-semibold">
              #{String(item.id).padStart(2, '0')}
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">
              {item.category}
            </span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-zinc-500 hidden sm:inline">
              {currentIndex + 1} of {totalCount}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyFilename}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-zinc-200" />
                  <span className="text-zinc-200">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.filename}</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 min-h-0">
          {/* Image Display */}
          <div className="md:col-span-7 bg-[#09090B] p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-zinc-800">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-zinc-800/80 bg-[#121214] flex items-center justify-center">
              <ImageWithFallback
                src={`/images/${item.filename}`}
                alt={item.title}
                filename={item.filename}
                category={item.category}
                title={item.title}
                tags={item.tags}
                className="w-full h-full"
                modalMode={true}
              />
            </div>
            <div className="w-full mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Local Path: /public/images/{item.filename}</span>
            </div>
          </div>

          {/* Technical Dossier */}
          <div className="md:col-span-5 p-6 flex flex-col justify-between bg-[#121214] space-y-6">
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Hardware / Spec Block */}
              {item.specs && (
                <div className="p-3.5 rounded border border-zinc-800 bg-[#0E0E10] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 font-semibold tracking-wider block">
                    Technical Specifications
                  </span>
                  <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                    {item.specs}
                  </p>
                </div>
              )}

              {/* Operational Impact */}
              {item.operationalImpact && (
                <div className="p-3.5 rounded border border-zinc-800 bg-[#0E0E10] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 font-semibold tracking-wider block">
                    Operational Impact
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {item.operationalImpact}
                  </p>
                </div>
              )}

              {/* Tags */}
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider block mb-2">
                  System Tags
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Controls */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
              <button
                onClick={onPrev}
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>

              <span className="text-zinc-600">
                ← / → to navigate
              </span>

              <button
                onClick={onNext}
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
