"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  name: string;
  delay?: number;
  size?: "sm" | "md";
  className?: string;
}

export default function SocialIcon({
  icon: Icon,
  href,
  name,
  delay = 0,
  size = "md",
  className = "",
}: SocialIconProps) {
  const sizeStyles = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
  };

  const iconSize = size === "sm" ? 16 : 18;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center ${sizeStyles[size]} rounded-xl border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent-muted)] hover:bg-[var(--color-accent-glow)] transition-all ${className}`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      aria-label={name}
    >
      <Icon size={iconSize} />
    </motion.a>
  );
}
