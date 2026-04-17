"use client";

import { motion } from "framer-motion";
import { Code2, MessageCircle, Play, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { CONTACT_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Code2 size={20} />,
  Twitter: <MessageCircle size={20} />,
  YouTube: <Play size={20} />,
};

export default function Contact() {
  return (
    <section id="contact" className="container-main">
      <SectionLabel number="08" label="CONTACT" />

      {/* Big headline */}
      <motion.h2
        className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6"
        style={{ color: "var(--text-primary)" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Have a project
        <br />
        in mind?
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl mb-16"
        style={{ color: "var(--text-secondary)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Let&apos;s build something impactful using AI and data.
      </motion.p>

      {/* Contact links */}
      <div className="max-w-2xl">
        {CONTACT_LINKS.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-6 transition-all duration-300 hover:translate-x-3"
            style={{
              borderBottom: "1px solid var(--border-primary)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
          >
            <span
              className="text-sm uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-[var(--accent-primary)]"
              style={{ color: "var(--text-tertiary)" }}
            >
              {link.label}
            </span>
            <div className="flex items-center gap-3">
              <span
                className="text-lg md:text-xl font-medium transition-colors duration-300 group-hover:text-[var(--accent-primary)]"
                style={{ color: "var(--text-primary)" }}
              >
                {link.value}
              </span>
              <ArrowUpRight
                size={18}
                className="transition-all duration-300 group-hover:rotate-45"
                style={{ color: "var(--text-tertiary)" }}
              />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Social icons */}
      <motion.div
        className="flex gap-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              color: "var(--text-tertiary)",
              border: "1px solid var(--border-primary)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--accent-primary)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-tertiary)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border-primary)";
            }}
          >
            {socialIcons[social.name]}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
