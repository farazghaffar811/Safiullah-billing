import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileCheck2, 
  Activity, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Headphones, 
  Clock, 
  CheckCircle2, 
  Users, 
  Globe,
  ArrowRight,
  X,
  Sparkles,
  ChevronRight,
  Layers
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/billingData';

interface ServicesSectionProps {
  onOpenAuditModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAuditModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck2': return FileCheck2;
      case 'Activity': return Activity;
      case 'ShieldCheck': return ShieldCheck;
      case 'Award': return Award;
      case 'TrendingUp': return TrendingUp;
      case 'Headphones': return Headphones;
      case 'Clock': return Clock;
      case 'CheckCircle2': return CheckCircle2;
      case 'Users': return Users;
      case 'Globe': return Globe;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      {/* Background soft ambient blur */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-azure-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-capsule border-azure-200/80 mb-4">
            <Layers className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Complete Billing Architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-5">
            Core Services <span className="bg-gradient-to-r from-azure-600 to-cyan-500 bg-clip-text text-transparent">Directory</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            From pre-visit eligibility screening to aggressive aging A/R recovery, explore our 10 specialized revenue cycle solutions engineered for practice growth.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service, index) => {
            const IconComponent = getServiceIcon(service.iconName);
            return (
              <motion.div
                id={`service-${service.id}`}
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="p-7 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between border-white/80 relative group"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-azure-50 group-hover:bg-azure-500 text-azure-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      {service.badge && (
                        <span className="text-[10px] font-bold text-azure-700 bg-azure-100/80 px-2 py-0.5 rounded-full">
                          {service.badge}
                        </span>
                      )}
                      <span className="text-sm font-bold text-slate-400 font-mono">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-navy group-hover:text-azure-600 transition-colors tracking-tight mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checkmarks (First 3) */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mint-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-600 leading-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer with SLA & Detail Trigger */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-full">
                    {service.sla}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-azure-600 hover:text-azure-700 group/btn transition-colors focus:outline-none"
                  >
                    <span>Full Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Bottom CTA banner */}
        <div className="p-8 sm:p-10 rounded-3xl glass-capsule border-white/90 bg-gradient-to-r from-white/90 via-azure-50/50 to-white/90 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy mb-1">
              Need a Customized Billing Combination?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We bundle specific services (e.g. credentialing + A/R clean-up + coding) to match your practice's exact bottlenecks.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-azure-600 to-azure-500 text-white font-bold text-sm shadow-md shadow-azure-500/25 hover:shadow-azure-500/40 transition-all flex items-center gap-2 shrink-0 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Request Practice Proposal</span>
          </button>
        </div>

      </div>

      {/* Expandable Service Detail Drawer / Modal (Apple VisionOS Glass) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-navy/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl p-7 sm:p-9 rounded-3xl glass-panel bg-white/95 border-white shadow-2xl z-10 my-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Number & Category */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-azure-600 bg-azure-50 px-2.5 py-1 rounded-full border border-azure-100">
                  Service {selectedService.number} of 10
                </span>
                {selectedService.badge && (
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                    {selectedService.badge}
                  </span>
                )}
              </div>

              {/* Service Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-4">
                {selectedService.title}
              </h3>

              {/* Full Copy Specification */}
              <div className="p-4 rounded-2xl bg-azure-50/60 border border-azure-100/80 mb-6">
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {selectedService.fullCopy}
                </p>
              </div>

              {/* All Features Grid */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Included Deliverables &amp; Protocols:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-white/70 border border-slate-200/50">
                    <CheckCircle2 className="w-4 h-4 text-mint-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-tight">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* SLA & Reporting Meta */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 mb-6">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Execution SLA
                  </span>
                  <span className="text-xs font-bold text-navy">
                    {selectedService.sla}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Deliverables
                  </span>
                  <span className="text-xs font-bold text-navy">
                    {selectedService.deliverables}
                  </span>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-slate-600 hover:text-navy text-xs font-bold transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService(null);
                    onOpenAuditModal();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-azure-600 hover:bg-azure-500 text-white text-xs font-bold shadow-md shadow-azure-500/30 transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Request Audit for This Service</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
