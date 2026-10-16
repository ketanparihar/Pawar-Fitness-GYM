import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { About } from './components/About';
import { Membership } from './components/Membership';
import { Facilities } from './components/Facilities';
import { Trainers } from './components/Trainers';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { MembershipModal } from './components/MembershipModal';
import { LegalModal } from './components/LegalModals';
import { AdminDrawer } from './components/AdminDrawer';
import { Database } from 'lucide-react';

export const App: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('monthly');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isAdminDrawerOpen, setIsAdminDrawerOpen] = useState(false);

  const handleOpenJoinModal = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    setIsJoinModalOpen(true);
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    setIsJoinModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-[#e5e7eb] font-sans selection:bg-[#ff3b30] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenJoinModal={() => handleOpenJoinModal()} />

      {/* Main Sections */}
      <main>
        <Hero onOpenJoinModal={() => handleOpenJoinModal()} />
        <QuickStats />
        <About onOpenJoinModal={() => handleOpenJoinModal()} />
        <Membership onSelectPlan={handleSelectPlan} />
        <Facilities onOpenJoinModal={() => handleOpenJoinModal()} />
        <Trainers onOpenJoinModal={() => handleOpenJoinModal()} />
        <Gallery />
        <Testimonials />
        <Contact onOpenJoinModal={() => handleOpenJoinModal()} />
        <FAQSection onOpenJoinModal={() => handleOpenJoinModal()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenJoinModal={() => handleOpenJoinModal()}
      />

      {/* Floating Action Buttons */}
      <FloatingContact />

      {/* Interactive Modals */}
      <MembershipModal
        isOpen={isJoinModalOpen}
        initialPlanId={selectedPlanId}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <AdminDrawer
        isOpen={isAdminDrawerOpen}
        onClose={() => setIsAdminDrawerOpen(false)}
      />

      {/* Admin Leads Inspector Pill (Discrete preview tool for gym admins) */}
      <div className="fixed bottom-5 left-5 z-30">
        <button
          onClick={() => setIsAdminDrawerOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 text-xs font-semibold backdrop-blur-md transition-colors"
          title="View Form Inquiries Locally"
        >
          <Database className="w-3.5 h-3.5 text-[#ff3b30]" />
          <span className="hidden sm:inline">Admin Leads</span>
        </button>
      </div>
    </div>
  );
};

export default App;
