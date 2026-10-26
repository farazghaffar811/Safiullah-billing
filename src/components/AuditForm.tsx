import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Lock, 
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      if (onSuccess) {
        setTimeout(onSuccess, 2500);
      }
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="p-6 sm:p-8 rounded-3xl glass-card-static text-center flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-2xl bg-mint-50 border border-mint-100 text-mint-500 flex items-center justify-center mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <span className="text-[10px] font-bold uppercase tracking-wider text-azure-600 bg-azure-50 px-2.5 py-0.5 rounded-full mb-2">
          Audit Request Received
        </span>

        <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mb-2">
          Thank You, {formData.fullName}!
        </h3>

        <p className="text-xs text-slate-600 max-w-sm leading-relaxed mb-4">
          Your confidential practice audit request for <strong className="text-navy">{formData.practiceName}</strong> has been assigned to our Senior Billing Director. We will reach out within 2 hours.
        </p>

        <div className="w-full max-w-xs p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-left text-xs space-y-1 mb-4">
          <div className="flex justify-between">
            <span className="text-slate-500">Contact:</span>
            <span className="font-semibold text-navy">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Phone:</span>
            <span className="font-semibold text-navy">{formData.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Specialty:</span>
            <span className="font-semibold text-azure-600 truncate max-w-[150px]">{formData.specialty}</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-500">
          Urgent questions? Call directly: <strong className="text-navy">{COMPANY_INFO.phoneDisplay}</strong>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1 mb-1">
            <User className="w-3.5 h-3.5 text-azure-600" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            placeholder="Dr. Alexander Wright, MD"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-3.5 py-2 rounded-xl text-xs glass-input text-slate-800 ${
              errors.fullName ? 'border-red-400 bg-red-50/30' : ''
            }`}
          />
          {errors.fullName && (
            <span className="text-[10px] text-red-500 font-medium mt-0.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </span>
          )}
        </div>

        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1 mb-1">
            <Building2 className="w-3.5 h-3.5 text-azure-600" />
            <span>Practice / Clinic Name *</span>
          </label>
          <input
            type="text"
            placeholder="Apex Surgical & Medical Institute"
            value={formData.practiceName}
            onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
            className={`w-full px-3.5 py-2 rounded-xl text-xs glass-input text-slate-800 ${
              errors.practiceName ? 'border-red-400 bg-red-50/30' : ''
            }`}
          />
          {errors.practiceName && (
            <span className="text-[10px] text-red-500 font-medium mt-0.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.practiceName}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1 mb-1">
            <Mail className="w-3.5 h-3.5 text-azure-600" />
            <span>Practice Email *</span>
          </label>
          <input
            type="email"
            placeholder="billing@apexmedical.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-3.5 py-2 rounded-xl text-xs glass-input text-slate-800 ${
              errors.email ? 'border-red-400 bg-red-50/30' : ''
            }`}
          />
          {errors.email && (
            <span className="text-[10px] text-red-500 font-medium mt-0.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </span>
          )}
        </div>

        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1 mb-1">
            <Phone className="w-3.5 h-3.5 text-azure-600" />
            <span>Direct Phone Number *</span>
          </label>
          <input
            type="tel"
            placeholder="(555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-3.5 py-2 rounded-xl text-xs glass-input text-slate-800 ${
              errors.phone ? 'border-red-400 bg-red-50/30' : ''
            }`}
          />
          {errors.phone && (
            <span className="text-[10px] text-red-500 font-medium mt-0.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1 mb-1">
            <Stethoscope className="w-3.5 h-3.5 text-azure-600" />
            <span>Medical Specialty *</span>
          </label>
          <select
            value={formData.specialty}
            onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
            className="w-full px-3 py-2 rounded-xl text-xs glass-input text-slate-800 bg-white"
          >
            {SPECIALTIES.map((spec) => (
              <option key={spec.id} value={spec.name}>
                {spec.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-bold text-navy flex items-center gap-1 mb-1">
            <DollarSign className="w-3.5 h-3.5 text-azure-600" />
            <span>Monthly Billing Volume *</span>
          </label>
          <select
            value={formData.billingVolume}
            onChange={(e) => setFormData({ ...formData, billingVolume: e.target.value })}
            className="w-full px-3 py-2 rounded-xl text-xs glass-input text-slate-800 bg-white"
          >
            <option value="<$50k">&lt; $50,000 / month (Emerging Clinic)</option>
            <option value="$50k-$150k">$50,000 - $150,000 / month (Standard Practice)</option>
            <option value="$150k-$500k">$150,000 - $500,000 / month (Multi-Physician)</option>
            <option value="$500k+">$500,000+ / month (High-Volume Facility/ASC)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-navy flex items-center gap-1 mb-1">
          <Layers className="w-3.5 h-3.5 text-azure-600" />
          <span>Current EHR / Billing Software</span>
        </label>
        <select
          value={formData.ehrSoftware}
          onChange={(e) => setFormData({ ...formData, ehrSoftware: e.target.value })}
          className="w-full px-3 py-2 rounded-xl text-xs glass-input text-slate-800 bg-white"
        >
          {EHR_PLATFORMS.map((ehr, idx) => (
            <option key={idx} value={ehr}>{ehr}</option>
          ))}
          <option value="Other">Other EHR Platform</option>
        </select>
      </div>

      <div>
        <label className="text-xs font-bold text-navy flex items-center gap-1 mb-1">
          <MessageSquare className="w-3.5 h-3.5 text-azure-600" />
          <span>Practice Notes / Billing Challenges (Optional)</span>
        </label>
        <textarea
          rows={2}
          placeholder="E.g., high denial rate on surgical modifiers, aging A/R over 90 days, or credentialing needs..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full px-3.5 py-1.5 rounded-xl text-xs glass-input text-slate-800 resize-none"
        />
      </div>

      <div>
        <label className="flex items-start gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={formData.hipaaConsent}
            onChange={(e) => setFormData({ ...formData, hipaaConsent: e.target.checked })}
            className="mt-0.5 w-3.5 h-3.5 text-azure-600 rounded cursor-pointer"
          />
          <span className="text-[10px] text-slate-600 leading-snug">
            I agree to the Terms of Service &amp; Privacy Policy and authorize EHCS to contact me regarding healthcare billing optimization. (HIPAA Protected).
          </span>
        </label>
        {errors.hipaaConsent && (
          <span className="text-[10px] text-red-500 font-medium block mt-0.5">
            {errors.hipaaConsent}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-azure-600 via-azure-500 to-azure-600 hover:from-azure-500 hover:to-azure-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-azure-500/25 transition-all flex items-center justify-center gap-1.5 active:scale-95 disabled:opacity-75"
      >
        {isSubmitting ? (
          <span>Analyzing Practice Profile...</span>
        ) : (
          <>
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Request Confidential Audit &#10140;</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-0.5">
        <Lock className="w-3 h-3" />
        <span>256-Bit SSL Encrypted • 100% Confidential Practice Assessment</span>
      </div>
    </form>
  );
};
