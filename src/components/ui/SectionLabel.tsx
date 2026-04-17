"use client";

interface SectionLabelProps {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span
        className="text-sm font-mono tracking-wider"
        style={{ color: "var(--text-tertiary)" }}
      >
        {number}
      </span>
      <div
        className="h-px flex-1"
        style={{ backgroundColor: "var(--border-primary)" }}
      />
      <span
        className="text-xs tracking-[0.2em] uppercase font-medium"
        style={{ color: "var(--text-tertiary)" }}
      >
        {label}
      </span>
      <div
        className="h-px flex-1"
        style={{ backgroundColor: "var(--border-primary)" }}
      />
    </div>
  );
}
