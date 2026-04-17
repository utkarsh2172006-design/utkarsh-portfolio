"use client";

import { MARQUEE_ITEMS } from "@/lib/constants";

export default function Marquee() {
  const content = MARQUEE_ITEMS.map((item, i) => (
    <span key={i} className="flex items-center gap-6 shrink-0">
      <span
        className="text-sm md:text-base font-medium tracking-wide whitespace-nowrap"
        style={{ color: "var(--text-secondary)" }}
      >
        {item}
      </span>
      <span className="text-xs" style={{ color: "var(--accent-primary)" }}>
        ◆
      </span>
    </span>
  ));

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      style={{
        borderTop: "1px solid var(--border-primary)",
        borderBottom: "1px solid var(--border-primary)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused]">
        {content}
        {content}
      </div>
    </div>
  );
}
