"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import GlassCard from "@/components/ui/GlassCard";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          number="02."
          subtitle="Skills"
          title="Technologies I Work With"
          description="My technical toolkit spans across the full stack, from crafting pixel-perfect interfaces to building robust server-side systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <GlassCard
                key={category.title}
                delay={categoryIndex * 0.08}
                className="group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-glow)] flex items-center justify-center group-hover:bg-[var(--color-accent-muted)] transition-colors">
                    <IconComponent
                      className="text-[var(--color-accent)]"
                      size={20}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      delay={categoryIndex * 0.05 + skillIndex * 0.03}
                    />
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
