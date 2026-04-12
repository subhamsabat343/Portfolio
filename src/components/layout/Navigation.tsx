"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrolled } from "@/lib/hooks";
import { NavItem } from "@/types";

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const isScrolled = useScrolled(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg shadow-black/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="text-lg font-bold text-[var(--color-text-primary)] tracking-tight cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-[var(--color-accent)]">S</span>ubham
              <span className="text-[var(--color-accent)] ml-1">S</span>abat
            </motion.div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === item.href
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[var(--color-accent-glow)] rounded-lg -z-10"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass border-t border-[var(--color-border)] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-[var(--color-accent)] bg-[var(--color-accent-glow)]"
                      : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]"
                  }`}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
