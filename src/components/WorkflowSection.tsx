import React, { useState } from 'react';
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
    <section id="workflow" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-glass-pill mb-3">
            <Workflow className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Battle-Tested Revenue Engineering
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-3">
            The 6-Step RCM <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 to-cyan-500 bg-clip-text text-transparent">
              Revenue Acceleration Workflow
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            A synchronized, airtight lifecycle designed to accelerate cash flow velocity, eliminate denial lag, and maintain audit-proof billing compliance.
          </p>
        </div>

        {/* 6 Steps Timeline Grid with Raised Spatial Clay Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {WORKFLOW_STEPS.map((stepItem) => {
            const IconComponent = getStepIcon(stepItem.iconName);
            const isSelected = activeStep === stepItem.step;

            return (
              <div
                key={stepItem.step}
                onMouseEnter={() => setActiveStep(stepItem.step)}
                className={`p-6 rounded-3xl spatial-card clay-azure transition-all flex flex-col justify-between ${
                  isSelected ? 'border-white bg-white/95 shadow-lg -translate-y-1' : ''
                }`}
              >
                <div>
                  {/* Step badge & SLA */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-7 h-7 rounded-xl bg-azure-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                        {stepItem.step}
                      </span>
                      <span className="text-xs font-bold uppercase text-azure-600 tracking-wider">
                        Stage 0{stepItem.step}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-600 spatial-pill px-2.5 py-0.5 rounded-full">
                      <Clock className="w-3 h-3 text-azure-600" />
                      <span>{stepItem.sla}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-9 h-9 rounded-xl spatial-icon flex items-center justify-center text-azure-600 shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-navy leading-snug">
                      {stepItem.title}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-slate-700 mb-1.5">
                    {stepItem.shortDesc}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {stepItem.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-200/50 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-mint-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-600">
                    {stepItem.focus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Summary Capsule */}
        <div className="p-5 sm:p-6 rounded-3xl spatial-stage flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold text-navy">7 to 14 Days Seamless Transition</h4>
            <p className="text-xs text-slate-500">
              Zero interruption to existing billing streams. Direct EHR/clearinghouse integration.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenAuditModal}
            className="px-4 py-2 rounded-xl bg-azure-600 hover:bg-azure-500 text-white font-bold text-xs shadow-md shadow-azure-600/30 transition-all flex items-center gap-1.5 shrink-0 active:scale-95"
          >
            <span>Review Transition Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
