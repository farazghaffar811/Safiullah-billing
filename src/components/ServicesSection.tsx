import React, { useState } from 'react';
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
    <section id="services" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3">
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

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SERVICES.map((service) => {
            const IconComponent = getServiceIcon(service.iconName);
            return (
              <div
                id={`service-${service.id}`}
                key={service.id}
                className="p-6 rounded-3xl glass-panel flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-azure-50 text-azure-600 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      {service.badge && (
                        <span className="text-[10px] font-bold text-azure-700 bg-azure-100/70 px-2 py-0.5 rounded-full">
                          {service.badge}
                        </span>
                      )}
                      <span className="text-xs font-bold text-slate-400 font-mono">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-base font-bold text-navy tracking-tight mb-1.5">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Features */}
                  <div className="space-y-1.5 mb-5">
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
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded-full">
                    {service.sla}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-azure-600 hover:text-azure-700 transition-colors focus:outline-none"
                  >
                    <span>Full Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-7 rounded-3xl glass-card-static flex flex-col md:flex-row items-center justify-between gap-5">
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
            className="px-5 py-2.5 rounded-xl bg-azure-600 hover:bg-azure-500 text-white font-bold text-xs shadow-md shadow-azure-600/25 transition-all flex items-center gap-1.5 shrink-0 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Request Practice Proposal</span>
          </button>
        </div>

      </div>

      {/* Expandable Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-navy/60 backdrop-blur-md"
          />

          <div className="relative w-full max-w-xl p-6 sm:p-7 rounded-3xl glass-card-static bg-white/95 border-white shadow-2xl z-10 my-auto">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold text-azure-600 bg-azure-50 px-2 py-0.5 rounded-full">
                Service {selectedService.number} of 10
              </span>
              {selectedService.badge && (
                <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                  {selectedService.badge}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mb-3">
              {selectedService.title}
            </h3>

            <div className="p-3.5 rounded-xl bg-azure-50/70 border border-azure-100 mb-4">
              <p className="text-xs text-slate-700 leading-relaxed">
                {selectedService.fullCopy}
              </p>
            </div>

            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Included Deliverables:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {selectedService.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-1.5 p-2 rounded-lg bg-white/80 border border-slate-200/50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-mint-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 mb-5 text-xs">
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Execution SLA</span>
                <span className="font-bold text-navy">{selectedService.sla}</span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Deliverables</span>
                <span className="font-bold text-navy">{selectedService.deliverables}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-lg text-slate-600 hover:text-navy text-xs font-bold transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedService(null);
                  onOpenAuditModal();
                }}
                className="px-4 py-2 rounded-lg bg-azure-600 hover:bg-azure-500 text-white text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3" />
                <span>Request Audit for This Service</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
