import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, TrendingUp, Clock, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenAuditModalWithData?: (data: { volume: number; denialRate: number }) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAuditModalWithData }) => {
  // State for volume and denial rate
  const [monthlyVolume, setMonthlyVolume] = useState<number>(200000);
  const [denialRate, setDenialRate] = useState<number>(12); // in percentage

  // Presets
  const presets = [
    { label: "$75K/mo", value: 75000 },
    { label: "$150K/mo", value: 150000 },
    { label: "$350K/mo", value: 350000 },
    { label: "$750K/mo", value: 750000 },
    { label: "$1.2M/mo", value: 1200000 },
  ];

  // Dynamic calculations
  const calculations = useMemo(() => {
    const annualVolume = monthlyVolume * 12;
    // Current annual lost to denials (average 60% of denied claims get written off or uncollected)
    const annualDeniedGross = annualVolume * (denialRate / 100);
    const estimatedAnnualLost = annualDeniedGross * 0.65;

    // With EHCS, clean claim rate is 98.7% (denial rate drops to ~1.3% - 2.5%)
    // EHCS recovers ~85% of previously lost uncollected dollars
    const projectedAnnualRecovery = estimatedAnnualLost * 0.82;
    
    // Monthly cash flow velocity increase
    const monthlyRecovery = projectedAnnualRecovery / 12;

    // DAR reduction: from 48-52 days down to ~24-26 days
    const currentDar = Math.min(54, Math.round(38 + (denialRate * 0.8)));
    const targetDar = 24;
    const darReduction = currentDar - targetDar;

    return {
      annualVolume,
      estimatedAnnualLost: Math.round(estimatedAnnualLost),
      projectedAnnualRecovery: Math.round(projectedAnnualRecovery),
      monthlyRecovery: Math.round(monthlyRecovery),
      currentDar,
      targetDar,
      darReduction
    };
  }, [monthlyVolume, denialRate]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleClaimAudit = () => {
    if (onOpenAuditModalWithData) {
      onOpenAuditModalWithData({ volume: monthlyVolume, denialRate });
    }
  };

  return (
    <section id="roi-calculator" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-br from-azure-400/15 via-mint/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-400/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-capsule border-azure-200/80 mb-4">
            <Calculator className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Interactive Practice Revenue Simulator
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-5">
            Calculate Your Practice's <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 to-mint-500 bg-clip-text text-transparent">
              Hidden Revenue Recovery
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Adjust your monthly billing volume and current denial rate to see how much stalled cash flow EHCS can recover for your healthcare practice every year.
          </p>
        </div>

        {/* Main Apple Glassmorphism Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-7 sm:p-9 rounded-3xl glass-panel border-white/80 flex flex-col justify-between shadow-[0_15px_45px_rgba(6,27,80,0.06)]"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <span className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Step 1: Configure Practice Metrics
                </span>
                <span className="text-xs font-semibold text-azure-600 bg-azure-50 px-2.5 py-1 rounded-full border border-azure-100">
                  Live Model
                </span>
              </div>

              {/* Slider 1: Monthly Practice Billing Volume */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="volume-slider" className="text-sm font-bold text-navy">
                    Monthly Practice Billing Volume
                  </label>
                  <span className="text-xl font-extrabold text-azure-600 font-mono">
                    {formatCurrency(monthlyVolume)}
                  </span>
                </div>

                {/* Range Input */}
                <input
                  id="volume-slider"
                  type="range"
                  min={25000}
                  max={1500000}
                  step={25000}
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  aria-label="Monthly Practice Billing Volume"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                  <span>$25K/mo (Solo)</span>
                  <span>$750K/mo (Group)</span>
                  <span>$1.5M+/mo (ASC/Facility)</span>
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {presets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setMonthlyVolume(preset.value)}
                      className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all ${
                        monthlyVolume === preset.value
                          ? 'bg-azure-600 text-white shadow-sm shadow-azure-500/30'
                          : 'bg-white/80 hover:bg-white text-slate-600 border border-slate-200/60'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 2: Current Denial Rate */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <label htmlFor="denial-slider" className="text-sm font-bold text-navy block">
                      Current Claims Denial Rate
                    </label>
                    <span className="text-[11px] text-slate-500 font-normal">
                      National average denial rate across specialties is 12% - 15%
                    </span>
                  </div>
                  <span className="text-xl font-extrabold text-navy font-mono">
                    {denialRate}%
                  </span>
                </div>

                {/* Range Input */}
                <input
                  id="denial-slider"
                  type="range"
                  min={3}
                  max={25}
                  step={1}
                  value={denialRate}
                  onChange={(e) => setDenialRate(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  aria-label="Current Claims Denial Rate"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                  <span>3% (Elite)</span>
                  <span>12% (Nat'l Avg)</span>
                  <span>25% (High Drag)</span>
                </div>
              </div>
            </div>

            {/* Helper reassurance note */}
            <div className="p-4 rounded-2xl bg-azure-50/70 border border-azure-100 flex items-start gap-3 mt-4">
              <ShieldCheck className="w-5 h-5 text-azure-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Calculations calibrated against actual EHCS historical performance across 1,200+ practices and AAPC industry benchmarks.
              </p>
            </div>
          </motion.div>

          {/* Results Column (Right: VisionOS Midnight / Glass Display) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-7 sm:p-9 rounded-3xl glass-card-dark text-white flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Ambient specular light inside dark card */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-azure-500/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-azure-300">
                    EHCS Financial Impact Model
                  </span>
                  <h3 className="text-lg font-bold text-white">Projected Practice Gains</h3>
                </div>
                <span className="bg-mint-500/20 text-mint font-bold text-xs px-3 py-1 rounded-full border border-mint/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint animate-ping" />
                  Guaranteed SLA
                </span>
              </div>

              {/* Main Recovery Metric */}
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md mb-6">
                <span className="text-xs font-semibold text-azure-200 uppercase tracking-wider">
                  Projected Annual Revenue Recovery
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {formatCurrency(calculations.projectedAnnualRecovery)}
                  </span>
                  <span className="text-xs font-bold text-mint">/ year</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 font-medium">
                  Approximately <strong className="text-white">{formatCurrency(calculations.monthlyRecovery)}</strong> recovered each month back into practice operations.
                </p>
              </div>

              {/* Secondary Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] text-slate-300 block mb-1">Annual Lost Revenue (Current)</span>
                  <span className="text-xl font-bold text-red-400">
                    {formatCurrency(calculations.estimatedAnnualLost)}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">At {denialRate}% denial rate</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] text-slate-300 block mb-1">Days in A/R Reduction</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-mint">
                      {calculations.currentDar} &rarr; {calculations.targetDar}
                    </span>
                    <span className="text-[10px] text-slate-300">Days</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1">~{calculations.darReduction} days faster cash</span>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-mint shrink-0" />
                  <span>98.7% clean claims guarantee eliminates recurring denial leaks</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-mint shrink-0" />
                  <span>Daily automated clearinghouse transmission &amp; 24-hr denial appeals</span>
                </div>
              </div>
            </div>

            {/* CTA inside calculator */}
            <button
              type="button"
              onClick={handleClaimAudit}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-azure-500 to-azure-600 hover:from-azure-400 hover:to-azure-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-azure-600/30 hover:shadow-azure-500/50 transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Claim Your Detailed Practice Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
