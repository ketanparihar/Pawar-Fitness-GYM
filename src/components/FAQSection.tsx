import React, { useState } from 'react';
import { gymConfig, type FAQItem } from '../config/gymConfig';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenJoinModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenJoinModal }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0b10] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff3b30] text-xs font-bold uppercase tracking-widest mb-3">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            FREQUENTLY ASKED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b30] to-[#ff6b00]">QUESTIONS</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Everything you need to know about memberships, facilities, and joining Pawar Fitness.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {gymConfig.faqs.map((faq: FAQItem, index: number) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121319] border-red-500/40 shadow-xl shadow-red-950/20'
                    : 'bg-[#0f1015] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff3b30]/50"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                        isOpen
                          ? 'bg-red-500/20 text-[#ff3b30]'
                          : 'bg-white/5 text-zinc-500'
                      }`}
                    >
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-red-500/20 text-[#ff3b30]'
                        : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/5 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for more questions */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a question not listed here?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Call us directly or send a quick message on WhatsApp anytime.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={gymConfig.business.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={onOpenJoinModal}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] transition-colors"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
