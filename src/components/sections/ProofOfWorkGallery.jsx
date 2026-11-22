import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Copy, 
  Check, 
  FolderOpen, 
  ArrowUpRight 
} from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../../data/galleryData';
import ImageWithFallback from '../common/ImageWithFallback';

export default function ProofOfWorkGallery({ 
  selectedCategory, 
  setSelectedCategory, 
  onOpenLightbox 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showManifest, setShowManifest] = useState(false);
  const [copiedFilename, setCopiedFilename] = useState(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: GALLERY_ITEMS.length };
    GALLERY_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered items
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.filename.toLowerCase().includes(query) ||
        (item.specs && item.specs.toLowerCase().includes(query)) ||
        item.tags.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyManifest = (filename) => {
    navigator.clipboard.writeText(filename);
    setCopiedFilename(filename);
    setTimeout(() => setCopiedFilename(null), 2000);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Verified Deployments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Proof of Work
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xl">
              25 documented field operations covering liquid-cooled AI compute, carrier-grade MikroTik routing, custom internal software, and smart facilities.
            </p>
          </div>

          <button
            onClick={() => setShowManifest(!showManifest)}
            className="self-start sm:self-auto inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white px-3 py-1.5 rounded border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <FolderOpen className="w-3.5 h-3.5 text-zinc-400" />
            <span>{showManifest ? 'Hide Asset Manifest' : 'View 25-Image Manifest'}</span>
          </button>
        </div>

        {/* Collapsible Asset Manifest Box */}
        {showManifest && (
          <div className="mb-12 p-5 rounded-lg bg-[#121214] border border-zinc-800 space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-200 font-medium">Image Manifest (`/public/images/`)</span>
              <span className="text-zinc-500">25 Target Files</span>
            </div>
            <p className="text-xs text-zinc-400">
              Drop your 25 JPG photos into the <code className="text-zinc-300 bg-zinc-900 px-1 py-0.5 rounded border border-zinc-800">/public/images/</code> folder. Click any item to copy its target filename:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-2 border-t border-zinc-900">
              {GALLERY_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleCopyManifest(item.filename)}
                  className="flex items-center justify-between p-2 rounded bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-850 hover:border-zinc-700 text-left transition-colors"
                >
                  <span className="text-xs font-mono text-zinc-300 truncate mr-2">
                    {item.filename}
                  </span>
                  {copiedFilename === item.filename ? (
                    <Check className="w-3.5 h-3.5 text-zinc-200 shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Minimal Underline Filter Tabs Bar */}
        <div className="border-b border-zinc-800 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
            {GALLERY_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              const count = categoryCounts[category] || 0;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-xs font-mono pb-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'border-white text-zinc-50 font-medium'
                      : 'border-transparent text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <span>{category}</span>
                  <span className="text-[10px] text-zinc-600">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Minimal Search Input */}
          <div className="relative pb-3 sm:pb-0">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter items..."
              className="pl-8 pr-3 py-1.5 rounded bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700 w-full sm:w-48"
            />
          </div>
        </div>

        {/* 25-Item Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, index, filteredItems)}
              className="group cursor-pointer rounded-lg bg-[#121214] border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Photo Container 4:3 Aspect Ratio */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#09090B] border-b border-zinc-800/80 relative">
                <ImageWithFallback
                  src={`/images/${item.filename}`}
                  alt={item.title}
                  filename={item.filename}
                  category={item.category}
                  title={item.title}
                  tags={item.tags}
                  className="w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Card Details */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>{item.category}</span>
                    <span>#{String(item.id).padStart(2, '0')}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-850 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="truncate max-w-[180px] text-zinc-500">
                    {item.filename}
                  </span>
                  <span className="inline-flex items-center gap-1 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-16 text-center text-xs font-mono text-zinc-500">
            No matching items found.
          </div>
        )}
      </div>
    </section>
  );
}
