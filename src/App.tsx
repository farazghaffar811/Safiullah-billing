import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KpiStrip } from './components/KpiStrip';
import { PillarsSection } from './components/PillarsSection';
import { RoiCalculator } from './components/RoiCalculator';
import { ServicesSection } from './components/ServicesSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { AuditFormSection } from './components/AuditFormSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { FloatingActions } from './components/FloatingActions';

export const App: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditInitialData, setAuditInitialData] = useState<{
    specialty?: string;
    volume?: number;
    denialRate?: number;
  }>({});

  const handleOpenAuditModal = (data?: { specialty?: string; volume?: number; denialRate?: number }) => {
    if (data) {
      setAuditInitialData(data);
    }
    setIsAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  const handleSpecialtySelected = (specialtyName: string) => {
    handleOpenAuditModal({ specialty: specialtyName });
  };

  const handleRoiDataSubmitted = (roiData: { volume: number; denialRate: number }) => {
    handleOpenAuditModal({ volume: roiData.volume, denialRate: roiData.denialRate });
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between selection:bg-azure-500 selection:text-white">
      {/* Dynamic Island & Capsule Navigation */}
      <Navbar onOpenAuditModal={() => handleOpenAuditModal()} />

      <main className="flex-1">
        {/* Section 2: Hero Section with Live Practice Metrics */}
        <Hero onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* Section 3: Trusted by Physicians & Practice KPI Strip */}
        <KpiStrip />

        {/* Section 4: The 3 Core Pillars of Billing Specialization */}
        <PillarsSection onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* Section 5: Interactive RCM ROI & Revenue Recovery Calculator */}
        <RoiCalculator onOpenAuditModalWithData={handleRoiDataSubmitted} />

        {/* Section 6: Core Services Directory (All 10 Services) */}
        <ServicesSection onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* Section 7: Specialties Directory (All 22 Medical Specialties) */}
        <SpecialtiesSection 
          onSelectSpecialtyForAudit={handleSpecialtySelected}
          onOpenAuditModal={() => handleOpenAuditModal()}
        />

        {/* Section 8: 6-Step RCM Revenue Acceleration Workflow */}
        <WorkflowSection onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* Section 9: Doctor Testimonials */}
        <TestimonialsSection />

        {/* Section 10: Frequently Asked Questions */}
        <FaqSection />

        {/* Section 11: Production Appointment & Practice Audit Form */}
        <AuditFormSection 
          initialSpecialty={auditInitialData.specialty}
          initialVolume={auditInitialData.volume}
          initialDenialRate={auditInitialData.denialRate}
        />
      </main>

      {/* Section 12: Sleek Glass Footer */}
      <Footer onOpenAuditModal={() => handleOpenAuditModal()} />

      {/* Reusable Global Practice Audit Glass Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAuditModal}
        initialSpecialty={auditInitialData.specialty}
        initialVolume={auditInitialData.volume}
        initialDenialRate={auditInitialData.denialRate}
      />

      {/* Floating Quick Action Dial & Audit Capsule */}
      <FloatingActions onOpenAuditModal={() => handleOpenAuditModal()} />
    </div>
  );
};

export default App;
