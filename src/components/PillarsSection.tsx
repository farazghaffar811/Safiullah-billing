import React from 'react';
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
    <section id="why-ehcs" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Why Choose Elite Health Care Services (EHCS)
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">
            We Are Your Dedicated <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 to-cyan-600 bg-clip-text text-transparent">
              Billing &amp; RCM Specialists
            </span>
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            We combine modern healthcare billing intelligence with genuine human attention, ensuring each decision protects your practice's cash flow and patient relationships.
          </p>
        </div>

        {/* 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {PILLARS.map((pillar) => {
            const IconComponent = getIcon(pillar.iconName);
            return (
              <div
                key={pillar.id}
                className="p-6 sm:p-7 rounded-3xl glass-panel flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-azure-600 to-cyan-400 p-0.5 shadow-sm">
                      <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-azure-600">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="text-2xl font-black text-slate-300">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-navy tracking-tight mb-1.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold text-azure-600 mb-3">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5 font-normal">
                    {pillar.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2 mb-6">
                    {pillar.bulletPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mint-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 leading-snug">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Highlight Stat */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-navy">{pillar.stat}</span>
                    <p className="text-[10px] font-semibold text-slate-500">{pillar.statLabel}</p>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="w-8 h-8 rounded-full bg-azure-50 hover:bg-azure-600 text-azure-600 hover:text-white flex items-center justify-center transition-colors"
                    aria-label={`Learn more about ${pillar.title}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="text-center">
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-azure-600 hover:text-azure-700 transition-colors"
          >
            <span>See how EHCS outperforms conventional in-house billing teams</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
