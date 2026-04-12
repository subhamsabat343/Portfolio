interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border-[var(--color-border)]",
    accent:
      "bg-[var(--color-accent-muted)] text-[var(--color-accent)] border-[var(--color-accent-muted)]",
    outline:
      "bg-transparent text-[var(--color-text-tertiary)] border-[var(--color-border)]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
