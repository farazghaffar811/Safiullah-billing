import React, { useState } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Sparkles,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { TESTIMONIALS } from '../data/billingData';

const DOCTOR_AVATARS: Record<string, string> = {
  'dr-vance': '/images/doctor-michael-vance.jpg',
  'dr-jenkins': '/images/doctor-sarah-jenkins.jpg',
  'dr-sterling': '/images/doctor-robert-sterling.jpg',
};

const CLIENT_LOGOS = [
  { id: 1, src: '/images/client-1.png', alt: 'Healthcare Partner 1' },
  { id: 2, src: '/images/client-2.png', alt: 'Healthcare Partner 2' },
  { id: 3, src: '/images/client-3.png', alt: 'Healthcare Partner 3' },
  { id: 4, src: '/images/client-4.png', alt: 'Healthcare Partner 4' },
  { id: 5, src: '/images/client-5.png', alt: 'Healthcare Partner 5' },
  { id: 6, src: '/images/client-6.png', alt: 'Healthcare Partner 6' },
  { id: 7, src: '/images/client-7.png', alt: 'Healthcare Partner 7' },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];
  const currentAvatar = DOCTOR_AVATARS[current.id] || '/images/doctor-michael-vance.jpg';

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-glass-pill mb-3">
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
          <div className="p-6 sm:p-9 rounded-3xl spatial-stage clay-azure relative overflow-hidden">
            {/* Ambient subtle glow behind card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-azure-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header Quote & Badge */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-2xl spatial-icon flex items-center justify-center text-azure-600">
                  <Quote className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-0.5 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1.5 spatial-pill clay-mint px-3 py-1 rounded-full shadow-xs">
                <TrendingUp className="w-3.5 h-3.5 text-mint-500" />
                <span className="text-xs font-black text-navy">{current.metric}</span>
                <span className="text-[10px] text-slate-500 font-semibold">{current.metricLabel}</span>
              </div>
            </div>

            {/* Quote Text */}
            <p className="text-base sm:text-lg font-medium text-navy leading-relaxed mb-6 italic relative z-10">
              "{current.quote}"
            </p>

            {/* Author with Real Doctor Avatar Image */}
            <div className="pt-4 border-t border-slate-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="relative shrink-0">
                  <img 
                    src={currentAvatar} 
                    alt={current.author}
                    className="w-12 h-12 rounded-2xl object-cover ring-2 ring-azure-400/30 spatial-icon shadow-md"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-mint-500 text-white flex items-center justify-center text-[9px] font-bold shadow-xs">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy flex items-center gap-1.5">
                    <span>{current.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-azure-600" />
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {current.title}
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right text-xs text-slate-500">
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
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex ? 'w-7 bg-azure-600' : 'w-2.5 bg-slate-300'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full spatial-button text-navy flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full spatial-button text-navy flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Client & Facility Logos Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200/60 max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Trusted by 1,200+ Medical Practices, Diagnostic Clinics &amp; Surgery Centers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-4">
            {CLIENT_LOGOS.map((client) => (
              <div 
                key={client.id}
                className="p-3 rounded-2xl spatial-pill hover:scale-105 transition-all duration-300 flex items-center justify-center bg-white/60"
              >
                <img 
                  src={client.src} 
                  alt={client.alt} 
                  className="h-7 sm:h-8 max-w-[110px] object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};