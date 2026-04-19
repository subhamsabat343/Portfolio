"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  external?: boolean;
  download?: string | boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  size = "md",
  external = false,
  download,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };

  const combinedClassName = `
    ${baseStyles} 
    ${sizeStyles[size]} 
    ${variantStyles[variant]} 
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer"} 
    ${className}
  `.trim();

  const MotionTag = href && !disabled ? motion.a : motion.button;
  const linkProps = (href && !disabled)
    ? {
        href,
        download,
        ...(external && {
          target: "_blank",
          rel: "noopener noreferrer",
        }),
      }
    : {};

  return (
    <MotionTag
      className={combinedClassName}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      {...(linkProps as any)}
    >
      {children}
    </MotionTag>
  );
}
