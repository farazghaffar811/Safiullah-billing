export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullCopy: string;
  features: string[];
  sla: string;
  deliverables: string;
  iconName: string;
  badge?: string;
}

export interface SpecialtyItem {
  id: string;
  name: string;
  category: 'surgical' | 'primary' | 'diagnostics' | 'therapy';
  categoryLabel: string;
  description: string;
  codes: string[];
  keyHighlight: string;
  cleanClaimRate: string;
}

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  stat: string;
  statLabel: string;
  iconName: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  shortDesc: string;
  description: string;
  sla: string;
  iconName: string;
  focus: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  facility: string;
  location: string;
  avatarText: string;
  metric: string;
  metricLabel: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// 1. ALL 10 CORE SERVICES
export const SERVICES: ServiceItem[] = [
  {
    id: "medical-billing-coding",
    number: "01",
    title: "Medical Billing & Coding",
    shortDesc: "Certified AAPC/AHIMA coders ensuring ICD-10-CM, CPT, and HCPCS precision for maximum compliant reimbursement.",
    fullCopy: "Medical billing and coding involve intricate regulations and coding updates. EHCS simplifies workflows with certified AAPC/AHIMA coders (ICD-10-CM, CPT, HCPCS Level II) to ensure 98.7% clean claims. We continuously update modifier protocols, CCI edits, and payer policies to eliminate down-coding and protect practice revenue.",
    features: [
      "AAPC & AHIMA Certified Senior Medical Coders",
      "Triple-layer CPT & ICD-10-CM Modifier Scrubbing",
      "Daily Claim Batch Processing & Clearinghouse Submission",
      "CCI & NCD/LCD Guideline Compliance Guarantee"
    ],
    sla: "24-48 Hours Turnaround",
    deliverables: "Daily Electronic Submissions & Audit Logs",
    iconName: "FileCheck2",
    badge: "Core Solution"
  },
  {
    id: "rcm",
    number: "02",
    title: "Revenue Cycle Management (RCM)",
    shortDesc: "End-to-end financial operations engineered to capture every dollar from charge entry to ERA reconciliation.",
    fullCopy: "End-to-end RCM designed to capture every dollar. From pre-visit charge capture to secondary claim submissions and ERA payment reconciliation. EHCS oversees every milestone in the billing lifecycle, minimizing financial drag, eradicating billing leaks, and guaranteeing prompt cash flow.",
    features: [
      "End-to-End Charge Entry & Demographic Verification",
      "Automated Primary, Secondary, & Tertiary Submissions",
      "Immediate Electronic Remittance Advice (ERA) Reconciliation",
      "Comprehensive Practice Financial Velocity Analytics"
    ],
    sla: "Daily Continuous Reconciliation",
    deliverables: "Real-time Billing Pipeline & Weekly Cash Dashboards",
    iconName: "Activity",
    badge: "Most Popular"
  },
  {
    id: "eligibility-verification",
    number: "03",
    title: "Eligibility & Real-Time Benefits Verification",
    shortDesc: "Proactive verification of copays, coinsurance, deductibles, and network status 48 hours prior to service.",
    fullCopy: "Verify patient co-pays, deductibles, out-of-pocket maximums, and network status 48 hours prior to service to prevent downstream rejections. We eliminate the leading cause of initial denials by catching inactive policies, lapsed coverage, or prior authorization criteria before the patient ever enters the clinic.",
    features: [
      "48-Hour Pre-Service Verification Protocol",
      "Co-pay, Co-insurance, & Out-of-Pocket Maximum Calculations",
      "Primary & Secondary Coordination of Benefits (COB)",
      "Direct Patient Responsibility Pre-Estimation Sheets"
    ],
    sla: "Completed 48 Hrs Prior to Encounter",
    deliverables: "Patient Co-Pay & Benefit Clearance Manifest",
    iconName: "ShieldCheck"
  },
  {
    id: "credentialing-enrollment",
    number: "04",
    title: "Credentialing & Provider Enrollment Services",
    shortDesc: "Complete management for CAQH, PECOS, Medicare, Medicaid, and commercial payer contracting without lapse.",
    fullCopy: "Full-service management for CAQH, PECOS, Medicare, Medicaid, and commercial payer contracting. Keep your providers enrolled without lapse. Our credentialing team tracks re-attestation windows, negotiates favorable fee schedule baselines, and ensures your newly onboarded clinicians begin billing immediately.",
    features: [
      "CAQH ProView Profile Creation & Re-Attestation",
      "Medicare (PECOS) & State Medicaid Initial & Revalidation",
      "Commercial Payer Contracting & In-Network Fee Schedule Review",
      "Hospital Privilege Applications & Multi-State License Tracking"
    ],
    sla: "Zero Lapsed Re-Attestations Guarantee",
    deliverables: "Provider In-Network Matrix & Expiration Alert Logs",
    iconName: "Award"
  },
  {
    id: "denial-management",
    number: "05",
    title: "Denial Management & Rapid Appeals",
    shortDesc: "Root-cause denial analytics and aggressive 24 to 48-hour resubmissions to recover stalled revenue.",
    fullCopy: "Denied claims drain practice liquidity. EHCS uses root-cause denial analytics and aggressive 24-48 hour resubmissions to recover stalled revenue. We don't just file generic appeals; our clinical coding specialists construct evidence-backed appeal packets with chart notes, payer medical policies, and letter-perfect documentation.",
    features: [
      "Automated Root-Cause Denial Classification (CARC/RARC)",
      "Dedicated 24-48 Hour Re-Filing & Appeal Escalation",
      "Payer Level I, II, & External Review Representation",
      "Denial Prevention Feedback Loop for Practice Staff"
    ],
    sla: "24-48 Hour Denial Resolution Action",
    deliverables: "Root-Cause Denial Matrix & Appeal Recovery Logs",
    iconName: "TrendingUp",
    badge: "Revenue Saver"
  },
  {
    id: "virtual-billing-assistant",
    number: "06",
    title: "Virtual Medical Billing Assistant",
    shortDesc: "Certified remote healthcare billing coordinators managing patient calls, pre-certs, and EHR entry seamlessly.",
    fullCopy: "Certified remote healthcare billing coordinators and front-desk specialists managing patient calls, pre-certifications, and EHR data entry seamlessly. Scale your administrative support without hiring costly local overhead, providing your physical practice staff the freedom to focus entirely on in-person patient care.",
    features: [
      "HIPAA-Compliant Dedicated Front-Desk & Billing Staffing",
      "Phone Answering, Patient Balance Inquiries, & Payment Intake",
      "EHR/EMR Charge Entry & Patient Demographic Scrubbing",
      "Direct Coordination with Clinic Operations Managers"
    ],
    sla: "Dedicated Practice Hours Coverage",
    deliverables: "Daily Administrative Log & Call Activity Metric",
    iconName: "Headphones"
  },
  {
    id: "ar-cleanup-recovery",
    number: "07",
    title: "Accounts Receivable (A/R) Clean-Up & Recovery",
    shortDesc: "Dedicated audit team aggressively pursuing 30, 60, 90, and 120+ day aging accounts receivable to recover write-offs.",
    fullCopy: "Dedicated audit team tackling 30, 60, 90, and 120+ day aging accounts receivable to recover revenue other billers write off. Our tenured A/R specialists review each aged claim, contact payer provider representatives, request supervisor escalations, and systematically resolve timely filing hurdles.",
    features: [
      "Systematic 30, 60, 90, and 120+ Day Aging Ledger Audit",
      "Direct Payer Representative Escalations & Reprocessing",
      "Uncashed Checks & Missing Remittance Identification",
      "Comprehensive Historical Practice Financial Health Audit"
    ],
    sla: "Bi-Weekly Aging Ledger Purge",
    deliverables: "Aging AR Burn-Down Matrix & Recovered Funds Log",
    iconName: "Clock"
  },
  {
    id: "prior-authorization",
    number: "08",
    title: "Prior Authorization & Pre-Certification",
    shortDesc: "Expedited authorizations with direct payer coordination, eliminating scheduling delays for surgeries and imaging.",
    fullCopy: "Expedited authorizations with direct payer coordination, eliminating scheduling delays for surgeries, imaging, and specialty treatments. EHCS interfaces directly with payer medical review teams, submitting targeted clinical justifications, diagnostic reports, and peer-to-peer review scheduling.",
    features: [
      "Fast-Track Pre-Authorization for Surgeries, MRIs, & Biologics",
      "Portal Submissions for CoverMyMeds, Availity, & Payer Portals",
      "Stat Urgent Turnaround for Time-Sensitive Interventions",
      "Peer-to-Peer Clinical Summary Preparation for Physicians"
    ],
    sla: "Same-Day / Under 24-Hr Submission",
    deliverables: "Payer Approval Reference Number & Authorization Document",
    iconName: "CheckCircle2"
  },
  {
    id: "patient-billing-helpdesk",
    number: "09",
    title: "Patient Billing & Inquiry Helpdesk",
    shortDesc: "Clear, transparent patient balance statements and compassionate patient support to maximize collections.",
    fullCopy: "Clear, transparent patient balance statements and compassionate patient support to maximize collections while safeguarding doctor-patient trust. We provide US-based patient service lines with trained financial counselors who explain deductibles, establish structured payment plans, and take secure card payments.",
    features: [
      "Plain-Language Digital & Paper Patient Statements",
      "Toll-Free Patient Billing Hotline with Compassionate Support",
      "Custom Payment Plan Structuring & Credit Card Processing",
      "Soft Dispute Resolution Protecting Practice Reputation"
    ],
    sla: "< 45 Second Average Speed of Answer",
    deliverables: "Monthly Patient Balance Collections Reconciliation",
    iconName: "Users"
  },
  {
    id: "healthcare-web-digital",
    number: "10",
    title: "Healthcare Web Development & Digital Solutions",
    shortDesc: "Modern, HIPAA-compliant patient intake platforms, responsive web design, and digital practice workflows.",
    fullCopy: "Modern, HIPAA-compliant patient intake platforms, mobile-first responsive web design, and digital workflows that enhance practice discovery. We ensure your healthcare practice projects digital authority with SSL-secured appointment request forms, payment portals, and search-optimized medical specialty pages.",
    features: [
      "HIPAA-Compliant Patient Intake & Consent Portals",
      "Ultra-Fast Apple Glassmorphism Practice Web Design",
      "Local SEO Optimization for Top Physician Search Rankings",
      "Direct EHR / EMR Patient Portal Linking & Embeds"
    ],
    sla: "Turnkey Implementation within 3 Weeks",
    deliverables: "Production Web Asset & Technical Maintenance SLA",
    iconName: "Globe"
  }
];

// 2. ALL 22 MEDICAL SPECIALTIES
export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: "asc",
    name: "Ambulatory Surgery Center (ASC) Billing",
    category: "surgical",
    categoryLabel: "Surgical & Facility",
    description: "Facility fee billing, surgical implants, bundled payment rules, multi-procedure fee discounting, and complex ASC coding modifiers.",
    codes: ["Modifier -SG", "CPT 10000-69990", "HCPCS C-Codes", "UB-04 Claim Forms"],
    keyHighlight: "Implant cost capture & Medicare ASC payment group optimization",
    cleanClaimRate: "99.2%"
  },
  {
    id: "mental-health",
    name: "Mental Health & Behavioral Health Billing",
    category: "therapy",
    categoryLabel: "Diagnostics & Therapy",
    description: "Psychotherapy duration codes, telehealth cross-state parity, intake assessments, partial hospitalization, and intensive outpatient billing.",
    codes: ["CPT 90834", "90837", "90791", "Modifier -95 (Telehealth)"],
    keyHighlight: "Time-based billing audit protection & authorization tracking",
    cleanClaimRate: "98.9%"
  },
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    category: "primary",
    categoryLabel: "Primary & Chronic",
    description: "Complex E/M code selection, chronic care management (CCM), transitional care management (TCM), and annual wellness visits.",
    codes: ["CPT 99214/99215", "99490 (CCM)", "99495 (TCM)", "G0438/G0439"],
    keyHighlight: "Risk adjustment HCC coding & preventative visit bundling",
    cleanClaimRate: "99.1%"
  },
  {
    id: "allergy-immunology",
    name: "Allergy and Immunology",
    category: "primary",
    categoryLabel: "Primary & Chronic",
    description: "Venom immunotherapy, multi-antigen preparation, prick skin testing, spirometry, and biologics infusions (Xolair, Nucala).",
    codes: ["CPT 95004", "95165", "95024", "J-Codes for Biologics"],
    keyHighlight: "Vial prep dose calculation & precise antigen billing units",
    cleanClaimRate: "98.5%"
  },
  {
    id: "pathology",
    name: "Pathology",
    category: "diagnostics",
    categoryLabel: "Diagnostics & Therapy",
    description: "Technical vs professional component billing (-26 / -TC modifiers), surgical pathology levels, flow cytometry, and immunohistochemistry.",
    codes: ["CPT 88305", "88342", "88360", "Modifier -26 / -TC"],
    keyHighlight: "Automated split-billing reconciliation & lab clearinghouse links",
    cleanClaimRate: "99.3%"
  },
  {
    id: "oncology",
    name: "Oncology & Infusion Billing",
    category: "surgical",
    categoryLabel: "Surgical & Facility",
    description: "High-cost chemo agents, push vs infusion hours, concurrent hydration, wastage modifier (-JW/-JZ), and prior authorization adherence.",
    codes: ["CPT 96413", "96415", "96372", "Modifier -JW / -JZ"],
    keyHighlight: "Drug wastage tracking & tight 24-hr oral chemo reimbursement",
    cleanClaimRate: "98.8%"
  },
  {
    id: "obgyn",
    name: "Obstetrics & Gynecology (OB/GYN)",
    category: "surgical",
    categoryLabel: "Surgical & Facility",
    description: "Global maternity packages, antepartum visits, colposcopy, ultrasound, hysteroscopy, and laparoscopic surgery claim management.",
    codes: ["CPT 59400", "59510", "58558", "58100"],
    keyHighlight: "Global package split-billing when insurance changes mid-term",
    cleanClaimRate: "98.6%"
  },
  {
    id: "neurology",
    name: "Neurology & Sleep Medicine",
    category: "diagnostics",
    categoryLabel: "Diagnostics & Therapy",
    description: "Routine & ambulatory EEG, EMG/NCS nerve conduction, Botox injections for migraine, and polysomnography scoring.",
    codes: ["CPT 95810", "95886", "95910", "64615 (Botox)"],
    keyHighlight: "Strict documentation compliance for neuro-diagnostic tests",
    cleanClaimRate: "98.7%"
  },
  {
    id: "podiatry",
    name: "Podiatry",
    category: "primary",
    categoryLabel: "Primary & Chronic",
    description: "Routine foot care coverage exceptions (Q modifiers), diabetic orthotics, nail debridement, bunionectomy, and minor foot surgery.",
    codes: ["CPT 11721", "28296", "G0127", "Modifiers -Q7 / -Q8"],
    keyHighlight: "Systemic disease class finding documentation & DME approval",
    cleanClaimRate: "98.4%"
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    category: "primary",
    categoryLabel: "Primary & Chronic",
    description: "Well-child checkups, vaccine administration counseling codes, hearing/vision screening, ADHD behavioral assessments, and EPSDT.",
    codes: ["CPT 90460/90461", "96110", "99381-99385", "99391-99395"],
    keyHighlight: "Vaccine administration code pairing with zero reimbursement leaks",
    cleanClaimRate: "99.4%"
  },
  {
    id: "psychiatry",
    name: "Psychiatry & Substance Abuse",
    category: "therapy",
    categoryLabel: "Diagnostics & Therapy",
    description: "Psychiatric diagnostic evaluations, combined medical E/M and psychotherapy add-ons, addiction recovery medicine, and MAT billing.",
    codes: ["CPT 90792", "99213 + 90833", "H0004", "G2086"],
    keyHighlight: "Add-on psychotherapy code timing & substance abuse parity recovery",
    cleanClaimRate: "98.9%"
  },
  {
    id: "pain-management",
    name: "Pain Management & Interventional Spine",
    category: "surgical",
    categoryLabel: "Surgical & Facility",
    description: "Epidural steroid injections, facet joint nerve blocks, radiofrequency ablation, spinal cord stimulator trials, and fluoroscopic guidance.",
    codes: ["CPT 62322", "64490", "64635", "77003"],
    keyHighlight: "Bilateral modifier accuracy & prior authorization packet defense",
    cleanClaimRate: "98.6%"
  },
  {
    id: "cardiology",
    name: "Cardiology & Vascular",
    category: "diagnostics",
    categoryLabel: "Diagnostics & Therapy",
    description: "Echocardiograms, cardiac catheterization, nuclear stress tests, pacemaker interrogations, and peripheral vascular interventions.",
    codes: ["CPT 93306", "93015", "93458", "93280"],
    keyHighlight: "Multi-vessel modifier management & PET/SPECT tracer reimbursement",
    cleanClaimRate: "99.0%"
  },
  {
    id: "anesthesia",
    name: "Anesthesia",
    category: "surgical",
    categoryLabel: "Surgical & Facility",
    description: "ASA base units + time unit calculations, physical status modifiers (-P1 through -P6), medical direction (-QZ, -QK, -QX), and postoperative blocks.",
    codes: ["CPT 00100-01999", "Modifiers -AA / -QZ", "64447", "Time Reporting"],
    keyHighlight: "Fractional 15-minute unit conversion & relief anesthesiologist handoffs",
    cleanClaimRate: "99.5%"
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology & Endoscopy",
    category: "surgical",
    categoryLabel: "Surgical & Facility",
    description: "Colonoscopy screening vs diagnostic crossover, polypectomy cold snare vs hot biopsy, EGD, and capsule endoscopy.",
    codes: ["CPT 45378", "45385", "43239", "Modifier -33 / -PT"],
    keyHighlight: "Preventative screening to diagnostic conversion without patient deductible shock",
    cleanClaimRate: "98.9%"
  },
  {
    id: "radiology",
    name: "Radiology & Diagnostic Imaging",
    category: "diagnostics",
    categoryLabel: "Diagnostics & Therapy",
    description: "Professional component (-26), 3D rendering add-ons, CT/MRI contrast administration codes, and interventional ultrasound guidance.",
    codes: ["CPT 71250", "74177", "70553", "76700"],
    keyHighlight: "Medical necessity documentation & rapid clearinghouse indexing",
    cleanClaimRate: "99.3%"
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology & Optometry",
    category: "surgical",
    categoryLabel: "Surgical & Facility",
    description: "Eye exam codes (92004/92014) vs general E/M codes, cataract surgery with premium IOLs, intravitreal injections, and visual field exams.",
    codes: ["CPT 66984", "92014", "67028", "92083"],
    keyHighlight: "Right/Left modifier compliance (RT/LT) & surgical co-management (-54/-55)",
    cleanClaimRate: "99.0%"
  },
  {
    id: "urology",
    name: "Urology",
    category: "surgical",
    categoryLabel: "Surgical & Facility",
    description: "Cystoscopy, prostate biopsies, urodynamic testing, lithotripsy for renal calculi, and vasectomy billing.",
    codes: ["CPT 52000", "52601", "55700", "51728"],
    keyHighlight: "Global surgical period bundling exemptions (-58, -78, -79)",
    cleanClaimRate: "98.7%"
  },
  {
    id: "urgent-care",
    name: "Urgent Care Clinics",
    category: "primary",
    categoryLabel: "Primary & Chronic",
    description: "High-volume walk-in episodic billing, minor fracture care, laceration repairs, rapid point-of-care CLIA-waived labs, and S-codes.",
    codes: ["CPT 99203/99213", "12001", "87880", "HCPCS S9088"],
    keyHighlight: "Same-day charge turnaround & high-deductible copay upfront collection",
    cleanClaimRate: "98.8%"
  },
  {
    id: "dermatology",
    name: "Dermatology & Mohs Surgery",
    category: "surgical",
    categoryLabel: "Surgical & Facility",
    description: "Mohs micrographic surgery stage billing, lesion destruction, complex repairs/flaps, biopsy add-ons, and cosmetic vs medical determination.",
    codes: ["CPT 17311", "17312", "11102", "14020"],
    keyHighlight: "Mohs stage & block precision + separate evaluation modifier (-25) defense",
    cleanClaimRate: "99.1%"
  },
  {
    id: "wound-care",
    name: "Wound Care & Hyperbaric",
    category: "therapy",
    categoryLabel: "Diagnostics & Therapy",
    description: "Selective vs non-selective debridement (by depth and sq cm), bio-engineered skin grafts, cellular tissue products, and HBO chamber dive minutes.",
    codes: ["CPT 97597", "11042", "15271", "G0277 (HBO)"],
    keyHighlight: "Surface area measurement verification & Q-code tissue product cost recovery",
    cleanClaimRate: "98.5%"
  },
  {
    id: "workers-comp",
    name: "Workers' Compensation Billing",
    category: "primary",
    categoryLabel: "Primary & Chronic",
    description: "State-specific fee schedule formulas, compulsory medical reports, doctor's first report of injury, adjuster communication, and legal depositions.",
    codes: ["State WC Specific Fee Schedules", "99080", "99456 (QME/AME)"],
    keyHighlight: "Zero timely filing expirations with certified adjuster proof-of-service",
    cleanClaimRate: "98.2%"
  }
];

// 3. THE 3 CORE PILLARS
export const PILLARS: PillarItem[] = [
  {
    id: "pillar-cost-saving",
    number: "01",
    title: "Cost Saving & Zero Overhead",
    tagline: "Cut billing overhead by 40%+ while gaining an army of specialists.",
    description: "In-house billing departments require costly salaries, bonuses, sick leaves, expensive clearinghouse software seats, and continuous re-training. EHCS absorbs 100% of these administrative burdens so every dollar saved expands your clinical bottom line.",
    bulletPoints: [
      "Eliminate $65,000+ per-staff salary, medical benefits, and 401(k) overhead",
      "Zero billing software license fees or clearinghouse transmission expenses",
      "No disruption caused by staff turnover, PTO, or medical maternity leave",
      "Transparent fee structure strictly pegged to actual money collected"
    ],
    stat: "40%+",
    statLabel: "Average Overhead Reduction",
    iconName: "DollarSign"
  },
  {
    id: "pillar-360-solutions",
    number: "02",
    title: "Comprehensive 360° Medical Billing Solutions",
    tagline: "Over 15 years of battle-tested expertise across 22 specialties.",
    description: "We don't just 'send claims.' We execute an airtight revenue ecosystem spanning front-office insurance verification, credentialing re-attestation, AAPC coding audits, aggressive denial reversals, and patient concierge inquiry resolution.",
    bulletPoints: [
      "Deep specialty coding fluency across 22 complex clinical domains",
      "Proactive CAQH, PECOS, and commercial payer credentialing preservation",
      "Relentless pursuit of 60, 90, and 120+ day uncollected aging A/R",
      "Dedicated US-based patient billing hotline upholding doctor reputation"
    ],
    stat: "15+ Yrs",
    statLabel: "Proven Industry Leadership",
    iconName: "ShieldCheck"
  },
  {
    id: "pillar-guaranteed-results",
    number: "03",
    title: "Guaranteed Financial Results & SLA Velocity",
    tagline: "Strict SLAs, sub-30 days in A/R, and guaranteed cash acceleration.",
    description: "We operate with relentless financial accountability. If your practice doesn't see measurable improvements in clean claim velocity and reduced denial rates within 90 days, we hold ourselves accountable with contractual service-level agreements.",
    bulletPoints: [
      "Contractual guarantee of 98%+ first-pass clean claim submission",
      "Reduction of days in A/R (DAR) to under 30 days within 90 days",
      "24-hour turnaround on all payer denials and clinical documentation requests",
      "Weekly transparent KPI reports and monthly executive financial reviews"
    ],
    stat: "< 30 Days",
    statLabel: "Average Days in Accounts Receivable",
    iconName: "TrendingUp"
  }
];

// 4. 6-STEP RCM WORKFLOW
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "Pre-Service Verification",
    shortDesc: "Eligibility, deductible checks, and prior authorization clearance.",
    description: "Our team verifies patient coverage, co-pays, deductibles, and secondary COB 48 hours in advance, securing prior authorization clearances to eliminate upfront front-desk denials.",
    sla: "48-Hour Advance Clearance",
    iconName: "UserCheck",
    focus: "Prevents 80% of preventable front-end rejections"
  },
  {
    step: 2,
    title: "Precision Coding & Auditing",
    shortDesc: "AAPC/AHIMA coders audit charts and apply precise modifiers.",
    description: "Certified medical coders review clinical charts, surgical op-notes, and physician orders, applying correct ICD-10, CPT, HCPCS, and NCCI edit modifiers to stop down-coding.",
    sla: "24-Hour Op-Note Review",
    iconName: "FileSpreadsheet",
    focus: "Protects against under-coding and audit exposure"
  },
  {
    step: 3,
    title: "Scrubbing & Electronic Transmission",
    shortDesc: "Multi-layer scrubbers screen for errors prior to clearinghouse submission.",
    description: "Every claim passes through our proprietary multi-tier rule engine, validating NPIs, taxonomy codes, payer ID variations, and medical necessity before clearinghouse dispatch.",
    sla: "98.7% Clean Pass Rate",
    iconName: "Send",
    focus: "Immediate same-day EDI transmission"
  },
  {
    step: 4,
    title: "Automated Remittance & Payment Posting",
    shortDesc: "Immediate ERA matching, co-insurance reconciliation, and discrepancy alerts.",
    description: "Incoming Electronic Remittance Advices (ERAs) and EFT payments are posted within 24 hours. Any underpayment or allowable discrepancy triggers an immediate review ticket.",
    sla: "Same-Day 24h ERA Posting",
    iconName: "CreditCard",
    focus: "Guarantees dollar-for-dollar bank reconciliation"
  },
  {
    step: 5,
    title: "Denial Eradication & Aging AR Resolution",
    shortDesc: "High-priority denial review within 24 hours and payer escalation.",
    description: "Denials are instantly routed to our appeal specialists. We furnish clinical chart proofs, dispute unlawful downcoding, and place direct supervisor calls to recover funds fast.",
    sla: "24-48 Hour Appeal Filing",
    iconName: "RefreshCw",
    focus: "Zero unresolved write-offs policy"
  },
  {
    step: 6,
    title: "Executive Business Intelligence",
    shortDesc: "Monthly transparent practice audits, payer turnaround tracking, and DAR metrics.",
    description: "Physicians and practice executives receive real-time visibility through intuitive dashboards, tracking monthly collection ratios, DAR trends, payer velocity, and net revenue growth.",
    sla: "24/7 Live Portal Access",
    iconName: "BarChart3",
    focus: "Actionable financial forecasting & KPI governance"
  }
];

// 5. DOCTOR TESTIMONIALS
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "dr-vance",
    quote: "Partnering with Elite Health Care Services turned our financial operations around. Our claims denial rate fell from 14% to under 1.8%, and our monthly collections grew by 32% within 4 months. The transparency and daily communication are world-class.",
    author: "Dr. Michael Vance, MD",
    title: "Internal Medicine Specialist & Managing Partner",
    facility: "Lone Star Medical Associates",
    location: "Austin, Texas",
    avatarText: "MV",
    metric: "+32%",
    metricLabel: "Monthly Collections Increase",
    rating: 5
  },
  {
    id: "dr-jenkins",
    quote: "The credentialing and aging A/R recovery team at EHCS is relentless. They recovered over $140,000 in aging accounts that our previous billing company had marked as uncollectible. Their knowledge of cardiology catheterization and stress echo codes is unmatched.",
    author: "Dr. Sarah Jenkins, DO",
    title: "Lead Cardiologist & Interventional Specialist",
    facility: "Heart & Vascular Institute of North Texas",
    location: "Dallas, Texas",
    avatarText: "SJ",
    metric: "$140K+",
    metricLabel: "Aging A/R Salvaged",
    rating: 5
  },
  {
    id: "dr-sterling",
    quote: "EHCS understands surgical implants, complex coding modifiers, and ASC payer contracts like no one else. Truly an elite billing partner. Our days in accounts receivable dropped from 52 days down to 24 days within the first quarter.",
    author: "Dr. Robert Sterling, MD",
    title: "Ambulatory Surgery Center Director & Orthopedic Surgeon",
    facility: "Apex Surgical Pavilion",
    location: "San Antonio, Texas",
    avatarText: "RS",
    metric: "24 Days",
    metricLabel: "Average Days in A/R Achieved",
    rating: 5
  }
];

// 6. FREQUENTLY ASKED QUESTIONS
export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Can I choose EHCS billing services for both small practices and large multi-specialty clinics?",
    answer: "Yes, absolutely. We tailor our RCM solutions for solo physicians, medium group clinics, and large multi-facility ambulatory surgery centers (ASCs). Whether you generate 200 claims per month or 15,000+, our dedicated account teams scale dynamically to match your clinical volume with zero degradation in turnaround time or clean-claim percentage."
  },
  {
    id: "faq-2",
    category: "Software & Integration",
    question: "What software and EHR/EMR platforms does EHCS support?",
    answer: "We integrate directly with all leading healthcare platforms, including Epic, Kareo, AthenaHealth, eClinicalWorks, AdvancedMD, NextGen, Practice Fusion, Cerner, Allscripts (Veradigm), WebPT, and DrChrono. Because our certified billers log directly into your existing system via encrypted, HIPAA-compliant tunnels, there is no need to migrate your data or retrain your staff."
  },
  {
    id: "faq-3",
    category: "Denial Management",
    question: "How does EHCS handle denied claims?",
    answer: "Denials are categorized by root cause within 24 hours of payer remit. Our AAPC-certified specialists review the CARC/RARC codes, correct coding discrepancies or missing clinical modifiers, attach chart notes, and submit formal Level I/II appeals immediately. We never allow a valid claim to expire due to timely filing deadlines."
  },
  {
    id: "faq-4",
    category: "Transparency & Reports",
    question: "Will I receive regular practice billing performance reports?",
    answer: "Absolutely. We provide weekly transparency summaries and monthly executive dashboard reviews detailing clean claim percentages, average days in accounts receivable (DAR), collections velocity, net collection ratio, and denial root causes. You always maintain 24/7 direct access to your EHR billing ledger."
  },
  {
    id: "faq-5",
    category: "Onboarding & Transition",
    question: "How quickly can our healthcare practice transition to EHCS?",
    answer: "Most practices are fully onboarded within 7 to 14 business days. Our dedicated transition manager coordinates secure system access, reviews payer clearinghouse links, and maps out customized workflow SOPs so there is zero interruption to your daily patient check-ins, charge capture, or ongoing cash flow."
  },
  {
    id: "faq-6",
    category: "Pricing & Contracts",
    question: "How is EHCS compensated, and are there long-term lock-in contracts?",
    answer: "We believe in true performance alignment. Our fee is structured as a small percentage of net practice collections—meaning we only get paid when you get paid. There are no hidden onboarding setup fees, no charges on uncollected claims, and transparent, physician-friendly agreements."
  }
];

// 7. TRUSTED EHR / EMR PLATFORMS
export const EHR_PLATFORMS = [
  "Epic Systems",
  "AthenaHealth",
  "eClinicalWorks",
  "Kareo / Tebra",
  "AdvancedMD",
  "NextGen Healthcare",
  "Practice Fusion",
  "Cerner / Oracle Health",
  "WebPT",
  "Allscripts / Veradigm",
  "DrChrono",
  "Modernizing Medicine (EMA)"
];

// 8. COMPANY CONSTANTS
export const COMPANY_INFO = {
  name: "Elite Health Care Services",
  acronym: "EHCS",
  tagline: "Streamline Your Revenue Cycle with Elite Healthcare Intelligence",
  secondaryMotto: "24/7 Dedicated Revenue Cycle Management & Specialized Medical Billing",
  phone: "+1 (737) 358-7647",
  phoneDisplay: "(737) 358-7647",
  email: "info@medalignbilling.com",
  altEmail: "info@ehcsbilling.com",
  address: "10411 Oak Forest Way, New Braunfels, TX 78132-3605",
  stats: {
    providers: "1,200+",
    cleanClaims: "98.7%",
    years: "15+",
    dar: "< 30 Days",
    revenueIncrease: "Up to 35%",
    claimsVolume: "$250M+"
  }
};
