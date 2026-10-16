import React from 'react';
import { gymConfig, type Facility } from '../config/gymConfig';
import {
  Dumbbell,
  Activity,
  Flame,
  Zap,
  Shield,
  Maximize,
  Lock,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface FacilitiesProps {
  onOpenJoinModal: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenJoinModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-[#ff3b30]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#ff6b00]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-red-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'Maximize':
        return <Maximize className="w-5 h-5 text-sky-400" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-purple-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <section id="facilities" className="py-24 bg-[#07080b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff3b30] text-xs font-bold uppercase tracking-widest mb-3">
            World-Class Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b30] to-[#ff6b00]">FACILITIES</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Equipped with commercial-grade fitness machinery and designed for maximum workout performance.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] mx-auto mt-4 rounded-full" />
        </div>

        {/* 8 Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gymConfig.facilities.map((fac: Facility) => (
            <div
              key={fac.id}
              className="group relative rounded-3xl overflow-hidden bg-[#111218] border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-red-600/15 flex flex-col justify-between"
            >
              {/* Image with gradient mask */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111218] via-[#111218]/40 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/10">
                    {fac.tag}
                  </span>
                </div>

                {/* Floating Icon */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  {getIcon(fac.icon)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-[#ff3b30] transition-colors mb-2">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {fac.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                  <span>Available to all members</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ff3b30] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-400 mb-4">
            Want to see our equipment and floor in person? You are always welcome to stop by for a tour.
          </p>
          <button
            onClick={onOpenJoinModal}
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
          >
            Inquire About Facility Access
          </button>
        </div>
      </div>
    </section>
  );
};
