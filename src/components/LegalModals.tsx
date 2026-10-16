import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { gymConfig } from '../config/gymConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && type) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-[#111218] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#181920] to-[#121319] border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center text-[#ff3b30]">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-lg font-black uppercase text-white">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h2>
              <p className="text-xs text-zinc-400">
                Pawar Fitness • Badora, Betul, Madhya Pradesh
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-sm text-zinc-300 leading-relaxed">
          {type === 'privacy' ? (
            /* Privacy Policy Content */
            <>
              <div>
                <h3 className="text-base font-bold text-white mb-2">1. Overview</h3>
                <p>
                  At Pawar Fitness ("we", "our", or "the Gym"), located in Badora, Betul, Madhya Pradesh – 460001, India, we value your trust and are committed to protecting the personal information you share with us through our website and enrollment channels.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">2. Information We Collect</h3>
                <p>When you register for a membership or submit an enquiry, we collect:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                  <li><strong>Contact Details:</strong> Full name, telephone/mobile number, and email address.</li>
                  <li><strong>Demographics:</strong> Age and gender to facilitate appropriate coaching recommendations.</li>
                  <li><strong>Fitness Preferences:</strong> Chosen membership plan (Monthly, Quarterly, Half-Yearly, Annual), primary fitness goals, and preferred workout start dates.</li>
                  <li><strong>Communications:</strong> Any specific notes, questions, or medical considerations voluntarily provided in inquiry messages.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">3. How We Use Your Information</h3>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>To contact you regarding your membership inquiry, gym tour, or schedule orientation.</li>
                  <li>To process your gym registration and membership records accurately.</li>
                  <li>To send essential gym operational notices (e.g. holiday timings, membership renewal reminders).</li>
                  <li>To improve our fitness equipment, facilities, and member customer service.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">4. Data Sharing & Security</h3>
                <p>
                  We do not sell, rent, or trade your personal data to third parties. Your details are accessible only to authorized Pawar Fitness management for member support and administrative purposes.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">5. Contact Us</h3>
                <p>
                  If you have questions about our privacy practices, you can contact us at Badora, Betul, Madhya Pradesh – 460001, or phone: {gymConfig.business.phoneDisplay}.
                </p>
              </div>
            </>
          ) : (
            /* Terms & Conditions Content */
            <>
              <div>
                <h3 className="text-base font-bold text-white mb-2">1. Acceptance of Terms</h3>
                <p>
                  By enrolling in Pawar Fitness, accessing our facilities at Badora, Betul, or submitting requests on this website, you agree to comply with and be bound by the following Terms and Conditions.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">2. Membership Plans & Payment</h3>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li><strong>Fee Schedule:</strong> Monthly (₹700), Quarterly (₹1,800), Half-Yearly (₹3,500), and Annual (₹6,000).</li>
                  <li><strong>Due Dates:</strong> Membership fees must be paid in advance prior to accessing the gym floor.</li>
                  <li><strong>Non-Transferability:</strong> Memberships are personal to the enrolled member and cannot be transferred to another person without prior written approval.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">3. Gym Rules & Responsible Use</h3>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li><strong>Footwear & Attire:</strong> Clean indoor athletic footwear and appropriate workout clothing must be worn at all times.</li>
                  <li><strong>Equipment Courtesy:</strong> Members must re-rack all free weights, dumbbells, and plates after completing their sets. Wipe down equipment after heavy sweating.</li>
                  <li><strong>Safety First:</strong> Use safety collars on barbells and avoid dropping dumbbells carelessly on non-deadlift areas.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">4. Health & Medical Clearance</h3>
                <p>
                  You acknowledge that engaging in physical exercise carries inherent physical risk. Members certify that they are in good health and are advised to consult a medical doctor before starting any intense weightlifting or cardiovascular regimen.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">5. Cancellations & Refunds</h3>
                <p>
                  Memberships are non-refundable once activated, except under special circumstances evaluated at the sole discretion of Pawar Fitness management in Badora, Betul.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#181920] px-6 py-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#ff3b30] to-[#ff6b00] hover:from-[#e03026] hover:to-[#ea580c] transition-all"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
