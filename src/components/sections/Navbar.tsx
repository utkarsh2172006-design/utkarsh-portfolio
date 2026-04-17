"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12"
        style={{
          height: 64,
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "color-mix(in srgb, var(--bg-primary) 80%, transparent)",
          borderBottom: "1px solid var(--border-primary)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-extrabold tracking-tight transition-all duration-300 hover:tracking-widest"
          style={{ color: "var(--accent-primary)" }}
        >
          UJ
        </a>

        {/* Center nav (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm tracking-[0.08em] uppercase font-medium group"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-secondary)";
              }}
            >
              {link.label}
              <span
                className="absolute bottom-[-4px] left-0 h-[1px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: "var(--accent-primary)" }}
              />
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Availability */}
          <button
            onClick={scrollToContact}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer"
            style={{
              border: "1px solid var(--border-primary)",
              color: "var(--text-secondary)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full pulse-dot"
              style={{ backgroundColor: "#22c55e" }}
            />
            Open to Work
          </button>

          <ThemeToggle />

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              border: "1px solid var(--border-primary)",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={18} style={{ color: "var(--text-primary)" }} />
            ) : (
              <Menu size={18} style={{ color: "var(--text-primary)" }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-10 md:hidden"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="font-display text-5xl font-extrabold"
                style={{ color: "var(--text-primary)" }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
