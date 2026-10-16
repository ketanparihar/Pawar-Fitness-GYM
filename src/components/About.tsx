import React from 'react';
import { gymConfig } from '../config/gymConfig';
import {
  Wallet,
  Building2,
  Users2,
  Navigation,
  HeartHandshake,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface AboutProps {
  onOpenJoinModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenJoinModal }) => {
  const whyIcons = [
    <Wallet key="1" className="w-6 h-6 text-[#ff3b30]" />,
    <Building2 key="2" className="w-6 h-6 text-[#ff6b00]" />,
    <Users2 key="3" className="w-6 h-6 text-yellow-500" />,
    <Navigation key="4" className="w-6 h-6 text-emerald-400" />,
    <HeartHandshake key="5" className="w-6 h-6 text-sky-400" />
  ];

  return (
    <section id="about" className="py-24 bg-[#07080b] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff3b30] text-xs font-bold uppercase tracking-widest mb-3">
            About Pawar Fitness
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            MORE THAN A GYM. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b30] to-[#ff6b00]">
              IT'S YOUR FITNESS JOURNEY.
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Two Column Layout: Story + Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Text / Mission */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Empowering Badora & Betul to train harder, live healthier.
            </h3>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              {gymConfig.about.mission}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              At Pawar Fitness, we believe consistency beats intensity every single time. That's why we have built a gym where beginners feel welcomed, advanced lifters find the iron they need, and everyone is supported with transparent pricing starting at just ₹700 per month.
            </p>

            {/* Quick Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "High quality free weights & machinery",
                "Spacious & motivating workout area",
                "Zero aggressive sales tactics",
                "Clean locker & changing spaces",
                "Dedicated cardio & strength sections",
                "Personalized training guidance available"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#ff3b30] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenJoinModal}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] shadow-lg shadow-red-600/30 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop"
                  alt="Pawar Fitness Interior Equipment"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                  <p className="text-white font-extrabold text-sm uppercase">Pawar Fitness Hub</p>
                  <p className="text-zinc-400 text-xs">Badora, Betul, MP – 460001</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-2xl bg-[#121318] border border-red-500/30 shadow-2xl backdrop-blur-md hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff3b30] to-[#ff6b00] flex items-center justify-center text-white font-black text-xl">
                    ₹
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-medium">Starting at just</div>
                    <div className="text-xl font-black text-white">₹700 / Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Pawar Fitness Cards */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Choose Pawar Fitness
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Five clear reasons fitness enthusiasts in Betul train with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {gymConfig.about.whyChoose.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-red-500/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {whyIcons[index]}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff3b30] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-bold text-zinc-500 group-hover:text-zinc-300">
                  <span>0{index + 1}</span>
                  <span className="text-[#ff3b30]">●</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
