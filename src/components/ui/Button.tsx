"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "filled" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "filled",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium text-sm tracking-wide
    h-11 px-7 rounded-lg
    transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
    cursor-pointer relative overflow-hidden
  `;

  const filledStyles = `
    text-[#080808] font-semibold
  `;

  const ghostStyles = `
    border border-[var(--border-hover)]
    text-[var(--text-primary)]
  `;

  const combinedClass = `${baseStyles} ${variant === "filled" ? filledStyles : ghostStyles} ${className}`;

  const style: React.CSSProperties =
    variant === "filled"
      ? { backgroundColor: "var(--accent-primary)", color: "#080808" }
      : {};

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        style={style}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
        onMouseDown={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(0.97)";
        }}
        onMouseUp={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClass}
      onClick={onClick}
      style={style}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
      }}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(0.97)";
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
      }}
    >
      {children}
    </button>
  );
}
