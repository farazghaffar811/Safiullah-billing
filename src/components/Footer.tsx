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
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, SPECIALTIES } from '../data/billingData';

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  return (
    <footer className="pt-16 pb-10 relative overflow-hidden bg-navy text-white">
      {/* Specular Top Gradient Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-azure-400/50 to-transparent" />
      
      {/* Ambient Radial Lights */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-azure-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Neumorphic Trust & Certification Badges Strip */}
        <div className="p-5 rounded-3xl neu-glass-dark mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-between text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-mint shadow-xs">
                <ShieldCheck className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">HIPAA Compliant</span>
                <span className="text-[10px] text-slate-400">Security Rule Certified</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-azure-400 shadow-xs">
                <Lock className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">HITECH Certified</span>
                <span className="text-[10px] text-slate-400">Strict Privacy Protocol</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shadow-xs">
                <Award className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">AAPC Certified</span>
                <span className="text-[10px] text-slate-400">Senior Medical Coders</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 shadow-xs">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">256-Bit SSL Encryption</span>
                <span className="text-[10px] text-slate-400">Bank-Grade EDI Tunnel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-azure-600 to-cyan-400 p-0.5 flex items-center justify-center shadow-xs">
                  <div className="w-full h-full bg-navy/90 rounded-[10px] flex items-center justify-center text-white">
                    <Activity className="w-4 h-4 text-azure-400" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-white text-base tracking-tight leading-none">EHCS</span>
                  <span className="text-slate-500 font-light select-none">|</span>
                  <span className="text-xs font-semibold text-slate-300 whitespace-nowrap leading-none">Elite Health Care Services</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal mb-5 max-w-sm">
                Delivering excellence in medical billing, credentialing, and revenue cycle management with integrity, precision, and state-of-the-art billing technology.
              </p>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 max-w-sm mb-5 backdrop-blur-md">
                <p className="text-xs text-slate-200 italic font-medium leading-snug">
                  "{COMPANY_INFO.tagline}"
                </p>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-azure-400 shrink-0" />
                <span>24/7 Helpline: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-azure-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-azure-400 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-azure-400 mb-3">
              Core RCM Solutions
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a 
                    href={`#service-${service.id}`}
                    className="hover:text-azure-300 transition-colors"
                  >
                    {service.title}
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

          {/* Specialties */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-azure-400 mb-3">
              Specialties
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
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

          {/* Quick Actions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-azure-400 mb-3">
              Schedule Assessment
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Ready to accelerate your net practice collections by up to 35%? Connect with our team.
            </p>
            
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-azure-600 to-azure-500 hover:from-azure-500 hover:to-azure-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 mb-2 shadow-lg shadow-azure-600/30 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Free Practice Revenue Audit</span>
            </button>

            <a
              href="#roi-calculator"
              className="w-full py-2 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-all flex items-center justify-center border border-white/10"
            >
              <span>Launch ROI Calculator</span>
            </a>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            <span>&copy; {new Date().getFullYear()} Elite Health Care Services (EHCS). All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <a href="#" className="hover:text-slate-200 transition-colors">Terms &amp; Conditions</a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Notice of Privacy Practices (HIPAA)</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
