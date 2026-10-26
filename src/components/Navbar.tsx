import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  ChevronDown, 
  Activity, 
  Menu, 
  X, 
  ArrowRight, 
  FileCheck2, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Headphones, 
  Clock, 
  CheckCircle2, 
  Users, 
  Globe,
  Sparkles,
  Stethoscope
} from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDropdowns = () => {
    setServicesOpen(false);
    setSpecialtiesOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8 flex justify-center ${
          isScrolled ? 'pt-2' : 'pt-4'
        }`}
      >
        <div 
          className={`w-full max-w-7xl transition-all duration-500 rounded-2xl lg:rounded-full ${
            isScrolled 
              ? 'glass-capsule shadow-[0_15px_35px_rgba(6,27,80,0.12)] border-white/80 py-2.5 px-4 sm:px-6' 
              : 'bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(6,27,80,0.06)] py-3 px-4 sm:px-7'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-3 group focus:outline-none"
              onClick={closeDropdowns}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-azure-600 via-azure-500 to-cyan-400 p-0.5 shadow-md shadow-azure-500/25 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-[10px] flex items-center justify-center text-white">
                  <Activity className="w-5 h-5 text-white animate-pulse-subtle" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold tracking-tight text-navy text-lg sm:text-xl leading-none">
                    EHCS
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-azure-600 bg-azure-50 px-1.5 py-0.5 rounded-full border border-azure-200/60 hidden sm:inline-block">
                    Elite RCM
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 tracking-tight hidden sm:inline-block leading-tight mt-0.5">
                  Elite Health Care Services
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* Services Mega Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => { setServicesOpen(true); setSpecialtiesOpen(false); }}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold text-slate-700 hover:text-azure-600 hover:bg-white/60 transition-colors focus:outline-none"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-azure-600' : 'text-slate-400'}`} />
                </button>

                {/* Services Mega Dropdown */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] p-5 rounded-3xl glass-capsule bg-white/95 border border-white/90 shadow-[0_25px_60px_-15px_rgba(6,27,80,0.2)]"
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-azure-600">Complete RCM Architecture</span>
                          <h4 className="text-sm font-bold text-navy">10 End-to-End Medical Billing Solutions</h4>
                        </div>
                        <a 
                          href="#services" 
                          onClick={() => setServicesOpen(false)}
                          className="text-xs font-semibold text-azure-600 hover:text-azure-700 flex items-center gap-1"
                        >
                          View All Directory <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 max-h-[420px] overflow-y-auto pr-1">
                        {SERVICES.map((s) => (
                          <a
                            key={s.id}
                            href={`#service-${s.id}`}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-azure-50/70 border border-transparent hover:border-azure-100 transition-all group"
                          >
                            <div className="w-8 h-8 rounded-xl bg-azure-50 group-hover:bg-azure-500 text-azure-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                              <span className="text-xs font-bold">{s.number}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h5 className="text-xs font-bold text-navy group-hover:text-azure-600 truncate transition-colors">
                                  {s.title}
                                </h5>
                                {s.badge && (
                                  <span className="text-[9px] font-semibold bg-azure-100/70 text-azure-700 px-1.5 py-0.2 rounded-md">
                                    {s.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {s.shortDesc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Specialties Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => { setSpecialtiesOpen(true); setServicesOpen(false); }}
                onMouseLeave={() => setSpecialtiesOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold text-slate-700 hover:text-azure-600 hover:bg-white/60 transition-colors focus:outline-none"
                  onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
                >
                  <span>Specialties</span>
                  <span className="bg-azure-100 text-azure-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">22</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${specialtiesOpen ? 'rotate-180 text-azure-600' : 'text-slate-400'}`} />
                </button>

                {/* Specialties Mega Dropdown */}
                <AnimatePresence>
                  {specialtiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] p-5 rounded-3xl glass-capsule bg-white/95 border border-white/90 shadow-[0_25px_60px_-15px_rgba(6,27,80,0.2)]"
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-azure-600">Cross-Disciplinary Mastery</span>
                          <h4 className="text-sm font-bold text-navy">22 Specialized Medical Billing Disciplines</h4>
                        </div>
                        <a 
                          href="#specialties" 
                          onClick={() => setSpecialtiesOpen(false)}
                          className="text-xs font-semibold text-azure-600 hover:text-azure-700 flex items-center gap-1"
                        >
                          Explore Filter <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="grid grid-cols-3 gap-2 max-h-[380px] overflow-y-auto pr-1">
                        {SPECIALTIES.map((spec) => (
                          <a
                            key={spec.id}
                            href="#specialties"
                            onClick={() => setSpecialtiesOpen(false)}
                            className="p-2 rounded-xl hover:bg-azure-50/70 border border-transparent hover:border-azure-100 transition-all group flex items-start gap-2"
                          >
                            <Stethoscope className="w-3.5 h-3.5 text-azure-500 mt-0.5 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-medium text-slate-700 group-hover:text-azure-600 truncate transition-colors">
                                {spec.name}
                              </p>
                              <span className="text-[10px] text-slate-400">
                                {spec.cleanClaimRate} clean
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Nav Links */}
              <a 
                href="#why-ehcs" 
                className="px-3 py-2 rounded-full text-sm font-semibold text-slate-700 hover:text-azure-600 hover:bg-white/60 transition-colors"
              >
                Why EHCS
              </a>
              <a 
                href="#roi-calculator" 
                className="px-3 py-2 rounded-full text-sm font-semibold text-slate-700 hover:text-azure-600 hover:bg-white/60 transition-colors flex items-center gap-1"
              >
                <span>ROI Calculator</span>
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              </a>
              <a 
                href="#workflow" 
                className="px-3 py-2 rounded-full text-sm font-semibold text-slate-700 hover:text-azure-600 hover:bg-white/60 transition-colors"
              >
                Workflow
              </a>
              <a 
                href="#faqs" 
                className="px-3 py-2 rounded-full text-sm font-semibold text-slate-700 hover:text-azure-600 hover:bg-white/60 transition-colors"
              >
                Testimonials & FAQs
              </a>
            </nav>

            {/* Quick Actions (Direct Phone & CTA Button) */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold text-navy hover:text-azure-600 bg-white/70 hover:bg-white border border-white/80 shadow-sm transition-all"
                title="Call 24/7 Dedicated Revenue Cycle Helpline"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
                </span>
                <Phone className="w-3.5 h-3.5 text-azure-600" />
                <span className="tracking-tight">{COMPANY_INFO.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={onOpenAuditModal}
                className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-azure-600 to-azure-500 hover:from-azure-500 hover:to-azure-600 shadow-md shadow-azure-500/30 hover:shadow-azure-500/50 transition-all duration-300 transform active:scale-95 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-white/90" />
                <span>Free Practice Audit</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-navy bg-white/60 hover:bg-white/90 border border-white/80 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (iOS 18 Glass style) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden p-5 rounded-3xl glass-card-dark text-white border border-white/20 shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase font-bold tracking-wider text-azure-300">Navigation</span>
                <span className="text-xs font-semibold text-white/70">EHCS Billing Intelligence</span>
              </div>

              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-semibold hover:text-azure-300 transition-colors"
              >
                <span>Services (10 Core Disciplines)</span>
                <ArrowRight className="w-4 h-4 text-azure-400" />
              </a>

              <a 
                href="#specialties" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-semibold hover:text-azure-300 transition-colors"
              >
                <span>Specialties (All 22 Clinical Fields)</span>
                <span className="text-xs font-bold bg-azure-500/40 text-azure-200 px-2 py-0.5 rounded-full">22</span>
              </a>

              <a 
                href="#why-ehcs" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-semibold hover:text-azure-300 transition-colors"
              >
                <span>Why EHCS (3 Pillars)</span>
                <ArrowRight className="w-4 h-4 text-azure-400" />
              </a>

              <a 
                href="#roi-calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-semibold hover:text-azure-300 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span>ROI Calculator</span>
                  <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                </div>
                <ArrowRight className="w-4 h-4 text-azure-400" />
              </a>

              <a 
                href="#workflow" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-semibold hover:text-azure-300 transition-colors"
              >
                <span>6-Step Acceleration Workflow</span>
                <ArrowRight className="w-4 h-4 text-azure-400" />
              </a>

              <a 
                href="#testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-semibold hover:text-azure-300 transition-colors"
              >
                <span>Physician Testimonials</span>
                <ArrowRight className="w-4 h-4 text-azure-400" />
              </a>

              <a 
                href="#faqs" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-semibold hover:text-azure-300 transition-colors"
              >
                <span>Frequently Asked Questions</span>
                <ArrowRight className="w-4 h-4 text-azure-400" />
              </a>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/10 border border-white/15 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-azure-400" />
                  <span>Call 24/7: {COMPANY_INFO.phoneDisplay}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuditModal();
                  }}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-azure-500 to-azure-600 text-white font-bold text-sm shadow-lg shadow-azure-500/30 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Schedule Free Practice Audit</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
