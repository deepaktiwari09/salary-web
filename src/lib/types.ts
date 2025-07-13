// Common Types
export interface NavLink {
  href: string;
  label: string;
  cta?: boolean;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  avatar: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  [key: string]: FooterLink[];
}

// Animation Types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  distance?: number;
}

// Component Props
export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}