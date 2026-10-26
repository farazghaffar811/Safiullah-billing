import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Activity, 
  DollarSign, 
  Lock, 
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/billingData';

interface HeroProps {
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background Medical UHD Atmosphere */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.06] pointer-events-none -z-20 mix-blend-multiply"
        style={{ backgroundImage: `url('/images/doctor-team-banner.jpg')` }}
      />

      {/* Background Ambient Neu-Aurora Glows with Spatial Depth */}
      <div className="absolute top-10 left-1/4 w-[650px] h-[450px] bg-gradient-to-tr from-azure-400/20 via-sky-300/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-spatial-float" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-400/20 via-mint/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-spatial-float-rev" />
      <div className="absolute -bottom-10 left-10 w-[500px] h-[400px] bg-gradient-to-tr from-azure-600/15 via-navy/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Neu-Glass CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge with Soft Spatial Clay Extrusion */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full spatial-pill mb-5">
              <Sparkles className="w-3.5 h-3.5 text-azure-600" />
              <span className="text-azure-700 font-bold text-xs tracking-wide">
                24/7 Helping Hands for Your Medical Billing &amp; Practice Needs
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.12] mb-5">
              Streamline Your <span className="bg-gradient-to-r from-azure-600 via-azure-500 to-cyan-500 bg-clip-text text-transparent">Revenue Cycle.</span> <br />
              Maximize Practice <span className="text-navy">Cash Flow.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mb-7 font-normal">
              We eliminate billing bottlenecks, credentialing delays, and uncollected A/R. Partner with <strong className="font-semibold text-navy">Elite Health Care Services (EHCS)</strong> to achieve a <span className="text-azure-600 font-bold">98.7% clean claims rate</span> and guaranteed financial growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-azure-600 via-azure-500 to-azure-600 hover:from-azure-500 hover:to-azure-600 text-white font-bold text-sm shadow-[0_8px_20px_rgba(35,139,238,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Get a Free Practice Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#specialties"
                className="px-6 py-3.5 rounded-2xl spatial-button text-navy hover:text-azure-600 font-bold text-sm flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Explore 22 Specialties</span>
                <ChevronRight className="w-4 h-4 text-azure-600" />
              </a>
            </div>

            {/* Doctor Face Stack & Verified Trust Proof */}
            <div className="flex items-center gap-3 mb-7 p-2 rounded-2xl spatial-inset w-full sm:max-w-xl">
              <div className="flex -space-x-2.5 overflow-hidden pl-1">
                <img 
                  src="/images/doctor-michael-vance.jpg" 
                  alt="Dr. Michael Vance, MD" 
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                />
                <img 
                  src="/images/doctor-sarah-jenkins.jpg" 
                  alt="Dr. Sarah Jenkins, DO" 
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                />
                <img 
                  src="/images/doctor-robert-sterling.jpg" 
                  alt="Dr. Robert Sterling, MD" 
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xs leading-none">★</span>
                  ))}
                  <span className="text-xs font-bold text-navy ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Trusted by 1,200+ Healthcare Providers Nationwide</p>
              </div>
            </div>

            {/* Tactile Proof Trust Indicators (Recessed Tray with Raised Counter Pills) */}
            <div className="p-3.5 rounded-2xl spatial-inset w-full sm:max-w-xl grid grid-cols-3 gap-3">
              <div className="p-2.5 rounded-xl spatial-pill text-center">
                <span className="text-lg sm:text-xl font-black text-navy block leading-none mb-1">{COMPANY_INFO.stats.providers}</span>
                <span className="text-[10px] text-slate-500 font-semibold block leading-tight">Physicians</span>
              </div>
              <div className="p-2.5 rounded-xl spatial-pill clay-mint text-center">
                <span className="text-lg sm:text-xl font-black text-mint-500 block leading-none mb-1">{COMPANY_INFO.stats.cleanClaims}</span>
                <span className="text-[10px] text-slate-500 font-semibold block leading-tight">Clean Rate</span>
              </div>
              <div className="p-2.5 rounded-xl spatial-pill clay-azure text-center">
                <span className="text-lg sm:text-xl font-black text-azure-600 block leading-none mb-1">{COMPANY_INFO.stats.dar}</span>
                <span className="text-[10px] text-slate-500 font-semibold block leading-tight">Avg. DAR</span>
              </div>
            </div>
          </div>

          {/* Right Column: UHD Doctor Showcase & Spatial Floating Console */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[500px]">
            {/* Ambient Volumetric Backdrop Light */}
            <div className="absolute inset-0 bg-gradient-to-tr from-azure-400/20 via-sky-200/30 to-mint/20 rounded-full blur-3xl transform scale-95 -z-10" />

            {/* UHD Cutout Doctor Image from MedAlign */}
            <div className="relative z-10 flex justify-center items-end pt-4">
              <img
                src="/images/doctor-female-hero.png"
                alt="Elite Medical Billing Chief Physician"
                className="h-[430px] sm:h-[490px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(6,27,80,0.22)] select-none pointer-events-none"
              />
            </div>

            {/* Top-Right Floating Card: Practice Cash Velocity & Sparkline */}
            <div className="absolute top-2 -right-2 sm:-right-4 p-3.5 rounded-2xl spatial-stage w-56 sm:w-60 z-20 shadow-xl animate-spatial-float">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/50">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-lg spatial-icon flex items-center justify-center text-azure-600">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-navy leading-none">Cash Velocity</h3>
                    <p className="text-[8px] text-slate-400">Live EHR Feed</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 bg-mint-50 text-mint-500 text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-mint-200/60 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                  <span>98.7%</span>
                </span>
              </div>

              {/* Sparkline */}
              <div className="mt-2">
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="text-lg font-black text-navy leading-none">98.7% Clean</span>
                  <span className="text-[9px] font-bold text-mint-500">+14.2% vs Avg</span>
                </div>
                <div className="h-6 w-full">
                  <svg className="w-full h-full" viewBox="0 0 200 36">
                    <defs>
                      <linearGradient id="azureGlowNeu" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#238BEE" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#238BEE" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,28 Q30,24 60,18 T120,12 T160,6 T200,3"
                      fill="none"
                      stroke="#238BEE"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,28 Q30,24 60,18 T120,12 T160,6 T200,3 L200,36 L0,36 Z"
                      fill="url(#azureGlowNeu)"
                    />
                    <circle cx="200" cy="3" r="3.5" fill="#00D084" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom-Left Floating Card: Days in A/R */}
            <div className="absolute bottom-14 -left-2 sm:-left-5 p-3 rounded-2xl spatial-pill clay-azure z-20 shadow-xl animate-spatial-float-rev flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl spatial-icon flex items-center justify-center text-azure-600 shrink-0">
                <Clock className="w-4 h-4 text-azure-600" />
              </div>
              <div>
                <span className="text-[9px] font-semibold text-slate-500 block leading-tight">Average DAR</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-black text-navy leading-none">&lt; 26</span>
                  <span className="text-[10px] font-bold text-slate-600">Days</span>
                </div>
                <span className="text-[8px] text-slate-400">Industry: 48 Days</span>
              </div>
            </div>

            {/* Bottom-Right Floating Card: Net Collections Lift */}
            <div className="absolute bottom-2 -right-2 sm:-right-4 p-3 rounded-2xl spatial-pill clay-mint z-20 shadow-xl animate-spatial-float flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl spatial-icon flex items-center justify-center text-mint-500 shrink-0">
                <DollarSign className="w-4 h-4 text-mint-500" />
              </div>
              <div>
                <span className="text-[9px] font-semibold text-slate-500 block leading-tight">Net Collections</span>
                <span className="text-lg font-black text-mint-500 leading-none block">+35% Lift</span>
                <span className="text-[8px] text-slate-400">Within 90 Days</span>
              </div>
            </div>

            {/* Top-Left Floating Badge: $250M+ Claims */}
            <div className="absolute top-10 -left-2 sm:-left-4 p-2.5 rounded-2xl spatial-pill clay-azure z-20 shadow-lg hidden sm:flex items-center gap-2 animate-spatial-float-rev">
              <div className="w-7 h-7 rounded-lg bg-mint-50 spatial-icon flex items-center justify-center text-mint-500 font-bold text-xs">
                $
              </div>
              <div>
                <p className="text-[10px] font-bold text-navy leading-tight">$250M+ Claims</p>
                <p className="text-[8px] text-slate-500">Processed Annually</p>
              </div>
            </div>

            {/* Bottom Centered HIPAA Compliance Seal */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-2xl spatial-dark text-white z-30 shadow-xl flex items-center gap-2 whitespace-nowrap">
              <Lock className="w-3 h-3 text-mint" />
              <span className="text-[10px] font-bold">HIPAA &amp; HITECH Compliant</span>
              <CheckCircle2 className="w-3 h-3 text-mint" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
