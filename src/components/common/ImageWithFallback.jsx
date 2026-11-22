import React, { useState } from 'react';
import { HardDrive, FileText, ImageIcon } from 'lucide-react';

export default function ImageWithFallback({ 
  src, 
  alt, 
  filename, 
  category, 
  title, 
  tags = [], 
  className = '', 
  modalMode = false 
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-[#121214] flex items-center justify-center border border-zinc-800/80 ${className}`}>
      {/* Real Image */}
      {!hasError && (
        <img
          src={src}
          alt={alt || title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoading ? 'opacity-0 scale-95' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      )}

      {/* Ultra-Minimalist Charcoal Fallback Placeholder */}
      {hasError && (
        <div className="w-full h-full p-6 flex flex-col justify-between bg-[#121214] select-none text-left">
          {/* Top category & item tag */}
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>{category}</span>
            <span className="text-zinc-600">ASSET PREVIEW</span>
          </div>

          {/* Center filename staging */}
          <div className="my-auto py-2">
            <div className="flex items-center gap-2 text-zinc-400 mb-2">
              <HardDrive className="w-4 h-4 text-zinc-500" />
              <span className="text-xs font-mono text-zinc-200 font-medium truncate">
                {filename}
              </span>
            </div>
            <p className="text-[11px] font-mono text-zinc-500 line-clamp-1">
              /public/images/{filename}
            </p>
          </div>

          {/* Bottom tags */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
            {tags.slice(0, modalMode ? 4 : 2).map((tag, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800/80 text-zinc-400"
              >
                {tag}
              </span>
            ))}
            {tags.length > (modalMode ? 4 : 2) && (
              <span className="text-[10px] font-mono text-zinc-600">
                +{tags.length - (modalMode ? 4 : 2)}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
