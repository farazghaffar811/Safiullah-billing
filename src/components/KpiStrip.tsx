import React from 'react';
import { motion } from 'framer-motion';
import { Award, DollarSign, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { EHR_PLATFORMS } from '../data/billingData';

export const KpiStrip: React.FC = () => {
  const kpis = [
    {
      stat: "15+ Years",
      label: "Medical Billing Excellence",
      desc: "Proven revenue recovery leadership since 2009",
      icon: Award,
      color: "from-blue-500 to-azure-600",
      accent: "text-azure-600",
      bgAccent: "bg-azure-50"
    },
    {
      stat: "$250M+",
      label: "Claims Processed Annually",
      desc: "High-volume precision EDI processing power",
      icon: DollarSign,
      color: "from-azure-500 to-cyan-500",
      accent: "text-azure-600",
      bgAccent: "bg-cyan-50"
    },
    {
      stat: "98.7%",
      label: "Clean Claim Acceptance Rate",
      desc: "Industry-leading first-pass clearinghouse approval",
      icon: CheckCircle2,
      color: "from-emerald-500 to-mint-500",
      accent: "text-mint-500",
      bgAccent: "bg-emerald-50"
    },
    {
      stat: "35% Avg.",
      label: "Revenue Increase in 90 Days",
      desc: "Rapid cash flow velocity and denial reduction",
      icon: TrendingUp,
      color: "from-blue-600 to-indigo-600",
      accent: "text-indigo-600",
      bgAccent: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-azure-600 mb-2">
            National Healthcare Track Record
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
            Trusted by over 1,200+ Physicians, Clinics, and ASCs Nationwide
          </h2>
        </div>

        {/* 4 Frosted Glass KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {kpis.map((kpi, idx) => {
            const IconComponent = kpi.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Subtle top specular sheen */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${kpi.bgAccent} flex items-center justify-center ${kpi.accent} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">KPI 0{idx + 1}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-1">
                    {kpi.stat}
                  </h3>
                  <h4 className="text-sm font-bold text-slate-700 mb-2 leading-snug">
                    {kpi.label}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {kpi.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* EHR / EMR Platforms Compatibility Carousel / Banner */}
        <div className="p-6 sm:p-8 rounded-3xl glass-capsule border-white/80 bg-white/70">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 shrink-0 text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-azure-500/10 text-azure-600 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy">Direct EHR/EMR Integration</h4>
                <p className="text-xs text-slate-500">We work directly inside your existing healthcare platform</p>
              </div>
            </div>

            {/* Platform pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
              {EHR_PLATFORMS.map((platform, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-white/90 border border-slate-200/60 shadow-xs hover:border-azure-400 hover:text-azure-600 transition-colors"
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
