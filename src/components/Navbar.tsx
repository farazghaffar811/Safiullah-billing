import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown, Activity, Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES, SPECIALTIES, COMPANY_INFO } from '../data/billingData';

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDropdowns = () => {
    setServicesOpen(false);
    setSpecialtiesOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 flex justify-center">
        <nav
          className={`w-full max-w-7xl transition-all duration-200 rounded-full glass-nav flex items-center justify-between h-14 px-4 sm:px-6 ${
            isScrolled ? 'shadow-[0_8px_24px_rgba(6,27,80,0.1)] border-white/90 bg-white/80' : 'bg-white/70'
          }`}
        >
          {/* Single-Line Sleek Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-navy hover:text-azure-600 transition-colors shrink-0"
            onClick={closeDropdowns}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-azure-600 to-cyan-400 p-0.5 shadow-sm flex items-center justify-center">
              <div className="w-full h-full bg-white/20 rounded-[6px] flex items-center justify-center text-white">
                <Activity className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-navy text-base tracking-tight">EHCS</span>
              <span className="text-slate-300 hidden md:inline font-light">|</span>
              <span className="text-xs font-semibold text-slate-600 tracking-tight hidden md:inline">
                Elite Health Care Services
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 text-xs font-semibold text-slate-700">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setServicesOpen(true); setSpecialtiesOpen(false); }}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors ${
                  servicesOpen ? 'text-azure-600 bg-white/80' : 'hover:text-azure-600 hover:bg-white/60'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesOpen ? 'rotate-180 text-azure-600' : 'text-slate-400'}`} />
              </button>

              {/* Lightweight Services Dropdown Panel */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[560px] p-3 rounded-2xl glass-nav bg-white/95 border border-white/90 shadow-xl grid grid-cols-2 gap-1 z-50">
                  {SERVICES.map((s) => (
                    <a
                      key={s.id}
                      href={`#service-${s.id}`}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-azure-50/80 transition-colors group"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-[10px] font-mono font-bold text-azure-600 bg-azure-50 px-1.5 py-0.5 rounded">
                          {s.number}
                        </span>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-azure-600 truncate">
                          {s.title}
                        </span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-azure-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Specialties Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setSpecialtiesOpen(true); setServicesOpen(false); }}
              onMouseLeave={() => setSpecialtiesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                  specialtiesOpen ? 'text-azure-600 bg-white/80' : 'hover:text-azure-600 hover:bg-white/60'
                }`}
              >
                <span>Specialties</span>
                <span className="text-[10px] font-bold text-azure-600 bg-azure-50 px-1.5 py-0.2 rounded-full">
                  22
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${specialtiesOpen ? 'rotate-180 text-azure-600' : 'text-slate-400'}`} />
              </button>

              {/* Lightweight Specialties Dropdown Panel */}
              {specialtiesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[580px] p-3 rounded-2xl glass-nav bg-white/95 border border-white/90 shadow-xl z-50">
                  <div className="flex items-center justify-between px-2 pb-2 mb-1 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-navy">22 Medical Specialties</span>
                    <a
                      href="#specialties"
                      onClick={() => setSpecialtiesOpen(false)}
                      className="text-[11px] font-bold text-azure-600 hover:underline"
                    >
                      View All Specialties &rarr;
                    </a>
                  </div>
                  <div className="grid grid-cols-3 gap-1 max-h-[300px] overflow-y-auto pr-1">
                    {SPECIALTIES.map((spec) => (
                      <a
                        key={spec.id}
                        href="#specialties"
                        onClick={() => setSpecialtiesOpen(false)}
                        className="p-1.5 rounded-lg hover:bg-azure-50/80 text-[11px] font-medium text-slate-700 hover:text-azure-600 truncate transition-colors"
                      >
                        {spec.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#why-ehcs" className="px-3 py-1.5 rounded-full hover:text-azure-600 hover:bg-white/60 transition-colors">
              Why EHCS
            </a>

            <a href="#roi-calculator" className="px-3 py-1.5 rounded-full hover:text-azure-600 hover:bg-white/60 transition-colors flex items-center gap-1.5">
              <span>ROI Calculator</span>
              <span className="w-1.5 h-1.5 rounded-full bg-mint" />
            </a>

            <a href="#workflow" className="px-3 py-1.5 rounded-full hover:text-azure-600 hover:bg-white/60 transition-colors">
              Workflow
            </a>

            <a href="#faqs" className="px-3 py-1.5 rounded-full hover:text-azure-600 hover:bg-white/60 transition-colors">
              FAQs
            </a>
          </div>

          {/* Quick Actions (Direct Phone & Compact CTA) */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-navy hover:text-azure-600 bg-white/60 hover:bg-white border border-white/70 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-mint" />
              <Phone className="w-3 h-3 text-azure-600" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-azure-600 to-azure-500 hover:from-azure-500 hover:to-azure-600 shadow-sm shadow-azure-500/30 transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Sparkles className="w-3 h-3 text-white" />
              <span>Free Audit</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-slate-700 hover:text-navy hover:bg-white/70 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 lg:hidden p-5 rounded-2xl glass-card-dark text-white shadow-2xl border border-white/20">
          <div className="flex flex-col space-y-2.5 text-sm font-semibold">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-azure-300 transition-colors flex justify-between items-center"
            >
              <span>10 Core Services</span>
              <ArrowRight className="w-4 h-4 text-azure-400" />
            </a>
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-azure-300 transition-colors flex justify-between items-center"
            >
              <span>22 Medical Specialties</span>
              <span className="text-xs font-bold bg-azure-500/30 text-azure-200 px-2 py-0.5 rounded-full">22</span>
            </a>
            <a
              href="#why-ehcs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-azure-300 transition-colors"
            >
              Why EHCS (3 Pillars)
            </a>
            <a
              href="#roi-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-azure-300 transition-colors flex items-center gap-2"
            >
              <span>ROI Calculator</span>
              <span className="w-1.5 h-1.5 rounded-full bg-mint" />
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-azure-300 transition-colors"
            >
              6-Step Workflow
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-azure-300 transition-colors"
            >
              FAQs
            </a>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="py-2.5 text-center text-xs font-bold text-white bg-white/10 rounded-xl"
              >
                Call: {COMPANY_INFO.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full py-2.5 bg-azure-600 text-white rounded-xl text-xs font-bold shadow-md shadow-azure-600/30 flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Schedule Free Practice Audit</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
