import React from 'react';
import { gymConfig, type MembershipPlan } from '../config/gymConfig';
import { Check, Sparkles, Flame, Shield, ArrowRight } from 'lucide-react';

interface MembershipProps {
  onSelectPlan: (planId: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  const plans = gymConfig.membershipPlans;

  return (
    <section id="membership" className="py-24 bg-[#0a0b10] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff3b30] text-xs font-bold uppercase tracking-widest mb-3">
            Membership Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b30] to-[#ff6b00]">MEMBERSHIP</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Transparent, zero-hidden-fee fitness plans designed for long-term health and strength.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan: MembershipPlan) => {
            const isAnnual = plan.id === 'annual';
            const isQuarterly = plan.id === 'quarterly';

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isAnnual
                    ? 'bg-gradient-to-b from-[#1a141a] via-[#141016] to-[#0d0a10] border-2 border-[#ff3b30] shadow-2xl shadow-red-600/20 lg:-translate-y-2'
                    : 'bg-[#121319] border border-white/10 hover:border-white/25 hover:-translate-y-1 shadow-lg'
                }`}
              >
                {/* Badges */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md ${
                        isAnnual
                          ? 'bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] text-white animate-pulse'
                          : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="flex items-center justify-between mt-2">
                    <h3 className="text-xl font-black text-white tracking-wide uppercase">
                      {plan.name}
                    </h3>
                    {isAnnual ? (
                      <Flame className="w-5 h-5 text-[#ff3b30] fill-current" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-zinc-500" />
                    )}
                  </div>

                  <p className="text-xs text-zinc-400 mt-1 min-h-[18px]">
                    {plan.savingsNote || 'Standard access'}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#ff3b30]">₹</span>
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-semibold text-zinc-400 ml-1">
                        / {plan.periodText}
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-[11px] text-emerald-400 font-bold mt-2 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Effective only ₹500 / month
                      </p>
                    )}
                    {isQuarterly && (
                      <p className="text-[11px] text-emerald-400 font-bold mt-2 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Effective only ₹600 / month
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs uppercase tracking-wider font-bold text-zinc-400">
                      What's Included:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              isAnnual
                                ? 'bg-red-500/20 text-[#ff3b30]'
                                : 'bg-white/10 text-zinc-300'
                            }`}
                          >
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-sm transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff3b30] ${
                      isAnnual
                        ? 'bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] text-white shadow-lg shadow-red-600/30 hover:scale-[1.02]'
                        : 'bg-white/10 hover:bg-[#ff3b30] text-white hover:text-white border border-white/10 hover:border-transparent'
                    }`}
                  >
                    <span>{isAnnual ? 'Claim Best Value Plan' : 'Join Now'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-center text-zinc-500 mt-2">
                    Instant registration • No upfront joining fee
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-[#ff3b30] flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Need custom guidance or a free gym tour?</p>
              <p className="text-xs text-zinc-400">Visit our Badora facility or call us directly at {gymConfig.business.phone}.</p>
            </div>
          </div>
          <a
            href={gymConfig.business.telLink}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/10 flex-shrink-0 transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};
