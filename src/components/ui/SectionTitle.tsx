"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  number?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  number,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignClass} gap-4 mb-16 ${className}`}
    >
      {/* Section number + subtitle */}
      <div className="flex items-center gap-3">
        {number && (
          <span className="text-[var(--color-accent)] font-mono text-sm font-medium">
            {number}
          </span>
        )}
        {subtitle && (
          <span className="text-[var(--color-accent)] font-mono text-sm font-medium tracking-wider uppercase">
            {subtitle}
          </span>
        )}
      </div>

      {/* Main title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight">
        {title}
      </h2>

      {/* Accent line */}
      <div className="accent-line mt-2" />

      {/* Description */}
      {description && (
        <p className="text-[var(--color-text-tertiary)] text-base sm:text-lg max-w-2xl leading-relaxed mt-2">
          {description}
        </p>
      )}
    </motion.div>
  );
}
