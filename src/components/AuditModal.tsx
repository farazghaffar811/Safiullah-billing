import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Frosted Smooth Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/60 backdrop-blur-xl"
          />

          {/* Modal Dialog with Spatial Clay Structure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-xl p-5 sm:p-7 rounded-3xl spatial-stage bg-white/95 border border-white/90 shadow-2xl z-10 my-auto max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full spatial-button text-slate-400 hover:text-navy transition-colors focus:outline-none"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4 pr-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full spatial-pill mb-1.5">
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
