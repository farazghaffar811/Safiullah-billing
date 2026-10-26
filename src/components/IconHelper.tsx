import React from 'react';
import {
  FileCheck2,
  Activity,
  ShieldCheck,
  Award,
  TrendingUp,
  Headphones,
  Clock,
  CheckCircle2,
  Users,
  Globe,
  UserCheck,
  FileSpreadsheet,
  Send,
  CreditCard,
  RefreshCw,
  BarChart3,
  DollarSign,
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  Building2,
  Sparkles,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Lock,
  Calendar,
  Check,
  AlertCircle
} from 'lucide-react';

interface IconHelperProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, className = "w-5 h-5", size }) => {
  const iconProps = { className, size };

  switch (name) {
    case 'FileCheck2': return <FileCheck2 {...iconProps} />;
    case 'Activity': return <Activity {...iconProps} />;
    case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
    case 'Award': return <Award {...iconProps} />;
    case 'TrendingUp': return <TrendingUp {...iconProps} />;
    case 'Headphones': return <Headphones {...iconProps} />;
    case 'Clock': return <Clock {...iconProps} />;
    case 'CheckCircle2': return <CheckCircle2 {...iconProps} />;
    case 'Users': return <Users {...iconProps} />;
    case 'Globe': return <Globe {...iconProps} />;
    case 'UserCheck': return <UserCheck {...iconProps} />;
    case 'FileSpreadsheet': return <FileSpreadsheet {...iconProps} />;
    case 'Send': return <Send {...iconProps} />;
    case 'CreditCard': return <CreditCard {...iconProps} />;
    case 'RefreshCw': return <RefreshCw {...iconProps} />;
    case 'BarChart3': return <BarChart3 {...iconProps} />;
    case 'DollarSign': return <DollarSign {...iconProps} />;
    case 'Stethoscope': return <Stethoscope {...iconProps} />;
    case 'Phone': return <Phone {...iconProps} />;
    case 'Mail': return <Mail {...iconProps} />;
    case 'MapPin': return <MapPin {...iconProps} />;
    case 'Building2': return <Building2 {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'ChevronDown': return <ChevronDown {...iconProps} />;
    case 'ArrowRight': return <ArrowRight {...iconProps} />;
    case 'ExternalLink': return <ExternalLink {...iconProps} />;
    case 'Lock': return <Lock {...iconProps} />;
    case 'Calendar': return <Calendar {...iconProps} />;
    case 'Check': return <Check {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};
