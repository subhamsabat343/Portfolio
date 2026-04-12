"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/constants/social";
import SocialIcon from "@/components/ui/SocialIcon";

const footerNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-muted)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
              <span className="text-[var(--color-accent)]">S</span>ubham
              <span className="text-[var(--color-accent)] ml-1">S</span>abat
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed max-w-xs">
              Software Engineer crafting clean, performant digital experiences.
              Specializing in scalable web and mobile applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
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
          <div className="text-xs text-[var(--color-text-tertiary)] flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4">
            <span>
              &copy; {new Date().getFullYear()} Subham Sabat. All rights
              reserved.
            </span>
            <span className="hidden sm:inline-block text-[var(--color-border)]">
              |
            </span>
            <span className="flex items-center gap-1">
              Built with
              <Heart size={12} className="text-[var(--color-accent)]" />
              using Next.js
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
