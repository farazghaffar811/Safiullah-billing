import React, { useState } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { TESTIMONIALS } from '../data/billingData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-3">
            <Sparkles className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Verified Physician Success Stories
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-3">
            Trusted by Doctors. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 to-cyan-500 bg-clip-text text-transparent">
              Validated by Results.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Read how medical practices, interventional cardiologists, and ambulatory surgery centers achieved lasting financial recovery with EHCS.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto">
          <div className="p-6 sm:p-9 rounded-3xl glass-card-static border-white/90 shadow-[0_16px_45px_rgba(6,27,80,0.08)]">
            {/* Header Quote & Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-2xl bg-azure-50 text-azure-600 flex items-center justify-center shadow-xs">
                  <Quote className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-0.5 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-mint-50/90 border border-mint-100 px-3 py-1 rounded-full shadow-xs">
                <TrendingUp className="w-3.5 h-3.5 text-mint-500" />
                <span className="text-xs font-black text-navy">{current.metric}</span>
                <span className="text-[10px] text-slate-500 font-semibold">{current.metricLabel}</span>
              </div>
            </div>

            {/* Quote Text */}
            <p className="text-base sm:text-lg font-medium text-navy leading-relaxed mb-6 italic">
              "{current.quote}"
            </p>

            {/* Author */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-navy text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  {current.avatarText}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy flex items-center gap-1">
                    <span>{current.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-azure-600" />
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {current.title}
                  </p>
                </div>
              </div>

              <div className="text-right text-xs text-slate-500">
                <span className="font-semibold text-slate-700 block">{current.facility}</span>
                <span className="text-[10px] text-slate-400">{current.location}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-5 px-2">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'w-6 bg-azure-600' : 'w-2 bg-slate-200'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-9 h-9 rounded-full glass-pill hover:bg-white text-navy flex items-center justify-center transition-colors shadow-xs"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-9 h-9 rounded-full glass-pill hover:bg-white text-navy flex items-center justify-center transition-colors shadow-xs"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
