"use client";

import { motion } from "framer-motion";
import { ArrowDown, Send, FolderOpen } from "lucide-react";
import Image from "next/image";
import { containerVariants, itemVariants } from "@/lib/animations";
import { socialLinks } from "@/constants/social";
import SocialIcon from "@/components/ui/SocialIcon";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 opacity-[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
        >
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-[var(--color-text-primary)]">
                  Hi, I&apos;m{" "}
                </span>
                <span className="text-gradient">Subham Sabat</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl font-medium text-[var(--color-text-tertiary)]">
                Software Engineer
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-lg mx-auto lg:mx-0">
                Building clean, scalable digital solutions with modern
                technologies. Passionate about crafting user experiences that
                make a difference.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button variant="primary" href="#projects" size="lg">
                <FolderOpen size={18} />
                View Projects
              </Button>
              <Button variant="secondary" href="#contact" size="lg">
                <Send size={18} />
                Get In Touch
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-2 justify-center lg:justify-start pt-2"
            >
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={social.name}
                  icon={social.icon}
                  href={social.href}
                  name={social.name}
                  delay={0.8 + index * 0.1}
                />
              ))}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <motion.div
                className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[var(--color-accent)] via-transparent to-purple-500 opacity-20 blur-lg"
                animate={{
                  opacity: [0.15, 0.25, 0.15],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Image container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-[var(--color-border)]">
                <Image
                  src="/MyImage.jpg"
                  alt="Subham Sabat - Software Engineer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown
          className="text-[var(--color-text-tertiary)] opacity-40"
          size={20}
        />
      </motion.div>
    </section>
  );
}
