declare module 'lucide-react' {
  import * as React from 'react';

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  export const Dumbbell: LucideIcon;
  export const Activity: LucideIcon;
  export const Flame: LucideIcon;
  export const Zap: LucideIcon;
  export const Shield: LucideIcon;
  export const Maximize: LucideIcon;
  export const Lock: LucideIcon;
  export const Sparkles: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUp: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const X: LucideIcon;
  export const Menu: LucideIcon;
  export const Phone: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Clock: LucideIcon;
  export const Calendar: LucideIcon;
  export const User: LucideIcon;
  export const Star: LucideIcon;
  export const Quote: LucideIcon;
  export const Send: LucideIcon;
  export const Navigation: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const Loader2: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Database: LucideIcon;
  export const Trash2: LucideIcon;
  export const Download: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const Maximize2: LucideIcon;
  export const Award: LucideIcon;
  export const Info: LucideIcon;
  export const Wallet: LucideIcon;
  export const Building2: LucideIcon;
  export const Users2: LucideIcon;
  export const HeartHandshake: LucideIcon;
  export const IndianRupee: LucideIcon;
  export const Target: LucideIcon;
  export const Instagram: LucideIcon;
  export const Facebook: LucideIcon;
  export const Youtube: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const FileText: LucideIcon;

  // Fallback for any other icon
  const icons: { [key: string]: LucideIcon };
  export default icons;
}
