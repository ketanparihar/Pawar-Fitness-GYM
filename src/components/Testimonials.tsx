import React, { useState, useEffect, useRef } from 'react';
import { gymConfig } from '../config/gymConfig';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonials = gymConfig.testimonials;

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0a0b10] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff3b30] text-xs font-bold uppercase tracking-widest mb-3">
            Member Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            WHAT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b30] to-[#ff6b00]">MEMBERS SAY</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Real feedback from individuals transforming their fitness right here in Badora, Betul.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Active Card */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#13141a] to-[#0e0f14] border border-white/10 shadow-2xl overflow-hidden transition-all duration-500">
            {/* Giant Background Quote Icon */}
            <Quote className="absolute -right-4 -bottom-4 w-40 h-40 text-white/[0.03] pointer-events-none" />

            <div className="flex flex-col items-center text-center">
              {/* 5 Gold Stars */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-2xl text-zinc-200 font-medium leading-relaxed italic max-w-2xl">
                "{testimonials[currentIndex].review}"
              </p>

              {/* Member Meta */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff3b30] to-[#ff6b00] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-red-600/30">
                  {testimonials[currentIndex].avatarText}
                </div>
                <div className="text-left">
                  <h4 className="text-base font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-medium">
                    {testimonials[currentIndex].role} • Badora, Betul
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === dotIdx
                      ? 'w-8 bg-gradient-to-r from-[#ff3b30] to-[#ff6b00]'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
