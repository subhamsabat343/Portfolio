"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/constants/experience";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

export default function Experience() {
  return (
    <section id="experience" className="section-padding py-20 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          number="04."
          subtitle="Career"
          title="Work Experience"
          description="My professional journey building software products and growing as an engineer."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-[var(--color-border)]" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                className="relative pl-12 sm:pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg-primary)] z-10">
                  <div className="absolute inset-0 rounded-full bg-[var(--color-accent)] opacity-30 animate-ping" />
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 glow-hover">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[var(--color-text-tertiary)]">
                        <Briefcase size={14} className="text-[var(--color-accent)]" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Contributions */}
                  <ul className="space-y-2 mb-5">
                    {exp.contributions.map((contribution, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-tertiary)]"
                      >
                        <span className="text-[var(--color-accent)] mt-0.5 flex-shrink-0 text-xs">
                          &#9657;
                        </span>
                        {contribution}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-[var(--color-accent-glow)] text-[var(--color-accent)] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
