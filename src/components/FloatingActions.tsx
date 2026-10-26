import React, { useState, useEffect } from 'react';
import { Phone, Sparkles, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/billingData';

interface FloatingActionsProps {
  onOpenAuditModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenAuditModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto w-9 h-9 rounded-full glass-card-static hover:bg-white text-navy flex items-center justify-center shadow-md transition-all active:scale-95 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-azure-600" />
        </button>
      )}

      {/* Floating Action Pill */}
      <div className="pointer-events-auto flex items-center gap-1.5 p-1 rounded-full glass-nav shadow-lg border border-white">
        <a
          href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-navy hover:text-azure-600 bg-white/70 hover:bg-white transition-colors"
          title="Direct Phone Call"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-mint" />
          <Phone className="w-3 h-3 text-azure-600" />
          <span className="hidden sm:inline-block">{COMPANY_INFO.phoneDisplay}</span>
        </a>

        <button
          type="button"
          onClick={onOpenAuditModal}
          className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-azure-600 to-azure-500 hover:from-azure-500 hover:to-azure-600 shadow-sm transition-all active:scale-95"
        >
          <Sparkles className="w-3 h-3" />
          <span>Free Audit</span>
        </button>
      </div>
    </div>
  );
};
