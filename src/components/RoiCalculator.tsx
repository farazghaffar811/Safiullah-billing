import React, { useState, useMemo } from 'react';
import { Calculator, DollarSign, TrendingUp, Clock, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenAuditModalWithData?: (data: { volume: number; denialRate: number }) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAuditModalWithData }) => {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(200000);
  const [denialRate, setDenialRate] = useState<number>(12);

  const presets = [
    { label: "$75K/mo", value: 75000 },
    { label: "$150K/mo", value: 150000 },
    { label: "$350K/mo", value: 350000 },
    { label: "$750K/mo", value: 750000 },
    { label: "$1.2M/mo", value: 1200000 },
  ];

  const calculations = useMemo(() => {
    const annualVolume = monthlyVolume * 12;
    const annualDeniedGross = annualVolume * (denialRate / 100);
    const estimatedAnnualLost = annualDeniedGross * 0.65;
    const projectedAnnualRecovery = estimatedAnnualLost * 0.82;
    const monthlyRecovery = projectedAnnualRecovery / 12;

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
    <section id="roi-calculator" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3">
            <Calculator className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Interactive Practice Revenue Simulator
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-3">
            Calculate Your Practice's <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 to-mint-500 bg-clip-text text-transparent">
              Hidden Revenue Recovery
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Adjust your monthly billing volume and current denial rate to see how much stalled cash flow EHCS can recover for your healthcare practice every year.
          </p>
        </div>

        {/* 2-Column Glassmorphism Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl glass-card-static flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step 1: Practice Metrics
                </span>
                <span className="text-[10px] font-bold text-azure-600 bg-azure-50 px-2 py-0.5 rounded-full">
                  Live Calculator
                </span>
              </div>

              {/* Slider 1: Monthly Practice Volume */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="volume-slider" className="text-xs font-bold text-navy">
                    Monthly Billing Volume
                  </label>
                  <span className="text-lg font-black text-azure-600 font-mono">
                    {formatCurrency(monthlyVolume)}
                  </span>
                </div>

                <input
                  id="volume-slider"
                  type="range"
                  min={25000}
                  max={1500000}
                  step={25000}
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  aria-label="Monthly Billing Volume"
                />

                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                  <span>$25K (Solo)</span>
                  <span>$750K (Group)</span>
                  <span>$1.5M+ (ASC/Facility)</span>
                </div>

                {/* Presets */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {presets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setMonthlyVolume(preset.value)}
                      className={`text-[11px] px-2.5 py-1 rounded-full font-semibold transition-all ${
                        monthlyVolume === preset.value
                          ? 'bg-azure-600 text-white shadow-xs'
                          : 'bg-white/80 hover:bg-white text-slate-600 border border-slate-200/50'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 2: Current Denial Rate */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <label htmlFor="denial-slider" className="text-xs font-bold text-navy block">
                      Current Denial Rate
                    </label>
                    <span className="text-[10px] text-slate-400 font-normal">
                      National average across specialties: 12% - 15%
                    </span>
                  </div>
                  <span className="text-lg font-black text-navy font-mono">
                    {denialRate}%
                  </span>
                </div>

                <input
                  id="denial-slider"
                  type="range"
                  min={3}
                  max={25}
                  step={1}
                  value={denialRate}
                  onChange={(e) => setDenialRate(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  aria-label="Current Denial Rate"
                />

                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                  <span>3% (Elite)</span>
                  <span>12% (Nat'l Avg)</span>
                  <span>25% (Critical Drag)</span>
                </div>
              </div>
            </div>

            {/* Reassurance Note */}
            <div className="p-3 rounded-2xl bg-azure-50/70 border border-azure-100 flex items-start gap-2.5 mt-2">
              <ShieldCheck className="w-4 h-4 text-azure-600 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Calibrated against EHCS historical performance across 1,200+ practices and AAPC industry benchmarks.
              </p>
            </div>
          </div>

          {/* Results Column (Right: VisionOS Midnight Glass Display) */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl glass-card-dark text-white flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-azure-300">
                    EHCS Financial Impact Model
                  </span>
                  <h3 className="text-base font-bold text-white">Projected Practice Gains</h3>
                </div>
                <span className="bg-mint-500/20 text-mint font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-mint/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                  SLA Guaranteed
                </span>
              </div>

              {/* Main Recovery Metric */}
              <div className="p-5 rounded-2xl bg-white/10 border border-white/15 mb-4">
                <span className="text-[10px] font-semibold text-azure-200 uppercase tracking-wider">
                  Projected Annual Revenue Recovery
                </span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {formatCurrency(calculations.projectedAnnualRecovery)}
                  </span>
                  <span className="text-xs font-bold text-mint">/ year</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1 font-medium">
                  Approximately <strong className="text-white">{formatCurrency(calculations.monthlyRecovery)}</strong> recovered each month.
                </p>
              </div>

              {/* 2-Column Metrics */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-300 block mb-0.5">Annual Lost Revenue</span>
                  <span className="text-lg font-bold text-red-400">
                    {formatCurrency(calculations.estimatedAnnualLost)}
                  </span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">At {denialRate}% denial rate</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-300 block mb-0.5">Days in A/R</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-mint">
                      {calculations.currentDar} &rarr; {calculations.targetDar}
                    </span>
                    <span className="text-[10px] text-slate-300">Days</span>
                  </div>
                  <span className="text-[9px] text-slate-400 block mt-0.5">~{calculations.darReduction} days faster cash</span>
                </div>
              </div>

              {/* Feature Points */}
              <div className="space-y-1.5 mb-5 text-[11px] text-slate-200">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-mint shrink-0" />
                  <span>98.7% clean claims eliminate recurring denial write-offs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-mint shrink-0" />
                  <span>24-hr denial appeal submission guarantee</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={handleClaimAudit}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-azure-500 to-azure-600 hover:from-azure-400 hover:to-azure-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-azure-600/30 transition-all flex items-center justify-center gap-1.5 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Claim Your Detailed Practice Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
