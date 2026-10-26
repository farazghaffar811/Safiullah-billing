import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileCheck2, 
  TrendingUp, 
  Phone,
  Lock
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
    <section id="audit" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-azure-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-mint/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-capsule border-azure-200/80 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Zero Obligation Practice Analysis
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-5">
            Schedule Your Free <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 to-cyan-500 bg-clip-text text-transparent">
              Practice Revenue Audit
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Discover hidden revenue leaks, benchmark your specialty coding against national standards, and learn how EHCS can accelerate your practice cash flow.
          </p>
        </div>

        {/* 2-Column Glass Container: Value Props (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: What's Included in the Audit */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-7 sm:p-9 rounded-3xl glass-panel border-white/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-azure-600 to-cyan-400 p-0.5 shadow-md">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-azure-600">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy">Comprehensive Audit Scope</h3>
                  <p className="text-xs text-slate-500">Delivered within 48 Hours</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-azure-50 text-azure-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy">Aging A/R Recovery Burn-Down</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                      Identification of all collectable 60, 90, and 120+ day aged claims write-off risks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-azure-50 text-azure-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy">Denial Root-Cause Breakdown</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                      Granular CARC/RARC categorization showing exactly where your revenue stalls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-azure-50 text-azure-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy">Specialty Coding &amp; Modifier Audit</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                      Certified AAPC check for under-coding, down-coded E/M visits, and missing surgical modifiers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-azure-50 text-azure-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy">Contracted Fee Schedule Benchmarking</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                      Payer reimbursement comparison against top regional healthcare rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact reassurance box */}
            <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/60 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Prefer a confidential phone conversation?
              </span>
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 text-sm font-bold text-navy hover:text-azure-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-azure-600" />
                <span>Direct Executive Line: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: The Production Glassmorphic Form */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-7 sm:p-9 rounded-3xl glass-panel border-white/80 shadow-[0_20px_50px_rgba(6,27,80,0.08)] bg-white/85"
          >
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
                Confidential Practice Assessment
              </span>
              <h3 className="text-xl font-bold text-navy mt-1">
                Enter Your Practice Specifications
              </h3>
            </div>

            <AuditForm 
              initialSpecialty={initialSpecialty}
              initialVolume={initialVolume}
              initialDenialRate={initialDenialRate}
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
