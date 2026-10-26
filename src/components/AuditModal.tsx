import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShieldCheck } from 'lucide-react';
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
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl glass-panel bg-white/95 border-white shadow-2xl z-10 my-auto max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Close Practice Audit Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-5 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-capsule border-azure-200/80 mb-2">
                <Sparkles className="w-3 h-3 text-azure-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-azure-600">
                  Complimentary Practice Revenue Evaluation
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                Schedule Your Free Practice Revenue Audit
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Discover hidden revenue leaks and learn how EHCS can accelerate your cash flow.
              </p>
            </div>

            {/* Audit Form */}
            <AuditForm
              initialSpecialty={initialSpecialty}
              initialVolume={initialVolume}
              initialDenialRate={initialDenialRate}
              onSuccess={onClose}
              isModal={true}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
