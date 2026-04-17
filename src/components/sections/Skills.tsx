"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { SKILLS_DATA } from "@/lib/constants";

export default function Skills() {
  return (
    <section className="container-main">
      <SectionLabel number="03" label="CAPABILITIES" />

      <div className="flex flex-col">
        {SKILLS_DATA.map((row, i) => (
          <motion.div
            key={i}
            className="group relative py-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
            style={{
              borderTop: "1px solid var(--border-primary)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {/* Background fill on hover */}
            <div
              className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{ backgroundColor: "var(--accent-glow)" }}
            />

            {/* Category */}
            <span
              className="relative z-10 text-xs tracking-[0.15em] uppercase shrink-0 w-[160px] transition-colors duration-300 group-hover:text-[var(--accent-primary)]"
              style={{ color: "var(--text-tertiary)" }}
            >
              {row.category}
            </span>

            {/* Separator line (desktop) */}
            <div
              className="hidden md:block h-px flex-1"
              style={{ backgroundColor: "var(--border-primary)" }}
            />

            {/* Skills */}
            <div className="relative z-10 flex flex-wrap gap-x-6 gap-y-2 transition-transform duration-300 group-hover:translate-x-1">
              {row.skills.map((skill, j) => (
                <span
                  key={j}
                  className="text-base md:text-lg font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        {/* Bottom border */}
        <div
          className="h-px"
          style={{ backgroundColor: "var(--border-primary)" }}
        />
      </div>
    </section>
  );
}
