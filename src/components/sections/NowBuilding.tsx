"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { NOW_ITEMS } from "@/lib/constants";

export default function NowBuilding() {
  return (
    <section className="container-main">
      <SectionLabel number="07" label="NOW" />

      <div className="max-w-3xl">
        {NOW_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start justify-between gap-4 py-6"
            style={{
              borderBottom: "1px solid var(--border-primary)",
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <span
                className="w-2 h-2 rounded-full mt-2.5 shrink-0 pulse-dot"
                style={{ backgroundColor: "var(--accent-primary)" }}
              />
              <span
                className="text-lg md:text-xl"
                style={{ color: "var(--text-primary)" }}
              >
                {item}
              </span>
            </div>
            <span
              className="text-xs font-mono shrink-0 mt-2"
              style={{ color: "var(--text-tertiary)" }}
            >
              → in progress
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-xs mt-8"
        style={{ color: "var(--text-tertiary)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        Updated April 2025
      </motion.p>
    </section>
  );
}
