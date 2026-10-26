import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown, Activity, Menu, X, Sparkles, ArrowRight, Stethoscope } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDropdowns = () => {
    setServicesOpen(false);
    setSpecialtiesOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 flex justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-7xl transition-all duration-300 rounded-full spatial-nav flex items-center justify-between h-14 px-3.5 sm:px-6 ${
            isScrolled ? 'shadow-[0_12px_32px_rgba(6,27,80,0.16)] -translate-y-0.5' : ''
          }`}
        >
          {/* Left: Pixel-Perfect Single-Line Brand Logo with Embossed Neu-Glass Squircle */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-navy hover:text-azure-600 transition-colors shrink-0 group focus:outline-none"
            onClick={closeDropdowns}
          >
            <div className="w-8 h-8 rounded-xl spatial-icon p-0.5 flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-gradient-to-tr from-azure-600 to-cyan-400 rounded-[10px] flex items-center justify-center text-white shadow-xs">
                <Activity className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-navy text-base tracking-tight leading-none">EHCS</span>
              <span className="text-slate-300 hidden md:inline font-light select-none">|</span>
              <span className="text-xs font-semibold text-slate-700 tracking-tight hidden md:inline whitespace-nowrap leading-none">
                Elite Health Care Services
              </span>
            </div>
          </a>

          {/* Center: Desktop Nav Links with Tactile Feedback */}
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
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
                  servicesOpen ? 'text-azure-600 neu-glass-inset' : 'hover:text-azure-600 hover:bg-white/50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-azure-600' : 'text-slate-400'}`} />
              </button>

              {/* Spatial Clay Mega Dropdown Sheet */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[590px] p-3 rounded-3xl spatial-stage grid grid-cols-2 gap-1.5 z-50">
                  <div className="col-span-2 flex items-center justify-between px-2 pb-2 mb-1 border-b border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-azure-600">10 Core RCM Solutions</span>
                    <a
                      href="#services"
                      onClick={() => setServicesOpen(false)}
                      className="text-[11px] font-bold text-azure-600 hover:text-azure-700 flex items-center gap-1"
                    >
                      View All Directory <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  {SERVICES.map((s) => (
                    <a
                      key={s.id}
                      href={`#service-${s.id}`}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between p-2 rounded-xl hover:spatial-inset transition-all group"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-[10px] font-mono font-bold text-azure-600 spatial-pill px-1.5 py-0.5 rounded">
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
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  specialtiesOpen ? 'text-azure-600 spatial-inset' : 'hover:text-azure-600 hover:bg-white/50'
                }`}
              >
                <span>Specialties</span>
                <span className="text-[10px] font-bold text-azure-700 spatial-pill px-1.5 py-0.2 rounded-full">
                  22
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${specialtiesOpen ? 'rotate-180 text-azure-600' : 'text-slate-400'}`} />
              </button>

              {/* Spatial Specialties Dropdown Sheet */}
              {specialtiesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[630px] p-3 rounded-3xl spatial-stage z-50">
                  <div className="flex items-center justify-between px-2 pb-2 mb-1 border-b border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5 text-azure-600" />
                      <span className="text-[11px] font-bold text-navy">22 Specialized Medical Billing Disciplines</span>
                    </div>
                    <a
                      href="#specialties"
                      onClick={() => setSpecialtiesOpen(false)}
                      className="text-[11px] font-bold text-azure-600 hover:underline flex items-center gap-1"
                    >
                      Filter All &rarr;
                    </a>
                  </div>
                  <div className="grid grid-cols-3 gap-1 max-h-[310px] overflow-y-auto pr-1">
                    {SPECIALTIES.map((spec) => (
                      <a
                        key={spec.id}
                        href="#specialties"
                        onClick={() => setSpecialtiesOpen(false)}
                        className="p-1.5 rounded-xl hover:spatial-inset text-[11px] font-medium text-slate-700 hover:text-azure-600 truncate transition-all flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-azure-500 shrink-0" />
                        <span className="truncate">{spec.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#why-ehcs" className="px-3 py-1.5 rounded-full hover:text-azure-600 hover:neu-glass-inset transition-all">
              Why EHCS
            </a>

            <a href="#roi-calculator" className="px-3 py-1.5 rounded-full hover:text-azure-600 hover:neu-glass-inset transition-all flex items-center gap-1.5">
              <span>ROI Calculator</span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-mint"></span>
              </span>
            </a>

            <a href="#workflow" className="px-3 py-1.5 rounded-full hover:text-azure-600 hover:neu-glass-inset transition-all">
              Workflow
            </a>

            <a href="#faqs" className="px-3 py-1.5 rounded-full hover:text-azure-600 hover:neu-glass-inset transition-all">
              FAQs
            </a>
          </div>

          {/* Right: Hotline Pill & Embossed CTA */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-navy hover:text-azure-600 neu-glass-button transition-all"
              title="24/7 Dedicated Revenue Helpline"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
              </span>
              <Phone className="w-3 h-3 text-azure-600" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-azure-600 via-azure-500 to-azure-600 hover:from-azure-500 hover:to-azure-600 shadow-[0_4px_14px_rgba(35,139,238,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Sparkles className="w-3 h-3 text-white" />
              <span>Free Audit</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-xl neu-glass-button text-slate-700 hover:text-navy focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Glass-Neumorphic Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 lg:hidden p-5 rounded-3xl neu-glass-dark text-white shadow-2xl border border-white/20 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3 text-sm font-semibold">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs uppercase font-bold text-azure-300">Navigation</span>
              <span className="text-xs text-white/60">Elite RCM Intelligence</span>
            </div>

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
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-azure-300 transition-colors"
            >
              Doctor Testimonials
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
                className="py-2.5 text-center text-xs font-bold text-white bg-white/10 rounded-2xl flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-azure-400" />
                <span>Call 24/7: {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full py-2.5 bg-gradient-to-r from-azure-600 to-azure-500 text-white rounded-2xl text-xs font-bold shadow-md shadow-azure-600/30 flex items-center justify-center gap-1.5"
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
