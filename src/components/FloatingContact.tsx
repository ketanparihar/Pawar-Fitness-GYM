import React, { useState } from 'react';
import { Phone, MessageSquare, X, ChevronUp } from 'lucide-react';
import { gymConfig } from '../config/gymConfig';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {isOpen ? (
        <div className="flex flex-col gap-2 p-2 rounded-2xl bg-[#121319]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 animate-slide-up">
          <div className="flex items-center justify-between px-2 pt-1 pb-1 border-b border-white/10">
            <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">
              Quick Contact
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
              aria-label="Minimize Quick Contact"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* WhatsApp Button */}
          <a
            href={gymConfig.business.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-extrabold shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
            aria-label="Chat with Pawar Fitness on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>WhatsApp Us</span>
          </a>

          {/* Call Us Button */}
          <a
            href={gymConfig.business.telLink}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] text-white text-xs font-extrabold shadow-lg shadow-red-600/25 transition-all hover:scale-[1.03] active:scale-[0.98]"
            aria-label={`Call Pawar Fitness at ${gymConfig.business.phone}`}
          >
            <Phone className="w-4 h-4" />
            <span>Call Us: {gymConfig.business.phone}</span>
          </a>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] text-white font-bold text-xs shadow-2xl shadow-red-600/40 hover:scale-105 active:scale-95 transition-all"
          aria-label="Open Quick Contact Menu"
        >
          <Phone className="w-4 h-4" />
          <span>Quick Contact</span>
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
