import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  X,
  Sparkles,
  ChevronRight,
  Layers
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/billingData';

interface ServicesSectionProps {
  onOpenAuditModal: () => void;
}

const SERVICE_IMAGES: Record<string, string> = {
  'medical-billing-coding': '/images/service-billing-coding.png',
  'rcm': '/images/service-rcm.png',
  'eligibility-verification': '/images/service-eligibility.png',
  'credentialing-enrollment': '/images/service-credentialing.png',
  'denial-management': '/images/service-denial.png',
  'virtual-assistant': '/images/service-assistant.png',
  'ar-cleanup': '/images/service-ar.png',
  'prior-authorization': '/images/service-prior-auth.png',
  'patient-helpdesk': '/images/doctor-male-hero.png',
  'digital-solutions': '/images/doctor-workplace.avif',
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAuditModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

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
    <section id="services" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-glass-pill mb-3">
            <Layers className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Complete Billing Architecture
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-3">
            Core Services <span className="bg-gradient-to-r from-azure-600 to-cyan-500 bg-clip-text text-transparent">Directory</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            From pre-visit eligibility screening to aggressive aging A/R recovery, explore our 10 specialized revenue cycle solutions engineered for practice growth.
          </p>
        </div>

        {/* 10 Services Floating Spatial Clay Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SERVICES.map((service) => {
            const IconComponent = getServiceIcon(service.iconName);
            const serviceImg = SERVICE_IMAGES[service.id];
            return (
              <div
                id={`service-${service.id}`}
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="p-6 rounded-3xl spatial-card flex flex-col justify-between cursor-pointer group hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Icon/Image & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl spatial-icon flex items-center justify-center text-azure-600 shadow-xs relative overflow-hidden bg-white/80 p-1">
                        {serviceImg ? (
                          <img 
                            src={serviceImg} 
                            alt={service.title} 
                            className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <IconComponent className="w-5 h-5" />
                        )}
                      </div>
                      <span className="text-xs font-bold text-slate-400 font-mono spatial-pill px-2.5 py-0.5 rounded-full">
                        #{service.number}
                      </span>
                    </div>

                    {service.badge && (
                      <span className="text-[10px] font-bold text-azure-700 spatial-pill px-2.5 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-base font-bold text-navy tracking-tight mb-1.5 group-hover:text-azure-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Features in Recessed Spatial Inset Tray */}
                  <div className="space-y-1.5 mb-5 p-3 rounded-2xl spatial-inset">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mint-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-600 leading-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-600 spatial-pill px-2.5 py-0.5 rounded-full">
                    {service.sla}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-azure-600 hover:text-azure-700 spatial-button px-3 py-1.5 rounded-xl transition-all cursor-pointer focus:outline-none"
                  >
                    <span>Full Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Tactile Spatial Stage Extrusion */}
        <div className="p-6 sm:p-7 rounded-3xl spatial-stage flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-lg font-bold text-navy mb-1">
              Need a Customized Billing Combination?
            </h3>
            <p className="text-xs text-slate-600">
              We bundle specific services (e.g. credentialing + A/R clean-up + coding) to match your practice's exact bottlenecks.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="px-5 py-2.5 rounded-xl bg-azure-600 hover:bg-azure-500 text-white font-bold text-xs shadow-md shadow-azure-600/30 transition-all flex items-center gap-1.5 shrink-0 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Request Practice Proposal</span>
          </button>
        </div>

      </div>

      {/* Expandable Service Detail Modal with Smooth Backdrop Blur Transition */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-navy/60 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="relative w-full max-w-xl p-6 sm:p-7 rounded-3xl spatial-stage bg-white/95 border-white shadow-2xl z-10 my-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full spatial-button text-slate-400 hover:text-navy transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header with Graphic Banner */}
              <div className="flex items-center gap-4 mb-4 p-3 rounded-2xl spatial-inset bg-gradient-to-r from-azure-50/70 to-white/80">
                {SERVICE_IMAGES[selectedService.id] && (
                  <div className="w-16 h-16 rounded-2xl spatial-icon p-2 bg-white/95 shrink-0 flex items-center justify-center shadow-sm">
                    <img 
                      src={SERVICE_IMAGES[selectedService.id]} 
                      alt={selectedService.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-azure-600 spatial-pill px-2.5 py-0.5 rounded-full">
                      Service {selectedService.number} of 10
                    </span>
                    {selectedService.badge && (
                      <span className="text-[10px] font-semibold text-slate-600 spatial-pill px-2.5 py-0.5 rounded-full">
                        {selectedService.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl spatial-inset mb-4">
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {selectedService.fullCopy}
                </p>
              </div>

              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Included Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 p-2 rounded-xl spatial-pill">
                    <CheckCircle2 className="w-3.5 h-3.5 text-mint-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl spatial-inset mb-5 text-xs">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">Execution SLA</span>
                  <span className="font-bold text-navy">{selectedService.sla}</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">Deliverables</span>
                  <span className="font-bold text-navy">{selectedService.deliverables}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-200/50">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-xl spatial-button text-slate-600 hover:text-navy text-xs font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService(null);
                    onOpenAuditModal();
                  }}
                  className="px-4 py-2 rounded-xl bg-azure-600 hover:bg-azure-500 text-white text-xs font-bold shadow-md shadow-azure-600/30 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3" />
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