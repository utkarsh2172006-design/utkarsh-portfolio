"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { CONTENT_PILLARS, YOUTUBE_VIDEOS } from "@/lib/constants";

export default function YouTube() {
  return (
    <section className="container-main section-padding">
      <SectionLabel number="06" label="BUILDING IN PUBLIC" />

      {/* Pull quote */}
      <motion.div
        className="mb-20 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span
          className="font-display text-[80px] md:text-[120px] leading-none block -mb-8 md:-mb-12"
          style={{ color: "var(--accent-primary)", opacity: 0.3 }}
        >
          &ldquo;
        </span>
        <blockquote className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.15]">
          <span style={{ color: "var(--text-primary)" }}>
            I don&apos;t just learn things.
          </span>
          <br />
          <span style={{ color: "var(--text-primary)" }}>
            I document, systematize,
          </span>
          <br />
          <span style={{ color: "var(--text-primary)" }}>and teach them.</span>
        </blockquote>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Content pillars */}
        <div className="flex flex-col gap-8">
          {CONTENT_PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              className="flex gap-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span
                className="font-mono text-sm font-bold shrink-0 mt-1"
                style={{ color: "var(--accent-primary)" }}
              >
                {pillar.number}
              </span>
              <div>
                <div
                  className="font-display font-bold text-lg mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {pillar.title}
                </div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: YouTube thumbnails */}
        <div className="flex flex-col gap-6">
          {YOUTUBE_VIDEOS.map((video, i) => (
            <motion.div
              key={i}
              className="group rounded-lg overflow-hidden transition-all duration-300 relative cursor-pointer"
              style={{
                border: "1px solid var(--border-primary)",
                backgroundColor: "var(--bg-secondary)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent-primary)";
                (e.currentTarget as HTMLElement).style.transform =
                  "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border-primary)";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              {/* Thumbnail image */}
              <div
                className="relative aspect-video flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: "var(--bg-tertiary)" }}
              >
                {video.thumbnail && (
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-60" />

                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 backdrop-blur-sm"
                  style={{
                    border: "2px solid var(--text-tertiary)",
                    backgroundColor: "rgba(0,0,0,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--accent-primary)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--accent-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(0,0,0,0.3)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--text-tertiary)";
                  }}
                >
                  <Play
                    size={20}
                    style={{ color: "var(--text-tertiary)" }}
                    className="ml-0.5"
                  />
                </div>
              </div>

              {/* Video info */}
              <div className="px-4 py-3">
                <h4
                  className="text-sm font-medium mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {video.title}
                </h4>
                <span
                  className="text-xs"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {video.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
