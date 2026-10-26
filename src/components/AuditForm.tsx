import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Send, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Stethoscope, 
  DollarSign, 
  Layers, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SPECIALTIES, EHR_PLATFORMS, COMPANY_INFO } from '../data/billingData';

interface AuditFormProps {
  initialSpecialty?: string;
  initialVolume?: number;
  initialDenialRate?: number;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const AuditForm: React.FC<AuditFormProps> = ({
  initialSpecialty = "",
  initialVolume,
  initialDenialRate,
  onSuccess,
  isModal = false
}) => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    practiceName: '',
    email: '',
    phone: '',
    specialty: initialSpecialty || SPECIALTIES[0].name,
    billingVolume: initialVolume ? (initialVolume > 500000 ? '$500k+' : initialVolume > 150000 ? '$150k-$500k' : '$50k-$150k') : '$150k-$500k',
    ehrSoftware: EHR_PLATFORMS[0],
    notes: initialDenialRate ? `Estimated denial rate: ${initialDenialRate}%. Looking for RCM acceleration.` : '',
    hipaaConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }
    if (!formData.practiceName.trim()) {
      newErrors.practiceName = 'Practice / clinic name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Practice email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid direct contact number.';
    }
    if (!formData.hipaaConsent) {
      newErrors.hipaaConsent = 'HIPAA authorization is required to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate real-time practice intake verification
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }

      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-10 rounded-3xl glass-panel bg-white/95 text-center flex flex-col items-center justify-center border-white/90 shadow-2xl"
      >
        <div className="w-16 h-16 rounded-3xl bg-mint-50 border border-mint-100 text-mint-500 flex items-center justify-center mb-5 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-azure-600 bg-azure-50 px-3 py-1 rounded-full mb-3">
          Audit Intake Verified &amp; Scheduled
        </span>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-2">
          Thank You, {formData.fullName}!
        </h3>

        <p className="text-sm text-slate-600 max-w-md leading-relaxed mb-6 font-normal">
          Your confidential revenue audit request for <strong className="text-navy">{formData.practiceName}</strong> has been routed to our Senior Billing Director. We will review your specialty ({formData.specialty}) and reach out within 2 hours.
        </p>

        <div className="w-full max-w-sm p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-left text-xs space-y-1.5 mb-6">
          <div className="flex justify-between">
            <span className="text-slate-500">Contact:</span>
            <span className="font-semibold text-navy">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Direct Phone:</span>
            <span className="font-semibold text-navy">{formData.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">EHR Platform:</span>
            <span className="font-semibold text-navy">{formData.ehrSoftware}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Volume Band:</span>
            <span className="font-semibold text-azure-600">{formData.billingVolume}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          Need immediate urgent assistance? Call our direct line: <strong className="text-navy">{COMPANY_INFO.phoneDisplay}</strong>
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 2-Column Grid for Personal & Practice Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1.5 mb-1.5">
            <User className="w-3.5 h-3.5 text-azure-600" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            placeholder="Dr. Alexander Wright, MD"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm glass-input text-slate-800 ${
              errors.fullName ? 'border-red-400 bg-red-50/30' : ''
            }`}
          />
          {errors.fullName && (
            <span className="text-[11px] text-red-500 font-medium mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </span>
          )}
        </div>

        {/* Practice Name */}
        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1.5 mb-1.5">
            <Building2 className="w-3.5 h-3.5 text-azure-600" />
            <span>Practice / Clinic Name *</span>
          </label>
          <input
            type="text"
            placeholder="Apex Surgical & Medical Institute"
            value={formData.practiceName}
            onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm glass-input text-slate-800 ${
              errors.practiceName ? 'border-red-400 bg-red-50/30' : ''
            }`}
          />
          {errors.practiceName && (
            <span className="text-[11px] text-red-500 font-medium mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.practiceName}
            </span>
          )}
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Practice Email */}
        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1.5 mb-1.5">
            <Mail className="w-3.5 h-3.5 text-azure-600" />
            <span>Practice / Work Email *</span>
          </label>
          <input
            type="email"
            placeholder="billing@apexmedical.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm glass-input text-slate-800 ${
              errors.email ? 'border-red-400 bg-red-50/30' : ''
            }`}
          />
          {errors.email && (
            <span className="text-[11px] text-red-500 font-medium mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </span>
          )}
        </div>

        {/* Direct Phone Number */}
        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1.5 mb-1.5">
            <Phone className="w-3.5 h-3.5 text-azure-600" />
            <span>Direct Phone Number *</span>
          </label>
          <input
            type="tel"
            placeholder="(555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm glass-input text-slate-800 ${
              errors.phone ? 'border-red-400 bg-red-50/30' : ''
            }`}
          />
          {errors.phone && (
            <span className="text-[11px] text-red-500 font-medium mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </span>
          )}
        </div>
      </div>

      {/* Specialty Dropdown & Monthly Billing Volume */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Medical Specialty */}
        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1.5 mb-1.5">
            <Stethoscope className="w-3.5 h-3.5 text-azure-600" />
            <span>Practice Medical Specialty *</span>
          </label>
          <select
            value={formData.specialty}
            onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl text-xs sm:text-sm glass-input text-slate-800 bg-white"
          >
            {SPECIALTIES.map((spec) => (
              <option key={spec.id} value={spec.name}>
                {spec.name}
              </option>
            ))}
          </select>
        </div>

        {/* Monthly Billing Volume */}
        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1.5 mb-1.5">
            <DollarSign className="w-3.5 h-3.5 text-azure-600" />
            <span>Monthly Practice Billing Volume *</span>
          </label>
          <select
            value={formData.billingVolume}
            onChange={(e) => setFormData({ ...formData, billingVolume: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl text-xs sm:text-sm glass-input text-slate-800 bg-white"
          >
            <option value="<$50k">&lt; $50,000 / month (Emerging Clinic)</option>
            <option value="$50k-$150k">$50,000 - $150,000 / month (Standard Practice)</option>
            <option value="$150k-$500k">$150,000 - $500,000 / month (Multi-Physician)</option>
            <option value="$500k+">$500,000+ / month (High-Volume Facility/ASC)</option>
          </select>
        </div>
      </div>

      {/* Current EHR Software */}
      <div>
        <label className="text-xs font-bold text-navy flex items-center gap-1.5 mb-1.5">
          <Layers className="w-3.5 h-3.5 text-azure-600" />
          <span>Current EHR / Billing Software</span>
        </label>
        <select
          value={formData.ehrSoftware}
          onChange={(e) => setFormData({ ...formData, ehrSoftware: e.target.value })}
          className="w-full px-3 py-2.5 rounded-xl text-xs sm:text-sm glass-input text-slate-800 bg-white"
        >
          {EHR_PLATFORMS.map((ehr, idx) => (
            <option key={idx} value={ehr}>{ehr}</option>
          ))}
          <option value="Other">Other EHR Platform / Clearinghouse</option>
        </select>
      </div>

      {/* Notes / Message */}
      <div>
        <label className="text-xs font-bold text-navy flex items-center gap-1.5 mb-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-azure-600" />
          <span>Practice Notes / Billing Challenges (Optional)</span>
        </label>
        <textarea
          rows={2}
          placeholder="E.g., high denial rate on surgical modifiers, aging A/R over 90 days, or need credentialing support..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full px-4 py-2 rounded-xl text-xs sm:text-sm glass-input text-slate-800 resize-none"
        />
      </div>

      {/* HIPAA Authorization Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={formData.hipaaConsent}
            onChange={(e) => setFormData({ ...formData, hipaaConsent: e.target.checked })}
            className="mt-0.5 w-4 h-4 rounded text-azure-600 focus:ring-azure-500 border-slate-300 rounded cursor-pointer"
          />
          <span className="text-[11px] text-slate-600 leading-snug">
            I agree to the Terms of Service &amp; Privacy Policy and authorize EHCS to contact me regarding healthcare billing optimization and performance benchmarking. (HIPAA Protected).
          </span>
        </label>
        {errors.hipaaConsent && (
          <span className="text-[11px] text-red-500 font-medium block mt-1">
            {errors.hipaaConsent}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-azure-600 via-azure-500 to-azure-600 hover:from-azure-500 hover:to-azure-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-azure-500/30 hover:shadow-azure-500/50 transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-75"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Analyzing Practice Profile...</span>
          </div>
        ) : (
          <>
            <Sparkles className="w-4 h-4 text-white" />
            <span>Request Confidential Audit &#10140;</span>
          </>
        )}
      </button>

      {/* Security Reassurance */}
      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
        <Lock className="w-3 h-3 text-slate-400" />
        <span>256-Bit SSL Encrypted • 100% Confidential Practice Assessment</span>
      </div>
    </form>
  );
};
