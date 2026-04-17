"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { ABOUT_PARAGRAPHS, ABOUT_TIMELINE, ABOUT_STATS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function About() {
  return (
    <section id="about" className="container-main section-padding">
      <SectionLabel number="02" label="ABOUT" />

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-20">
        {/* Left column */}
        <div className="relative flex flex-col gap-12">
          {/* Portrait Image */}
          <motion.div
            className="group relative w-full aspect-[4/5] max-w-sm overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="absolute inset-0 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: "var(--bg-primary)", mixBlendMode: "color" }}
            />
            <div
              className="absolute inset-0 z-20 opacity-50 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: "var(--accent-primary)", mixBlendMode: "overlay" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile/portrait.png"
              alt="Utkarsh Jaiswal"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            {/* Corner acccents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-primary)] z-30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--text-tertiary)] z-30 transition-colors duration-500 group-hover:border-[var(--accent-primary)]" />
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-6">
            <div
              className="absolute left-0 top-2 bottom-2 w-px"
              style={{ backgroundColor: "var(--border-primary)" }}
            />
            {ABOUT_TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                className="relative mb-8 last:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
              >
                <div
                  className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: "var(--accent-primary)",
                    backgroundColor: "var(--bg-primary)",
                  }}
                />
                <span
                  className="text-sm font-mono font-bold block mb-1"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {item.year}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          {ABOUT_PARAGRAPHS.map((para, i) => (
            <motion.p
              key={i}
              className="text-lg md:text-xl leading-relaxed mb-6 last:mb-0"
              style={{ color: "var(--text-secondary)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeUp}
            >
              {para}
            </motion.p>
          ))}

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-0 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ABOUT_STATS.map((stat, i) => (
              <motion.div
                key={i}
                className="flex-1 min-w-[140px] px-6 py-4"
                style={{
                  borderLeft:
                    i > 0 ? "1px solid var(--border-primary)" : "none",
                }}
                custom={i + 3}
                variants={fadeUp}
              >
                <div
                  className="font-display font-bold text-xl mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {stat.top}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {stat.bottom}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
