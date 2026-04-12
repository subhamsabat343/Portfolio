import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image?: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
  color: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  contributions: string[];
  tech: string[];
}

export interface NavItem {
  name: string;
  href: string;
}
