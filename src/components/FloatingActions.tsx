import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Sparkles, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/billingData';

interface FloatingActionsProps {
  onOpenAuditModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenAuditModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            type="button"
            onClick={scrollToTop}
            className="pointer-events-auto w-11 h-11 rounded-full glass-panel hover:bg-white text-navy flex items-center justify-center border-white/80 shadow-lg hover:shadow-xl transition-all active:scale-95 focus:outline-none"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-5 h-5 text-azure-600" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating CTA Capsule */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="pointer-events-auto flex items-center gap-2 p-1.5 rounded-full glass-capsule bg-white/90 shadow-[0_12px_35px_rgba(6,27,80,0.18)] border border-white"
      >
        {/* Phone Action */}
        <a
          href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold text-navy hover:text-azure-600 bg-white/60 hover:bg-white transition-all shadow-xs"
          title="Direct Phone Call"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
          </span>
          <Phone className="w-3.5 h-3.5 text-azure-600" />
          <span className="hidden sm:inline-block">{COMPANY_INFO.phoneDisplay}</span>
        </a>

        {/* Free Audit Trigger Button */}
        <button
          type="button"
          onClick={onOpenAuditModal}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-azure-600 to-azure-500 hover:from-azure-500 hover:to-azure-600 shadow-md shadow-azure-500/30 transition-all active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free Audit</span>
        </button>
      </motion.div>
    </div>
  );
};
