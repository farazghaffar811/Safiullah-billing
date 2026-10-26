import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Activity, 
  FileCheck2, 
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-9">
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

          {/* Right Column: Tactile Neu-Glass Floating Stage with Spatial Depth */}
          <div className="lg:col-span-5 relative">
            
            {/* Raised Spatial Stage Card */}
            <div className="relative p-6 sm:p-7 rounded-3xl spatial-stage">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl spatial-icon flex items-center justify-center text-azure-600">
                    <Activity className="w-5 h-5 text-azure-600" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-navy">Practice Cash Velocity</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Real-Time Performance Feed</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 bg-mint-50 text-mint-500 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-mint-200/60 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                  <span>Optimal Flow</span>
                </span>
              </div>

              {/* Sparkline Recessed Cavity */}
              <div className="my-4 p-4 rounded-2xl spatial-inset">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-azure-600" />
                    <span className="text-xs font-bold text-slate-700">98.7% Clean Claims Rate</span>
                  </div>
                  <span className="text-[10px] font-black text-mint-500 spatial-pill px-2 py-0.5 rounded">
                    +14.2% vs Nat'l Avg
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-extrabold text-navy tracking-tight">98.7%</span>
                  <span className="text-xs text-slate-400">First-Pass Acceptance</span>
                </div>

                {/* Clean SVG Sparkline */}
                <div className="h-9 w-full relative">
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

              {/* 2-Column Raised Metric Pills */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3.5 rounded-2xl spatial-pill clay-azure">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-semibold text-slate-500">Days in A/R</span>
                    <Clock className="w-3.5 h-3.5 text-azure-600" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-navy">&lt; 26</span>
                    <span className="text-xs font-bold text-slate-500">Days</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">Industry Avg: 48 Days</span>
                </div>

                <div className="p-3.5 rounded-2xl spatial-pill clay-mint">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-semibold text-slate-500">Net Collections</span>
                    <DollarSign className="w-3.5 h-3.5 text-mint-500" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-mint-500">+35%</span>
                    <span className="text-xs font-bold text-slate-500">Lift</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">Within 90 Days</span>
                </div>
              </div>

              {/* Security Seal in Dark Spatial Glass */}
              <div className="p-3.5 rounded-2xl spatial-dark text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-azure-300 shadow-xs">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1">
                      <span>HIPAA &amp; HITECH Compliant</span>
                      <CheckCircle2 className="w-3 h-3 text-mint" />
                    </h4>
                    <p className="text-[10px] text-white/70">256-Bit Bank-Grade EDI Encryption</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase text-azure-300 bg-azure-900/60 px-2 py-0.5 rounded border border-azure-400/20 shadow-xs">
                  Certified
                </span>
              </div>
            </div>

            {/* Kinetic Floating Spatial Clay Capsules */}
            <div className="absolute -bottom-4 -left-4 p-3 rounded-2xl spatial-pill clay-azure hidden sm:flex items-center gap-2.5 animate-spatial-float">
              <div className="w-8 h-8 rounded-xl bg-mint-50 spatial-icon flex items-center justify-center text-mint-500 font-black text-xs">
                $
              </div>
              <div>
                <p className="text-xs font-bold text-navy">$250M+ Claims Processed</p>
                <p className="text-[10px] text-slate-500">Zero Unresolved Write-Offs</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-2 p-2.5 rounded-2xl spatial-pill clay-azure hidden sm:flex items-center gap-2 animate-spatial-float-rev">
              <div className="w-7 h-7 rounded-lg spatial-icon flex items-center justify-center text-azure-600 font-bold text-xs">
                15+
              </div>
              <div>
                <p className="text-xs font-bold text-navy">15+ Years</p>
                <p className="text-[10px] text-slate-500">Billing Leadership</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
