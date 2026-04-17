"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  PROJECTS,
  PROJECT_FILTERS,
  type ProjectCategory,
  type Project,
} from "@/lib/constants";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(activeFilter));

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      id="work" 
      className="container-main section-padding"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <SectionLabel number="04" label="SELECTED WORK" />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12 relative z-10">
        {PROJECT_FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor:
                activeFilter === filter
                  ? "var(--accent-primary)"
                  : "var(--bg-tertiary)",
              color: activeFilter === filter ? "#080808" : "var(--text-secondary)",
              border: `1px solid ${activeFilter === filter ? "var(--accent-primary)" : "var(--border-primary)"}`,
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project rows */}
      <div className="flex flex-col relative z-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              data-project-card
              className="group relative py-8 border-t cursor-pointer"
              style={{
                borderColor: "var(--border-primary)",
              }}
              onMouseEnter={() => setHoveredProject(project)}
            >
              {/* Hover accent border */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                style={{ backgroundColor: "var(--accent-primary)" }}
              />

              <div className="transition-transform duration-300 group-hover:translate-x-3">
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-4">
                    <span
                      className="font-mono text-sm transition-colors duration-300 group-hover:text-[var(--accent-primary)]"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {String(project.id).padStart(2, "0")}
                    </span>
                    <h3
                      className="font-display text-xl md:text-2xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <span
                    className="text-sm font-mono font-bold transition-transform duration-300 group-hover:scale-105"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    {project.outcome}
                  </span>
                </div>

                {/* Description + links */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3 ml-0 md:ml-12">
                  <p
                    className="text-sm md:text-base pointer-events-none"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex gap-4 shrink-0 relative z-20">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-1 text-xs font-medium transition-colors duration-200 hover:text-[var(--accent-primary)]"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        <Code2 size={14} /> GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center gap-1 text-xs font-medium transition-colors duration-200 hover:text-[var(--accent-primary)]"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 ml-0 md:ml-12 pointer-events-none">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded text-xs font-mono"
                      style={{
                        backgroundColor: "var(--bg-tertiary)",
                        color: "var(--text-tertiary)",
                        border: "1px solid var(--border-primary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {/* Bottom border */}
        <div
          className="h-px"
          style={{ backgroundColor: "var(--border-primary)" }}
        />
      </div>

      {/* Floating Image Reveal (Desktop Only) */}
      <AnimatePresence>
        {hoveredProject?.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="fixed pointer-events-none z-50 hidden lg:block overflow-hidden rounded-xl"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              width: "320px",
              height: "200px",
              x: "-50%",
              y: "-50%",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              border: "1px solid var(--border-primary)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={hoveredProject.image} 
              alt={hoveredProject.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
