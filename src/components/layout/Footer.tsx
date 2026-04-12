"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { socialLinks } from "@/data/social";
import SocialIcon from "@/components/ui/SocialIcon";

const footerNav = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export default function Footer() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative border-t border-[var(--color-border)]">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-muted)] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
              <span className="text-[var(--color-accent)]">S</span>ubham Sabat
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">
              Software Engineer crafting clean, performant digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleClick(item.href)}
                    className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-3">
              Connect
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={social.name}
                  icon={social.icon}
                  href={social.href}
                  name={social.name}
                  size="sm"
                  delay={index * 0.05}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-[var(--color-border)] text-center"
        >
          <p className="text-xs text-[var(--color-text-tertiary)] flex items-center justify-center gap-1">
            Â© {new Date().getFullYear()} Subham Sabat. Built with
            <Heart size={12} className="text-[var(--color-accent)] inline" />
            using Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
