import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { AuditForm } from './AuditForm';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialty?: string;
  initialVolume?: number;
  initialDenialRate?: number;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  initialSpecialty,
  initialVolume,
  initialDenialRate
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Frosted Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-navy/60 backdrop-blur-md"
      />

      {/* Modal Dialog with Neu-Glass Structure */}
      <div className="relative w-full max-w-xl p-5 sm:p-7 rounded-3xl neu-glass-card-static bg-white/95 border-white shadow-2xl z-10 my-auto max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full neu-glass-button text-slate-400 hover:text-navy transition-colors focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4 pr-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-glass-pill mb-1.5">
            <Sparkles className="w-3 h-3 text-azure-600" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-azure-600">
              Complimentary Practice Audit
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
            Schedule Your Free Practice Revenue Audit
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Discover hidden revenue leaks and learn how EHCS can accelerate your cash flow.
          </p>
        </div>

        <AuditForm
          initialSpecialty={initialSpecialty}
          initialVolume={initialVolume}
          initialDenialRate={initialDenialRate}
          onSuccess={onClose}
          isModal={true}
        />
      </div>
    </div>
  );
};
