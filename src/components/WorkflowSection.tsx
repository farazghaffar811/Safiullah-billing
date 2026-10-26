import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  FileSpreadsheet, 
  Send, 
  CreditCard, 
  RefreshCw, 
  BarChart3, 
  ArrowRight, 
  Clock, 
  CheckCircle2,
  Sparkles,
  Workflow
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/billingData';

interface WorkflowSectionProps {
  onOpenAuditModal: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenAuditModal }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return UserCheck;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'Send': return Send;
      case 'CreditCard': return CreditCard;
      case 'RefreshCw': return RefreshCw;
      case 'BarChart3': return BarChart3;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="workflow" className="py-20 sm:py-28 relative">
      {/* Background soft ambient blur */}
      <div className="absolute top-1/2 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-azure-400/10 via-cyan-300/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-capsule border-azure-200/80 mb-4">
            <Workflow className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Battle-Tested Revenue Engineering
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-5">
            The 6-Step RCM <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 to-cyan-500 bg-clip-text text-transparent">
              Revenue Acceleration Workflow
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A synchronized, airtight lifecycle designed to accelerate cash flow velocity, eliminate denial lag, and maintain audit-proof billing compliance.
          </p>
        </div>

        {/* 6 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WORKFLOW_STEPS.map((stepItem, index) => {
            const IconComponent = getStepIcon(stepItem.iconName);
            const isHovered = activeStep === stepItem.step;

            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(stepItem.step)}
                className={`p-7 rounded-3xl glass-panel transition-all duration-300 relative group flex flex-col justify-between border-white/80 ${
                  isHovered 
                    ? 'bg-white/90 shadow-[0_20px_50px_rgba(35,139,238,0.16)] -translate-y-1.5 border-white' 
                    : 'hover:bg-white/80 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Step badge & SLA */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-azure-600 text-white font-black text-xs flex items-center justify-center shadow-sm shadow-azure-500/30">
                        0{stepItem.step}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
                        Stage 0{stepItem.step}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-azure-600" />
                      <span>{stepItem.sla}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-azure-50 text-azure-600 flex items-center justify-center shrink-0 group-hover:bg-azure-500 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-navy group-hover:text-azure-600 transition-colors leading-snug">
                      {stepItem.title}
                    </h3>
                  </div>

                  {/* Short Desc & Description */}
                  <p className="text-xs font-semibold text-slate-700 mb-2">
                    {stepItem.shortDesc}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {stepItem.description}
                  </p>
                </div>

                {/* Bottom Impact Note */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-mint-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-600">
                    {stepItem.focus}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transition Summary Capsule */}
        <div className="p-6 sm:p-8 rounded-3xl glass-capsule border-white/80 bg-white/75 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-mint-50 text-mint-500 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-navy">7 to 14 Days Seamless Transition</h4>
              <p className="text-xs text-slate-500">
                Zero interruption to existing billing streams. Our team integrates directly with your clearinghouse and EHR login.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenAuditModal}
            className="px-6 py-3 rounded-2xl bg-azure-600 hover:bg-azure-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-azure-500/25 transition-all flex items-center gap-2 shrink-0 active:scale-95"
          >
            <span>Review Transition Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
