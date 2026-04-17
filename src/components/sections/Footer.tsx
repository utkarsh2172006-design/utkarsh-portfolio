"use client";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{
        borderTop: "1px solid var(--border-primary)",
      }}
    >
      <span
        className="text-sm"
        style={{ color: "var(--text-tertiary)" }}
      >
        © {new Date().getFullYear()} Utkarsh Jaiswal. All rights reserved.
      </span>
      <span
        className="text-sm"
        style={{ color: "var(--text-tertiary)" }}
      >
        Designed & built with precision.
      </span>
    </footer>
  );
}
