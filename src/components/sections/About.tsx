"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { stats } from "@/data/about";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          number="01."
          subtitle="About"
          title="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left â€” Bio */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-5"
          >
            <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="text-[var(--color-text-primary)] font-medium">
                Software Engineer
              </span>{" "}
              based in Berhampur, India, with 2+ years of experience building
              web applications. My journey started with a curiosity to build
              things and evolved into a deep passion for creating impactful
              digital solutions.
            </p>
            <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed">
              I specialize in{" "}
              <span className="text-[var(--color-text-primary)] font-medium">
                full-stack development
              </span>
              , working with modern technologies like React, Next.js, Node.js,
              and Spring Boot. I enjoy architecting clean, scalable codebases
              and building experiences users love.
            </p>
            <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed">
              When I&apos;m not shipping code, I&apos;m solving algorithmic
              problems on LeetCode, exploring new technologies, or contributing
              to the developer community.
            </p>
          </motion.div>

          {/* Right â€” Stats grid */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <GlassCard key={stat.label} delay={index * 0.1}>
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-glow)] flex items-center justify-center">
                      <IconComponent
                        className="text-[var(--color-accent)]"
                        size={20}
                      />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[var(--color-text-tertiary)] font-medium">
                      {stat.label}
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
