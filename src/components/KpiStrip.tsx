import React from 'react';
import { Award, DollarSign, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { EHR_PLATFORMS } from '../data/billingData';

export const KpiStrip: React.FC = () => {
  const kpis = [
    {
      stat: "15+ Years",
      label: "Medical Billing Excellence",
      desc: "Proven revenue recovery leadership since 2009",
      icon: Award,
      accent: "text-azure-600",
      bgAccent: "bg-azure-50"
    },
    {
      stat: "$250M+",
      label: "Claims Processed Annually",
      desc: "High-volume precision EDI processing power",
      icon: DollarSign,
      accent: "text-azure-600",
      bgAccent: "bg-cyan-50"
    },
    {
      stat: "98.7%",
      label: "Clean Claim Acceptance Rate",
      desc: "Industry-leading first-pass clearinghouse approval",
      icon: CheckCircle2,
      accent: "text-mint-500",
      bgAccent: "bg-emerald-50"
    },
    {
      stat: "35% Avg.",
      label: "Revenue Increase in 90 Days",
      desc: "Rapid cash flow velocity and denial reduction",
      icon: TrendingUp,
      accent: "text-indigo-600",
      bgAccent: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-azure-600 mb-1">
            National Healthcare Track Record
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
            Trusted by over 1,200+ Physicians, Clinics, and ASCs Nationwide
          </h2>
        </div>

        {/* 4 Raised Neu-Glass KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {kpis.map((kpi, idx) => {
            const IconComponent = kpi.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl neu-glass-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 rounded-2xl neu-glass-icon flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className={`w-5 h-5 ${kpi.accent}`} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 font-mono neu-glass-pill px-2 py-0.5 rounded-full">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-1">
                    {kpi.stat}
                  </h3>
                  <h4 className="text-xs font-bold text-slate-700 mb-1.5 leading-snug">
                    {kpi.label}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                    {kpi.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* EHR Platform Strip with Recessed Neu-Glass Tray */}
        <div className="p-4 sm:p-5 rounded-3xl neu-glass-inset">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 shrink-0 text-center md:text-left">
              <div className="w-8 h-8 rounded-xl neu-glass-icon flex items-center justify-center text-azure-600">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-navy">Direct EHR/EMR Integration</h4>
                <p className="text-[10px] text-slate-500">We work directly inside your existing platform with zero migration hassle</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5">
              {EHR_PLATFORMS.map((platform, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-700 neu-glass-pill hover:text-azure-600 transition-colors"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
