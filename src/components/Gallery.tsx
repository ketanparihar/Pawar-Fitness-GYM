import React, { useState, useEffect, useCallback } from 'react';
import { gymConfig, type GalleryItem } from '../config/gymConfig';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Gym', 'Equipment', 'Training', 'Fitness', 'Environment'];

  const filteredItems: GalleryItem[] =
    activeCategory === 'All'
      ? gymConfig.gallery
      : gymConfig.gallery.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
    );
  }, [selectedImageIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
    );
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-24 bg-[#07080b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff3b30] text-xs font-bold uppercase tracking-widest mb-3">
            Gym Floor & Vibe
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            PHOTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b30] to-[#ff6b00]">GALLERY</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Take a visual tour inside Pawar Fitness in Badora, Betul.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] text-white shadow-lg shadow-red-600/30 scale-105'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#111218] border border-white/10 aspect-square cursor-pointer shadow-lg hover:shadow-red-600/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4 text-[#ff3b30]" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#ff3b30] px-2 py-0.5 rounded bg-black/70 inline-block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Note */}
        <p className="text-center text-xs text-zinc-500 mt-8">
          Showing high-resolution fitness space imagery. Real Pawar Fitness facility photos can be updated in <code className="text-zinc-400">gymConfig.ts</code>.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Display Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />

            {/* Lightbox Caption */}
            <div className="mt-4 text-center">
              <span className="text-xs uppercase font-extrabold text-[#ff3b30] tracking-wider">
                {filteredItems[selectedImageIndex].category} • {selectedImageIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                {filteredItems[selectedImageIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
