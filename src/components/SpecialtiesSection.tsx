import React, { useState, useMemo } from 'react';
import { 
  Stethoscope, 
  Search, 
  ArrowRight, 
  Tag
} from 'lucide-react';
import { SPECIALTIES } from '../data/billingData';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForAudit?: (specialtyName: string) => void;
  onOpenAuditModal: () => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ 
  onSelectSpecialtyForAudit,
  onOpenAuditModal 
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'surgical' | 'primary' | 'diagnostics'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Specialties', count: 22 },
    { id: 'surgical', label: 'Surgical & Facility', count: 8 },
    { id: 'primary', label: 'Primary & Chronic', count: 7 },
    { id: 'diagnostics', label: 'Diagnostics & Therapy', count: 7 },
  ];

  const filteredSpecialties = useMemo(() => {
    return SPECIALTIES.filter((item) => {
      let matchesTab = true;
      if (activeTab === 'all') {
        matchesTab = true;
      } else if (activeTab === 'diagnostics') {
        matchesTab = item.category === 'diagnostics' || item.category === 'therapy';
      } else {
        matchesTab = item.category === activeTab;
      }

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
    <section id="specialties" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-glass-pill mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Cross-Disciplinary Medical Billing
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-3">
            Specialized Expertise for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 via-azure-500 to-cyan-500 bg-clip-text text-transparent">
              22 Healthcare Disciplines
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Every clinical specialty operates with unique modifier guidelines, CPT nuances, and payer fee schedules. Our AAPC-certified specialists protect every dollar.
          </p>
        </div>

        {/* Filter Bar with Recessed Neumorphic Track & Carved Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-8 p-2 rounded-3xl spatial-inset">
          
          {/* Segmented Control Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive 
                      ? 'spatial-pill clay-azure text-azure-600 shadow-sm' 
                      : 'text-slate-600 hover:text-navy hover:bg-white/40'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-azure-50 text-azure-700 font-bold' : 'bg-slate-200/60 text-slate-500'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Carved/Sunken Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search specialty or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl neu-glass-input placeholder-slate-400 text-slate-700"
            />
          </div>
        </div>

        {/* 22 Specialties Cards Grid in Raised Spatial Clay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {filteredSpecialties.map((spec) => (
            <div
              key={spec.id}
              className="p-5 sm:p-6 rounded-3xl spatial-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-azure-700 spatial-pill px-2.5 py-0.5 rounded-full">
                    {spec.categoryLabel}
                  </span>
                  <span className="text-[11px] font-black text-mint-500 spatial-pill clay-mint px-2 py-0.5 rounded-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                    {spec.cleanClaimRate} Clean
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy tracking-tight mb-1.5">
                  {spec.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3 font-normal">
                  {spec.description}
                </p>

                {/* Codes Tray */}
                <div className="mb-3 p-2.5 rounded-2xl spatial-inset">
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    <Tag className="w-3 h-3 text-slate-400" />
                    <span>Coding Focus</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {spec.codes.map((code, cIdx) => (
                      <span 
                        key={cIdx}
                        className="text-[10px] font-mono font-medium text-slate-700 spatial-pill px-2 py-0.5 rounded"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>

                {/* EHCS Billing Advantage in Raised Pill */}
                <div className="p-2.5 rounded-2xl spatial-pill clay-azure mb-4">
                  <span className="text-[9px] font-bold text-azure-600 uppercase tracking-wider block mb-0.5">
                    EHCS Advantage
                  </span>
                  <p className="text-xs font-semibold text-slate-700 leading-snug">
                    {spec.keyHighlight}
                  </p>
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium">AAPC Certified</span>
                <button
                  type="button"
                  onClick={() => handleAuditClick(spec.name)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-azure-600 hover:text-azure-700 spatial-button px-2.5 py-1 rounded-xl transition-all"
                >
                  <span>Audit Specialty</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredSpecialties.length === 0 && (
          <div className="text-center py-8 p-6 rounded-3xl neu-glass-card-static max-w-sm mx-auto">
            <p className="text-xs text-slate-600 mb-2">No matching specialty found for "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
              className="text-xs font-bold text-azure-600 hover:underline"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
