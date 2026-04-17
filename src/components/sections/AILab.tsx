"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { AI_LAB_CARDS } from "@/lib/constants";

export default function AILab() {
  return (
    <section id="lab" className="container-main">
      <SectionLabel number="05" label="AI LAB" />

      <motion.p
        className="text-lg md:text-xl mb-12 max-w-xl"
        style={{ color: "var(--text-secondary)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Where theory meets real-world execution
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {AI_LAB_CARDS.map((card, i) => (
          <motion.div
            key={i}
            className="group relative rounded-lg overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-primary)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent-primary)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border-primary)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            {/* Terminal dots */}
            <div
              className="flex items-center gap-1.5 px-4 py-3"
              style={{ borderBottom: "1px solid var(--border-primary)" }}
            >
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>

            <div className="p-5">
              {/* Terminal header */}
              <div
                className="font-mono text-base font-bold mb-3"
                style={{ color: "var(--accent-primary)" }}
              >
                &gt; {card.title}
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {card.description}
              </p>

              {/* Status */}
              <span
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium"
                style={{ color: "var(--accent-primary)" }}
              >
                → {card.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
