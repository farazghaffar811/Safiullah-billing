import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { PILLARS } from '../data/billingData';

interface PillarsSectionProps {
  onOpenAuditModal: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenAuditModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DollarSign': return DollarSign;
      case 'ShieldCheck': return ShieldCheck;
      case 'TrendingUp': return TrendingUp;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="why-ehcs" className="py-20 sm:py-28 relative">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-azure-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-mint/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-capsule border-azure-200/80 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Why Choose Elite Health Care Services (EHCS)
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-6">
            We Are Your Dedicated <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 to-cyan-600 bg-clip-text text-transparent">
              Billing &amp; RCM Specialists
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We combine modern healthcare billing intelligence with genuine human attention, ensuring each decision protects your practice's cash flow and patient relationships.
          </p>
        </div>

        {/* 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {PILLARS.map((pillar, idx) => {
            const IconComponent = getIcon(pillar.iconName);
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 sm:p-9 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between relative overflow-hidden group border-white/80"
              >
                {/* Pillar Header with Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-azure-600 to-cyan-400 p-0.5 shadow-md shadow-azure-500/20 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-azure-600">
                        <IconComponent className="w-7 h-7" />
                      </div>
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-azure-200 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-navy tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold text-azure-600 mb-4">
                    {pillar.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-3 mb-8">
                    {pillar.bulletPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-mint-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 leading-snug font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Highlight Stat Card */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-navy">{pillar.stat}</span>
                    <p className="text-[11px] font-semibold text-slate-500">{pillar.statLabel}</p>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="w-10 h-10 rounded-full bg-azure-50 group-hover:bg-azure-600 text-azure-600 group-hover:text-white flex items-center justify-center transition-colors shadow-xs"
                    aria-label={`Learn more about ${pillar.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="text-center">
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-2 text-sm font-bold text-azure-600 hover:text-azure-700 group transition-colors"
          >
            <span>See how EHCS outperforms conventional in-house billing teams</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
