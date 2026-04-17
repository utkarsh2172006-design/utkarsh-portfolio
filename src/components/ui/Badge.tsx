"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted";
}

export default function Badge({ children, variant = "muted" }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide"
      style={{
        backgroundColor:
          variant === "accent" ? "var(--accent-glow)" : "var(--bg-tertiary)",
        color:
          variant === "accent"
            ? "var(--accent-primary)"
            : "var(--text-secondary)",
        border: `1px solid ${variant === "accent" ? "var(--border-accent)" : "var(--border-primary)"}`,
      }}
    >
      {children}
    </span>
  );
}
