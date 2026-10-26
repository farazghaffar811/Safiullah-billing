import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[480px] h-[480px] bg-azure-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-capsule border-azure-200/80 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-azure-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-azure-600">
              Verified Physician Success Stories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-5">
            Trusted by Doctors. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-azure-600 to-cyan-500 bg-clip-text text-transparent">
              Validated by Results.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Read how medical practices, interventional cardiologists, and ambulatory surgery centers achieved lasting financial recovery with EHCS.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-12 rounded-3xl glass-panel shadow-[0_20px_50px_rgba(6,27,80,0.08)] border-white/85 bg-white/85 relative"
            >
              {/* Quote Icon & Metric Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-azure-50 text-azure-600 flex items-center justify-center">
                    <Quote className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-mint-50 border border-mint-100 px-3.5 py-1.5 rounded-full">
                  <TrendingUp className="w-4 h-4 text-mint-500" />
                  <div>
                    <span className="text-xs font-black text-navy mr-1">
                      {TESTIMONIALS[currentIndex].metric}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold">
                      {TESTIMONIALS[currentIndex].metricLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-lg sm:text-2xl font-medium text-navy leading-relaxed mb-8 italic">
                "{TESTIMONIALS[currentIndex].quote}"
              </p>

              {/* Author & Facility Details */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar text badge */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-navy to-azure-900 text-white font-bold text-sm flex items-center justify-center shadow-md">
                    {TESTIMONIALS[currentIndex].avatarText}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy flex items-center gap-1.5">
                      <span>{TESTIMONIALS[currentIndex].author}</span>
                      <CheckCircle2 className="w-4 h-4 text-azure-600" />
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {TESTIMONIALS[currentIndex].title}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    {TESTIMONIALS[currentIndex].facility}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {TESTIMONIALS[currentIndex].location}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls (Arrows & Dots) */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex 
                      ? 'w-8 bg-azure-600' 
                      : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full glass-panel hover:bg-white text-navy flex items-center justify-center border-white/80 shadow-sm transition-all focus:outline-none"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full glass-panel hover:bg-white text-navy flex items-center justify-center border-white/80 shadow-sm transition-all focus:outline-none"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
