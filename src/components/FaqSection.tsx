import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/billingData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Clear Answers for Healthcare Providers
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-3">
            Frequently Asked <span className="bg-gradient-to-r from-azure-600 to-cyan-500 bg-clip-text text-transparent">Questions</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Everything you need to know about partnering with EHCS, integrating with your EHR, and our performance guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl glass-card-static overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-navy leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-150 ${isOpen ? 'bg-azure-600 text-white rotate-180' : 'bg-azure-50 text-azure-600'}`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-8 text-center p-4 rounded-2xl glass-card-static">
          <p className="text-xs font-semibold text-slate-700">
            Have a specialized question regarding payer contracts or ASC carve-outs?
          </p>
          <a
            href="tel:+17373587647"
            className="text-xs font-bold text-azure-600 hover:underline mt-0.5 inline-block"
          >
            Speak directly with a Senior Billing Architect: (737) 358-7647
          </a>
        </div>

      </div>
    </section>
  );
};
