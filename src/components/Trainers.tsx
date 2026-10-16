import React from 'react';
import { gymConfig, type Trainer } from '../config/gymConfig';
import { Award, Info, ChevronRight, Dumbbell } from 'lucide-react';

interface TrainersProps {
  onOpenJoinModal: () => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="trainers" className="py-24 bg-[#0a0b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff3b30] text-xs font-bold uppercase tracking-widest mb-3">
            Expert Coaching
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b30] to-[#ff6b00]">TRAINERS</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Passionate coaching focused on safe lifting mechanics, consistency, and noticeable results.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Placeholder Transparency Notice */}
        <div className="max-w-2xl mx-auto mb-12 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-amber-300 text-xs">
          <Info className="w-4 h-4 flex-shrink-0 text-amber-400" />
          <span>
            <strong>Note for Gym Administration:</strong> The trainer profiles below are currently illustrative sample placeholders and can be replaced with real Pawar Fitness trainers anytime in <code className="bg-black/40 px-1 py-0.5 rounded text-amber-200">src/config/gymConfig.ts</code>.
          </span>
        </div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gymConfig.trainers.map((trainer: Trainer) => (
            <div
              key={trainer.id}
              className="group relative rounded-3xl overflow-hidden bg-[#111218] border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111218] via-[#111218]/40 to-transparent" />

                {/* Placeholder Marker Tag */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/75 text-amber-300 border border-amber-400/40 backdrop-blur-md">
                    Sample Coach
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b30] flex items-center gap-1.5 mb-1">
                    <Award className="w-3.5 h-3.5" />
                    {trainer.specialization}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {trainer.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {trainer.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5 font-medium">
                    <Dumbbell className="w-3.5 h-3.5 text-[#ff3b30]" />
                    Pawar Fitness Coach
                  </span>

                  <button
                    onClick={onOpenJoinModal}
                    className="text-xs font-bold text-white hover:text-[#ff3b30] flex items-center gap-1 transition-colors group/btn"
                  >
                    <span>Train With Us</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
