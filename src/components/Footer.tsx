import React from 'react';
import { gymConfig } from '../config/gymConfig';
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  MessageSquare,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenJoinModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenJoinModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Membership', href: '#membership' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient Red glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff3b30] to-[#ff6b00] flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black tracking-wider text-white uppercase">
                PAWAR <span className="text-[#ff3b30]">FITNESS</span>
              </span>
            </div>

            <p className="text-sm font-semibold text-zinc-300 italic">
              "{gymConfig.business.tagline}"
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Badora and Betul's community fitness hub. Offering premier strength, cardio, and body transformation training starting from just ₹700 per month.
            </p>

            {/* Social Media Placeholder Links */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2.5">
                Connect With Us (Placeholder Links):
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  title="Instagram (Placeholder link)"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-[#ff3b30] border border-white/10 flex items-center justify-center text-zinc-300 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  title="Facebook (Placeholder link)"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-[#ff3b30] border border-white/10 flex items-center justify-center text-zinc-300 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  title="YouTube (Placeholder link)"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-[#ff3b30] border border-white/10 flex items-center justify-center text-zinc-300 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={gymConfig.business.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp Chat"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 flex items-center justify-center text-zinc-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-zinc-400 hover:text-[#ff3b30] transition-colors inline-block py-1 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Gym Location & Details
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-zinc-400">
              <MapPin className="w-4 h-4 text-[#ff3b30] flex-shrink-0 mt-0.5" />
              <span>{gymConfig.business.fullAddress}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-zinc-400">
              <Phone className="w-4 h-4 text-[#ff6b00] flex-shrink-0" />
              <a href={gymConfig.business.telLink} className="hover:text-white transition-colors">
                Phone: {gymConfig.business.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-zinc-400">
              <Mail className="w-4 h-4 text-zinc-500 flex-shrink-0" />
              <span>{gymConfig.business.email}</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenJoinModal}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] transition-all shadow-md shadow-red-600/20"
              >
                Join Pawar Fitness (from ₹700/mo)
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Pawar Fitness. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
