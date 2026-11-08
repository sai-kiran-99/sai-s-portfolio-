"use client";

import { useEffect, useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

/** The commit graph rail. Rendered fully drawn so it is correct without JS. */
export function BranchLine() {
  const rail = useRef<HTMLSpanElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  const reduced = useRef(true);
  const { scrollYProgress } = useScroll({ target: rail, offset: ["start 75%", "end 65%"] });

  useEffect(() => {
    reduced.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced.current && fill.current) {
      fill.current.style.transform = `scaleY(${scrollYProgress.get()})`;
    }
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!reduced.current && fill.current) fill.current.style.transform = `scaleY(${value})`;
  });

  return (
    <span ref={rail} aria-hidden="true" className="absolute bottom-2 left-[6px] top-2 w-0.5 bg-line">
      <span ref={fill} className="absolute inset-0 origin-top bg-accent will-change-transform" />
    </span>
  );
}
