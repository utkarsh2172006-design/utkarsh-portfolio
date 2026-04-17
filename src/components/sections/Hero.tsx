"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { HERO_DATA } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center min-h-[100svh] px-6 md:px-12 lg:px-24 pt-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Subtle radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, var(--accent-glow), transparent)",
        }}
      />

      {/* Floating 3D Orb Background */}
      <motion.div
        className="absolute right-[-10vw] top-[10vh] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px] pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.img
          src="/images/hero/orb.png"
          alt=""
          className="w-full h-full object-contain mix-blend-screen"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <div className="mb-8">
          {HERO_DATA.headline.map((line, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={
                line.indent === 80 ? "max-md:-ml-4 md:ml-[80px]" :
                line.indent === 160 ? "max-md:-ml-4 md:ml-[160px]" : ""
              }
            >
              <h1
                className={`font-display font-extrabold leading-[1.05] tracking-tight
                  text-[clamp(48px,10vw,128px)]
                  ${line.accent ? "italic" : ""}
                `}
                style={{
                  color: line.accent
                    ? "var(--accent-primary)"
                    : "var(--text-primary)",
                }}
              >
                {line.text}
                {i === HERO_DATA.headline.length - 1 && (
                  <span
                    className="cursor-blink inline-block ml-1"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    █
                  </span>
                )}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg tracking-[0.15em] mb-10 font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          {HERO_DATA.subtext}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
          <Button variant="filled" href="#work">
            View Work <span className="ml-1">→</span>
          </Button>
          <Button variant="ghost" href="#contact">
            Let&apos;s Talk
          </Button>
        </motion.div>
      </motion.div>

      {/* Bottom decorations */}
      <div className="absolute bottom-8 left-6 md:left-12">
        <span
          className="text-xs tracking-widest bounce-slow inline-block"
          style={{
            color: "var(--text-tertiary)",
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        >
          ↓ scroll
        </span>
      </div>

      <div className="absolute bottom-8 right-6 md:right-12">
        <span
          className="text-xs font-mono"
          style={{ color: "var(--text-tertiary)" }}
        >
          {HERO_DATA.currentlyBuilding}
        </span>
      </div>
    </section>
  );
}
