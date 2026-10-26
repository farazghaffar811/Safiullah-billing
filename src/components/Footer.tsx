import React from 'react';
import { 
  Activity, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Lock, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, SPECIALTIES } from '../data/billingData';

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  return (
    <footer className="pt-20 pb-12 relative overflow-hidden bg-navy text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-azure-500/40 to-transparent" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-azure-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust & Certification Badges Strip */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-between text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <ShieldCheck className="w-6 h-6 text-mint shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">HIPAA Compliant</span>
                <span className="text-[10px] text-slate-400">Security Rule Certified</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Lock className="w-6 h-6 text-azure-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">HITECH Certified</span>
                <span className="text-[10px] text-slate-400">Strict Privacy Protocol</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Award className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">AAPC Certified</span>
                <span className="text-[10px] text-slate-400">Senior Medical Coders</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">256-Bit SSL Encryption</span>
                <span className="text-[10px] text-slate-400">Bank-Grade EDI Tunnel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-azure-600 to-cyan-400 p-0.5 shadow-md flex items-center justify-center">
                  <div className="w-full h-full bg-navy/80 rounded-[10px] flex items-center justify-center text-white">
                    <Activity className="w-5 h-5 text-azure-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white tracking-tight">EHCS</h3>
                  <p className="text-[11px] text-slate-400">Elite Health Care Services</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6 max-w-sm">
                Delivering excellence in medical billing, credentialing, and revenue cycle management with integrity, precision, and state-of-the-art billing technology.
              </p>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 max-w-sm mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-azure-300 block mb-1">
                  Tagline &amp; Motto
                </span>
                <p className="text-xs font-medium text-slate-200">
                  "{COMPANY_INFO.tagline}"
                </p>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-2">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-azure-400 shrink-0" />
                <span>Direct 24/7: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-azure-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-azure-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Core Services (Cols 5-7) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-azure-400 mb-4">
              Core RCM Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a 
                    href={`#service-${service.id}`}
                    className="hover:text-azure-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#services" 
                  className="text-azure-400 font-bold hover:text-azure-300 transition-colors inline-flex items-center gap-1 pt-1"
                >
                  <span>View All 10 Services</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Specialties (Cols 8-9) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-azure-400 mb-4">
              Top Specialties
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {SPECIALTIES.slice(0, 6).map((spec) => (
                <li key={spec.id}>
                  <a 
                    href="#specialties"
                    className="hover:text-azure-300 transition-colors truncate block"
                  >
                    {spec.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#specialties" 
                  className="text-azure-400 font-bold hover:text-azure-300 transition-colors inline-flex items-center gap-1 pt-1"
                >
                  <span>All 22 Fields</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Actions & Audit (Cols 10-12) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-azure-400 mb-4">
                Schedule Assessment
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Ready to accelerate your net practice collections by up to 35%? Connect with our revenue cycle architects.
              </p>
              
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full py-3 rounded-xl bg-azure-600 hover:bg-azure-500 text-white font-bold text-xs shadow-lg shadow-azure-600/30 transition-all flex items-center justify-center gap-2 mb-3 active:scale-95"
              >
                <span>Free Practice Revenue Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#roi-calculator"
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>Launch ROI Calculator</span>
              </a>
            </div>

            <div className="pt-4 text-[11px] text-slate-400">
              <span>National Operations Center: New Braunfels, Texas</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>&copy; {new Date().getFullYear()} Elite Health Care Services (EHCS). All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-slate-200 transition-colors">Terms &amp; Conditions</a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Notice of Privacy Practices (HIPAA)</a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Security Overview</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
