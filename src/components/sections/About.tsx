"use client";

import { motion } from "framer-motion";
import { stats } from "@/constants/about";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="section-padding py-20 min-h-[70vh]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          number="01."
          subtitle="About"
          title="Who I Am"
          description="A brief introduction to my background, my journey into software engineering, and what drives my passion for development."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Bio */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--color-text-primary)] font-medium leading-relaxed">
              I'm a <span className="text-[var(--color-accent)]">Software Engineer</span> based in Berhampur, India, with 2+ years of experience building web applications.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              My journey started with a curiosity to build things and evolved into a deep passion for creating impactful digital solutions. I specialize in <span className="text-[var(--color-text-primary)] font-medium">full-stack development</span>, working with modern technologies like React, Next, Node, and React Native.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              I enjoy architecting clean, scalable codebases and building experiences users love. When I'm not shipping code, I'm solving algorithmic problems on LeetCode, exploring new technologies, or contributing to the developer community.
            </p>
          </motion.div>

          {/* Right - Stats grid */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="glass p-6 rounded-2xl flex flex-col items-center text-center group hover:border-[var(--color-accent-muted)] transition-all duration-300"
                  variants={fadeInUp}
                  custom={index}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-glow)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-muted)] transition-colors">
                    <IconComponent className="text-[var(--color-accent)]" size={24} />
                  </div>
                  <h4 className="text-3xl font-bold text-[var(--color-text-primary)] mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
