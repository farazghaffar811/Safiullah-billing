import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  FileCheck2, 
  Phone
} from 'lucide-react';
import { AuditForm } from './AuditForm';
import { COMPANY_INFO } from '../data/billingData';

interface AuditFormSectionProps {
  initialSpecialty?: string;
  initialVolume?: number;
  initialDenialRate?: number;
}

export const AuditFormSection: React.FC<AuditFormSectionProps> = ({
  initialSpecialty,
  initialVolume,
  initialDenialRate
}) => {
  return (
    <section id="audit" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3">
            <Sparkles className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Zero Obligation Practice Analysis
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-3">
            Schedule Your Free <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 to-cyan-500 bg-clip-text text-transparent">
              Practice Revenue Audit
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Discover hidden revenue leaks, benchmark your specialty coding against national standards, and learn how EHCS can accelerate your cash flow.
          </p>
        </div>

        {/* 2-Column VisionOS Glass Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Scope Card */}
          <div className="lg:col-span-5 p-6 rounded-3xl glass-card-static border-white/85 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100/80">
                <div className="w-10 h-10 rounded-2xl bg-azure-50 text-azure-600 flex items-center justify-center shadow-xs">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy">Audit Scope</h3>
                  <p className="text-[10px] text-slate-500 font-medium">Delivered within 48 Hours</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 p-2 rounded-2xl glass-subcard">
                  <CheckCircle2 className="w-4 h-4 text-mint-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">Aging A/R Recovery Burn-Down</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Identification of all collectable 60, 90, and 120+ day aged claims write-off risks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-2xl glass-subcard">
                  <CheckCircle2 className="w-4 h-4 text-mint-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">Denial Root-Cause Breakdown</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Granular CARC/RARC categorization showing exactly where your revenue stalls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-2xl glass-subcard">
                  <CheckCircle2 className="w-4 h-4 text-mint-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">Specialty Coding &amp; Modifier Audit</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Certified AAPC check for under-coding, down-coded E/M visits, and missing modifiers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-2xl glass-subcard">
                  <CheckCircle2 className="w-4 h-4 text-mint-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">Fee Schedule Benchmarking</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Payer reimbursement comparison against top regional healthcare rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl glass-pill">
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">
                Prefer a confidential phone consultation?
              </span>
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-1.5 text-xs font-bold text-navy hover:text-azure-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-azure-600" />
                <span>Executive Line: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Glassmorphic Production Form */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl glass-card-static border-white/85 shadow-lg">
            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-azure-600">
                Confidential Assessment
              </span>
              <h3 className="text-base font-bold text-navy mt-0.5">
                Enter Practice Specifications
              </h3>
            </div>

            <AuditForm 
              initialSpecialty={initialSpecialty}
              initialVolume={initialVolume}
              initialDenialRate={initialDenialRate}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
