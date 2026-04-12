"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  delay: number;
}

export default function SkillBadge({ skill, delay }: SkillBadgeProps) {
  return (
    <motion.span
      className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent-muted)] hover:text-[var(--color-accent)] transition-colors cursor-default"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {skill}
    </motion.span>
  );
}
