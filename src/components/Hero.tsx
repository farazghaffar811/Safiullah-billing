import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glass Aurora Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-azure-400/20 via-sky-300/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute top-1/3 right-5 w-[380px] h-[380px] bg-gradient-to-bl from-cyan-400/15 via-mint/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-float-reverse" />
      <div className="absolute -bottom-10 left-10 w-[420px] h-[420px] bg-gradient-to-br from-azure-600/10 via-navy/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Conversion Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-capsule border-azure-200/80 shadow-sm mb-6"
            >
              <span className="text-azure-600 font-bold text-xs tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-azure-500 fill-azure-500 animate-pulse" />
                24/7 Helping Hands for Your Medical Billing & Practice Needs
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy tracking-tight leading-[1.08] mb-6">
              Streamline Your <span className="bg-gradient-to-r from-azure-600 via-azure-500 to-cyan-500 bg-clip-text text-transparent">Revenue Cycle.</span> <br className="hidden sm:inline" />
              Maximize Practice <span className="text-navy">Cash Flow.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              We eliminate billing bottlenecks, credentialing delays, and uncollected A/R. Partner with <strong className="font-semibold text-navy">Elite Health Care Services (EHCS)</strong> to achieve a <span className="text-azure-600 font-bold">98.7% clean claims rate</span> and guaranteed financial growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="group relative px-7 py-4 rounded-2xl bg-gradient-to-r from-azure-600 via-azure-500 to-azure-600 text-white font-bold text-base shadow-[0_12px_28px_rgba(35,139,238,0.35)] hover:shadow-[0_18px_36px_rgba(35,139,238,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2.5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                <Sparkles className="w-5 h-5 text-white/90" />
                <span>Get a Free Practice Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#specialties"
                className="px-7 py-4 rounded-2xl glass-panel glass-panel-hover text-navy font-bold text-base flex items-center justify-center gap-2 border-white/80 shadow-sm"
              >
                <span>Explore 22 Specialties</span>
                <ChevronRight className="w-4 h-4 text-azure-600" />
              </a>
            </div>

            {/* Quick Proof Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 w-full sm:max-w-xl pt-4 border-t border-slate-200/60">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-navy">{COMPANY_INFO.stats.providers}</span>
                <span className="text-xs text-slate-500 font-medium">Physicians Powered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-mint-500">{COMPANY_INFO.stats.cleanClaims}</span>
                <span className="text-xs text-slate-500 font-medium">Clean Claims Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-azure-600">{COMPANY_INFO.stats.dar}</span>
                <span className="text-xs text-slate-500 font-medium">Avg. Days in A/R</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Apple VisionOS Floating Glass Hero Experience */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Interactive Stage Glass Card */}
            <div className="relative p-6 sm:p-8 rounded-3xl glass-panel shadow-[0_20px_50px_rgba(6,27,80,0.08)] border-white/85 bg-white/75 backdrop-blur-2xl">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-azure-500/10 border border-azure-200/50 flex items-center justify-center text-azure-600 font-bold">
                    <Activity className="w-5 h-5 text-azure-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy leading-snug">Practice Cash Velocity</h3>
                    <p className="text-[11px] text-slate-500 font-medium">Real-Time Performance Feed</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-mint-50 text-mint-500 text-xs font-bold px-2.5 py-1 rounded-full border border-mint-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                  <span>Optimal Flow</span>
                </div>
              </div>

              {/* Card 1: 98.7% Clean Claims Sparkline */}
              <div className="my-5 p-4 rounded-2xl bg-white/80 border border-white/90 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-azure-600" />
                    <span className="text-xs font-bold text-slate-700">First-Pass Clean Claims Rate</span>
                  </div>
                  <span className="text-xs font-black text-mint-500 bg-mint-50 px-2 py-0.5 rounded-md">
                    +14.2% vs Nat'l Avg
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-extrabold text-navy tracking-tight">98.7%</span>
                  <span className="text-xs text-slate-400 font-medium">AAPC Benchmark 90%</span>
                </div>
                
                {/* SVG Sparkline visualization */}
                <div className="h-10 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40">
                    <defs>
                      <linearGradient id="azureGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#238BEE" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#238BEE" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,32 Q30,28 60,22 T120,15 T160,8 T200,4"
                      fill="none"
                      stroke="#238BEE"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,32 Q30,28 60,22 T120,15 T160,8 T200,4 L200,40 L0,40 Z"
                      fill="url(#azureGlow)"
                    />
                    <circle cx="200" cy="4" r="4" fill="#00D084" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Card 2: < 30 Days in A/R */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-2xl bg-white/80 border border-white/90 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-slate-500">Days in A/R (DAR)</span>
                    <Clock className="w-3.5 h-3.5 text-azure-600" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-navy">&lt; 26</span>
                    <span className="text-xs font-bold text-slate-500">Days</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-2">
                    <div className="bg-gradient-to-r from-azure-500 to-mint h-full rounded-full w-[45%]" />
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1">Industry Avg: 48 Days</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/80 border border-white/90 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-slate-500">Net Collections</span>
                    <DollarSign className="w-3.5 h-3.5 text-mint-500" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-mint-500">+35%</span>
                    <span className="text-xs font-bold text-slate-500">Lift</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-2">
                    <div className="bg-mint-500 h-full rounded-full w-[85%]" />
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1">Within first 90 days</span>
                </div>
              </div>

              {/* Card 3: Security & Compliance Seal */}
              <div className="p-3.5 rounded-2xl bg-navy text-white flex items-center justify-between shadow-lg shadow-navy/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-azure-400">
                    <Lock className="w-4 h-4 text-azure-300" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>HIPAA & HITECH Fully Compliant</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-mint" />
                    </h4>
                    <p className="text-[10px] text-white/70">256-Bit TLS Bank-Grade EDI Encryption</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-azure-300 bg-azure-900/60 px-2 py-0.5 rounded-md border border-azure-400/20">
                    Audited
                  </span>
                </div>
              </div>
            </div>

            {/* Specular Floating Decorative Capsule Behind Card */}
            <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl glass-capsule shadow-xl border-white/90 hidden sm:flex items-center gap-3 bg-white/90 animate-float-slow">
              <div className="w-9 h-9 rounded-xl bg-mint-50 flex items-center justify-center text-mint-500 font-black">
                $
              </div>
              <div>
                <p className="text-xs font-bold text-navy">$250M+ Claims Processed</p>
                <p className="text-[10px] text-slate-500">Zero Unresolved Write-Offs</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-4 p-3 rounded-2xl glass-capsule shadow-xl border-white/90 hidden sm:flex items-center gap-2.5 bg-white/90 animate-float-reverse">
              <div className="w-8 h-8 rounded-xl bg-azure-50 flex items-center justify-center text-azure-600 font-bold">
                15+
              </div>
              <div>
                <p className="text-xs font-bold text-navy">15+ Years</p>
                <p className="text-[10px] text-slate-500">Billing Leadership</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
