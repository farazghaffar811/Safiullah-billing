import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Filter,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { SPECIALTIES, SpecialtyItem } from '../data/billingData';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForAudit?: (specialtyName: string) => void;
  onOpenAuditModal: () => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ 
  onSelectSpecialtyForAudit,
  onOpenAuditModal 
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'surgical' | 'primary' | 'diagnostics' | 'therapy'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Specialties', count: 22 },
    { id: 'surgical', label: 'Surgical & Facility', count: 8 },
    { id: 'primary', label: 'Primary & Chronic', count: 7 },
    { id: 'diagnostics', label: 'Diagnostics & Therapy', count: 7 },
  ];

  const filteredSpecialties = useMemo(() => {
    return SPECIALTIES.filter((item) => {
      // Category filter
      let matchesTab = true;
      if (activeTab === 'all') {
        matchesTab = true;
      } else if (activeTab === 'diagnostics') {
        matchesTab = item.category === 'diagnostics' || item.category === 'therapy';
      } else {
        matchesTab = item.category === activeTab;
      }

      // Search filter
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.codes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const handleAuditClick = (specName: string) => {
    if (onSelectSpecialtyForAudit) {
      onSelectSpecialtyForAudit(specName);
    } else {
      onOpenAuditModal();
    }
  };

  return (
    <section id="specialties" className="py-20 sm:py-28 relative">
      {/* Background soft ambient blur */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-azure-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-mint/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-capsule border-azure-200/80 mb-4">
            <Stethoscope className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Cross-Disciplinary Medical Billing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-5">
            Specialized Expertise for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 via-azure-500 to-cyan-500 bg-clip-text text-transparent">
              22 Healthcare Disciplines
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Every clinical specialty operates with unique modifier guidelines, CPT nuances, and payer fee schedules. Our AAPC-certified specialists protect every dollar.
          </p>
        </div>

        {/* Filter Bar & Quick Search (Apple Segmented Control) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-2 sm:p-2.5 rounded-2xl glass-capsule border-white/80 bg-white/70">
          
          {/* Segmented Control Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-azure-600' 
                      : 'text-slate-600 hover:text-navy hover:bg-white/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSpecialtyPill"
                      className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-200/50 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{tab.label}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-azure-100 text-azure-700' : 'bg-slate-100 text-slate-500'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search specialty or CPT code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl glass-input placeholder-slate-400 text-slate-700"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 22 Specialties Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          <AnimatePresence>
            {filteredSpecialties.map((spec, index) => (
              <motion.div
                key={spec.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-7 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between border-white/80 relative group"
              >
                <div>
                  {/* Category Pill & Clean Claim Rate */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-azure-700 bg-azure-50 border border-azure-100 px-2.5 py-0.5 rounded-full">
                      {spec.categoryLabel}
                    </span>
                    <span className="text-xs font-black text-mint-500 bg-mint-50 border border-mint-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                      {spec.cleanClaimRate} Clean
                    </span>
                  </div>

                  {/* Specialty Title */}
                  <h3 className="text-lg font-bold text-navy group-hover:text-azure-600 transition-colors tracking-tight mb-2 flex items-center gap-2">
                    <span>{spec.name}</span>
                  </h3>

                  {/* Clinical Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {spec.description}
                  </p>

                  {/* Key Codes Sample Pills */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      <Tag className="w-3 h-3 text-slate-400" />
                      <span>Coding Protocols &amp; Focus</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {spec.codes.map((code, cIdx) => (
                        <span 
                          key={cIdx}
                          className="text-[11px] font-mono font-medium text-slate-700 bg-slate-100/80 px-2 py-0.5 rounded-md"
                        >
                          {code}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Specialty Highlight */}
                  <div className="p-3 rounded-2xl bg-white/70 border border-slate-200/50 mb-5">
                    <span className="text-[10px] font-bold text-azure-600 uppercase tracking-wider block mb-0.5">
                      EHCS Billing Advantage
                    </span>
                    <p className="text-xs font-semibold text-slate-700 leading-snug">
                      {spec.keyHighlight}
                    </p>
                  </div>
                </div>

                {/* Card CTA Trigger */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">AAPC Certified</span>
                  <button
                    type="button"
                    onClick={() => handleAuditClick(spec.name)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-azure-600 hover:text-azure-700 group/btn transition-colors"
                  >
                    <span>Audit This Specialty</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state if search has no results */}
        {filteredSpecialties.length === 0 && (
          <div className="text-center py-12 p-8 rounded-3xl glass-panel max-w-md mx-auto">
            <Stethoscope className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-navy mb-1">No matching specialty found</h4>
            <p className="text-xs text-slate-500 mb-4">
              We bill for all 22 medical disciplines. Try searching another specialty or reset your query.
            </p>
            <button
              type="button"
              onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-azure-50 text-azure-600 text-xs font-bold hover:bg-azure-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
