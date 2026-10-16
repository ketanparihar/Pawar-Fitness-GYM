import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, Phone, ChevronRight } from 'lucide-react';
import { gymConfig } from '../config/gymConfig';

interface NavbarProps {
  onOpenJoinModal: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'membership', 'facilities', 'trainers', 'gallery', 'contact', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Membership', href: '#membership', id: 'membership' },
    { name: 'Facilities', href: '#facilities', id: 'facilities' },
    { name: 'Trainers', href: '#trainers', id: 'trainers' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07080b]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#07080b]/90 via-[#07080b]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#ff3b30] rounded-lg p-1"
              aria-label="Pawar Fitness Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff3b30] to-[#ff6b00] flex items-center justify-center text-white shadow-lg shadow-red-500/30 group-hover:scale-105 transition-transform duration-300">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase font-sans">
                  PAWAR <span className="text-[#ff3b30]">FITNESS</span>
                </span>
                <span className="text-[10px] tracking-widest text-zinc-400 font-semibold uppercase -mt-1 hidden sm:block">
                  Badora • Betul
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/10 shadow-sm'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={gymConfig.business.telLink}
                className="hidden xl:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
                title={`Call ${gymConfig.business.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#ff3b30]" />
                <span>{gymConfig.business.phoneDisplay}</span>
              </a>

              <button
                onClick={() => onOpenJoinModal()}
                className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2 focus:ring-offset-[#07080b]"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Join Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenJoinModal()}
                className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00]"
              >
                Join
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 border border-white/5 focus:outline-none focus:ring-2 focus:ring-[#ff3b30]"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out panel */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#0f1015] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl z-10 animate-fade-in">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff3b30] to-[#ff6b00] flex items-center justify-center text-white">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-white text-lg tracking-wider">PAWAR FITNESS</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-3 rounded-xl font-medium text-base transition-colors flex items-center justify-between ${
                      activeSection === link.id
                        ? 'bg-gradient-to-r from-red-600/20 to-transparent text-white border-l-4 border-[#ff3b30]'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={gymConfig.business.telLink}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#ff3b30]" />
                <span>Call {gymConfig.business.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
              >
                <span>Join Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-zinc-500 pt-1">
                📍 Badora, Betul, MP – 460001
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
