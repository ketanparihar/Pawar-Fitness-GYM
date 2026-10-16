import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Dumbbell, Calendar, User, Phone, Mail, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { gymConfig } from '../config/gymConfig';
import { saveMembershipRequest } from '../utils/storage';

interface MembershipModalProps {
  isOpen: boolean;
  initialPlanId?: string;
  onClose: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  initialPlanId,
  onClose
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    age: '',
    gender: 'Male',
    membershipPlan: 'monthly',
    fitnessGoal: 'Muscle Building & Strength',
    startDate: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{ id: string; message: string } | null>(null);

  // Sync plan when opened
  useEffect(() => {
    if (initialPlanId) {
      setFormData((prev) => ({ ...prev, membershipPlan: initialPlanId }));
    }
  }, [initialPlanId, isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Set default start date to today
  useEffect(() => {
    if (!formData.startDate) {
      const today = new Date().toISOString().split('T')[0];
      setFormData((prev) => ({ ...prev, startDate: today }));
    }
  }, []);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const ageNum = parseInt(formData.age, 10);
    if (!formData.age || isNaN(ageNum) || ageNum < 14 || ageNum > 85) {
      newErrors.age = 'Please enter a valid age between 14 and 85.';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select your gender.';
    }

    if (!formData.membershipPlan) {
      newErrors.membershipPlan = 'Please select a membership plan.';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Please select your preferred start date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await saveMembershipRequest({
        fullName: formData.fullName.trim(),
        mobile: formData.mobile.trim(),
        email: formData.email.trim(),
        age: formData.age.trim(),
        gender: formData.gender,
        membershipPlan: formData.membershipPlan,
        fitnessGoal: formData.fitnessGoal,
        startDate: formData.startDate,
        message: formData.message.trim()
      });

      setIsSuccess(true);
      setSuccessInfo(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setSuccessInfo(null);
    setErrors({});
    onClose();
  };

  const planOptions = [
    { id: 'monthly', label: 'Monthly – ₹700' },
    { id: 'quarterly', label: 'Quarterly – ₹1,800' },
    { id: 'half-yearly', label: 'Half-Yearly – ₹3,500' },
    { id: 'annual', label: 'Annual – ₹6,000 (Best Value)' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#101116] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 id="modal-title" className="text-lg font-black tracking-wide uppercase">
                Join Pawar Fitness
              </h2>
              <p className="text-[11px] text-white/80 font-medium">
                Badora, Betul • Start Your Transformation
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black text-white">
                Request Submitted Successfully!
              </h3>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-lg mx-auto text-left space-y-2">
                <p className="text-emerald-400 font-bold text-center text-sm sm:text-base">
                  {successInfo?.message || 'Thank you for choosing Pawar Fitness! Our team will contact you shortly.'}
                </p>
                <div className="pt-2 border-t border-white/10 text-xs text-zinc-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Reference ID:</span>
                    <span className="font-mono text-zinc-200">{successInfo?.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selected Plan:</span>
                    <span className="font-semibold text-white capitalize">{formData.membershipPlan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact Number:</span>
                    <span className="text-white">{formData.mobile}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/91${gymConfig.business.phone}?text=${encodeURIComponent(
                    `Hello Pawar Fitness! I just submitted a membership request (Ref: ${successInfo?.id}) for the ${formData.membershipPlan} plan. My name is ${formData.fullName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20"
                >
                  <Sparkles className="w-4 h-4" />
                  Instant WhatsApp Connect
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Full Name <span className="text-[#ff3b30]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Pawar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border ${
                        errors.fullName ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff3b30] transition-colors`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Mobile Number <span className="text-[#ff3b30]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      maxLength={12}
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border ${
                        errors.mobile ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff3b30] transition-colors`}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.mobile}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Email */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Email Address <span className="text-[#ff3b30]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff3b30] transition-colors`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Age */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Age <span className="text-[#ff3b30]">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 24"
                    min={14}
                    max={85}
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white/5 border ${
                      errors.age ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff3b30] transition-colors`}
                  />
                  {errors.age && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.age}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Gender */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Gender <span className="text-[#ff3b30]">*</span>
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181920] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff3b30]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other / Prefer not to say</option>
                  </select>
                </div>

                {/* Select Membership Plan */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Select Membership Plan <span className="text-[#ff3b30]">*</span>
                  </label>
                  <select
                    value={formData.membershipPlan}
                    onChange={(e) => setFormData({ ...formData, membershipPlan: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181920] border border-[#ff3b30]/50 text-white text-sm focus:outline-none focus:border-[#ff3b30] font-semibold"
                  >
                    {planOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Fitness Goal */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={formData.fitnessGoal}
                    onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181920] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff3b30]"
                  >
                    <option value="Muscle Building & Strength">Muscle Building & Strength</option>
                    <option value="Fat Loss & Toning">Fat Loss & Toning</option>
                    <option value="General Health & Stamina">General Health & Stamina</option>
                    <option value="Athletic Conditioning">Athletic Conditioning</option>
                    <option value="Beginner Kickstart">Beginner Kickstart</option>
                  </select>
                </div>

                {/* Preferred Start Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Preferred Start Date <span className="text-[#ff3b30]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff3b30]"
                    />
                  </div>
                  {errors.startDate && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.startDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Message / Special Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any previous injury, timing preference, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ff3b30]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <span>Submit Membership Request</span>
                  )}
                </button>

                <p className="text-[11px] text-center text-zinc-500 mt-2">
                  🔒 We respect your privacy. No spam. You will be contacted via call or WhatsApp.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
