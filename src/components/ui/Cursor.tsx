"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>(0);

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const animate = useCallback(() => {
    ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.12);
    ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.12);

    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px)`;
    }

    if (ringRef.current) {
      const size = isProjectHover ? 56 : isHovering ? 56 : 36;
      ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px) scale(${isClicking ? 0.85 : 1})`;
      ringRef.current.style.width = `${size}px`;
      ringRef.current.style.height = `${size}px`;
    }

    animationFrame.current = requestAnimationFrame(animate);
  }, [isHovering, isProjectHover, isClicking]);

  useEffect(() => {
    // detect touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = () => {
      const hoverTargets = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select'
      );
      const projectCards = document.querySelectorAll("[data-project-card]");

      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });

      projectCards.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsProjectHover(true);
          setIsHovering(true);
        });
        el.addEventListener("mouseleave", () => {
          setIsProjectHover(false);
          setIsHovering(false);
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    handleElementHover();

    // Use MutationObserver to track DOM changes and re-bind hover events
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
      cancelAnimationFrame(animationFrame.current);
    };
  }, [animate]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden lg:block"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "var(--accent-primary)",
          transition: "opacity 0.2s",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden lg:flex items-center justify-center"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: `1.5px solid ${isHovering ? "var(--accent-primary)" : "var(--text-tertiary)"}`,
          backgroundColor: isHovering ? "var(--accent-glow)" : "transparent",
          transition:
            "width 0.3s cubic-bezier(0.4,0,0.2,1), height 0.3s cubic-bezier(0.4,0,0.2,1), border-color 0.3s, background-color 0.3s",
        }}
      >
        {isProjectHover && (
          <span
            className="text-[10px] font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent-primary)" }}
          >
            VIEW
          </span>
        )}
      </div>
    </>
  );
}
