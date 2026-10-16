import React, { useState } from 'react';
import { gymConfig } from '../config/gymConfig';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  Navigation,
  CheckCircle,
  AlertCircle,
  Loader2,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { saveContactMessage } from '../utils/storage';

interface ContactProps {
  onOpenJoinModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenJoinModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      errs.mobile = 'Please provide a valid 10-digit mobile number.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 6) {
      errs.message = 'Please enter a message (at least 6 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await saveContactMessage({
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim()
      });

      setIsSuccess(true);
      setSuccessMsg(res.message);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#07080b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff3b30] text-xs font-bold uppercase tracking-widest mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b30] to-[#ff6b00]">PAWAR FITNESS</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Have questions about memberships, timing, or equipment? Reach out today.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Address */}
          <div className="p-6 rounded-3xl bg-[#111218] border border-white/10 flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-[#ff3b30] flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Gym Address</h3>
                <p className="text-sm text-zinc-300">
                  {gymConfig.business.name}
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  {gymConfig.business.fullAddress}
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href={gymConfig.business.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#ff3b30] hover:text-[#ff6b00] flex items-center gap-1.5 transition-colors"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone & Call */}
          <div className="p-6 rounded-3xl bg-[#111218] border border-white/10 flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-[#ff6b00] flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Call Pawar Fitness</h3>
                <p className="text-lg font-black text-white">
                  {gymConfig.business.phoneDisplay}
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Starting from <strong className="text-white">₹700 / month</strong>
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
              <a
                href={gymConfig.business.telLink}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] transition-all flex items-center gap-1.5 shadow-md shadow-red-600/20"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <a
                href={gymConfig.business.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Timings */}
          <div className="p-6 rounded-3xl bg-[#111218] border border-white/10 flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Gym Operating Hours</h3>
                <div className="text-xs text-zinc-300 space-y-1">
                  <div className="flex justify-between gap-2">
                    <span className="text-zinc-400">Mon - Fri:</span>
                    <span className="font-semibold text-white">{gymConfig.business.operatingHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-zinc-400">Saturday:</span>
                    <span className="font-semibold text-white">{gymConfig.business.operatingHours.saturday}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-zinc-400">Sunday:</span>
                    <span className="font-semibold text-white">{gymConfig.business.operatingHours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5">
              <button
                onClick={onOpenJoinModal}
                className="text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Join Pawar Fitness today</span>
                <span className="text-[#ff3b30]">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column: Contact Form + Google Maps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#111218] border border-white/10 p-6 sm:p-8 shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Fill in your details and our team will get in touch with you shortly.
              </p>
            </div>

            {isSuccess && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Message Sent Successfully!</p>
                  <p className="text-xs text-emerald-200 mt-0.5">{successMsg}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Your Name <span className="text-[#ff3b30]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Amit Pawar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff3b30]`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Mobile Number <span className="text-[#ff3b30]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    maxLength={12}
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border ${
                      errors.mobile ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff3b30]`}
                  />
                  {errors.mobile && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.mobile}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Email Address <span className="text-[#ff3b30]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff3b30]`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Subject <span className="text-[#ff3b30]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Monthly Fee inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border ${
                      errors.subject ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff3b30]`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Message <span className="text-[#ff3b30]">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you reach your fitness goals?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff3b30]`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Google Maps / Location Section */}
          <div className="lg:col-span-5 rounded-3xl bg-[#111218] border border-white/10 p-6 sm:p-8 shadow-xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff3b30] text-xs font-bold uppercase tracking-widest mb-2">
                Location
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Find Pawar Fitness
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Located in the prime vicinity of Badora, Betul, Madhya Pradesh – 460001.
              </p>
            </div>

            {/* Maps Interactive Preview Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64 bg-[#0a0a0e] group">
              <iframe
                title="Pawar Fitness Location Map Search"
                src="https://maps.google.com/maps?q=Badora%2C%20Betul%2C%20Madhya%20Pradesh%20460001&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale contrast-125 opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />

              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ff3b30]" />
                  <span className="text-xs font-bold text-white">Badora, Betul – 460001</span>
                </div>
                <a
                  href={gymConfig.business.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#ff3b30] hover:text-[#ff6b00] underline"
                >
                  Full View
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3">
              <a
                href={gymConfig.business.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#ff3b30]" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={onOpenJoinModal}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] transition-all flex items-center justify-center gap-2 shadow-md shadow-red-600/20"
              >
                <span>Join Pawar Fitness Now</span>
              </button>
            </div>

            <p className="text-[11px] text-zinc-500 text-center">
              📍 Google Maps search query verified for Badora, Betul, Madhya Pradesh – 460001.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
