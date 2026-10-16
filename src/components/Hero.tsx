import React from 'react';
import { ArrowRight, Flame, Shield, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { gymConfig } from '../config/gymConfig';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  const scrollToPlans = () => {
    const el = document.getElementById('membership');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#07080b]"
    >
      {/* Background Hero Image with Layered Gradient Masks */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Pawar Fitness Gym Training Floor"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow opacity-35"
          loading="eager"
        />
        {/* Deep fitness ambient gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/80 to-[#07080b]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080b] via-transparent to-[#07080b]" />
        
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff3b30]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#ff6b00]/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Top Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg shadow-red-900/20">
            <Flame className="w-4 h-4 text-[#ff3b30] fill-current animate-bounce" />
            <span>Memberships from ₹700/Month</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs sm:text-sm font-medium backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>Badora, Betul, MP</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white max-w-5xl mx-auto leading-[1.05] drop-shadow-2xl">
          BUILD YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b30] via-[#ff6b00] to-orange-400">
            STRONGEST SELF
          </span>
        </h1>

        {/* Tagline & Supporting text */}
        <p className="mt-4 text-lg sm:text-xl font-bold tracking-wide uppercase text-zinc-300">
          {gymConfig.business.tagline}
        </p>

        <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Premium fitness training in Badora, Betul. Start your transformation with Pawar Fitness.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-base text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff3b30]"
          >
            <span>Join Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToPlans}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-zinc-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            View Membership Plans
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center gap-1.5 p-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#ff3b30]">
              <Flame className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-zinc-200">Heavy Strength Setup</span>
            <span className="text-[11px] text-zinc-500">Power Racks & Dumbbells</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 p-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#ff6b00]">
              <Shield className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-zinc-200">Zero Hidden Costs</span>
            <span className="text-[11px] text-zinc-500">Transparent Pricing</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 p-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-yellow-500">
              <Award className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-zinc-200">All Levels Welcome</span>
            <span className="text-[11px] text-zinc-500">Beginners to Advanced</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 p-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-zinc-200">Hygienic Space</span>
            <span className="text-[11px] text-zinc-500">Sanitized Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
};
