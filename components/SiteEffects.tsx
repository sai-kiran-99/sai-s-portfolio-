"use client";

import { useEffect } from "react";

function countUp(el: HTMLElement, target: number) {
  const start = performance.now();
  const duration = 900;
  el.textContent = "0";
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = String(Math.round(target * (1 - (1 - t) ** 3)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function greet() {
  const w = window as Window & { __greeted?: boolean };
  if (w.__greeted) return;
  w.__greeted = true;
  console.log(
    "%cHey, fellow engineer 👋%c\nYou opened DevTools, so we should talk.\nPress ⌘K on the page, or try Terminal mode.\nsaikiranmadala5555@gmail.com",
    "color:#06b6d4;font:600 16px monospace",
    "color:inherit;font:13px monospace",
  );
}

/** One small client island for every page-level effect, using event delegation. */
export function SiteEffects() {
  useEffect(() => {
    greet();
    const root = document.documentElement;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const observers: IntersectionObserver[] = [];
    const margin = "0px 0px -8% 0px";

    if (!reduced) {
      const reveal = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.remove("pending");
            reveal.unobserve(entry.target);
          }
        },
        { rootMargin: margin },
      );
      observers.push(reveal);
      for (const el of document.querySelectorAll<HTMLElement>(".reveal")) {
        if (el.getBoundingClientRect().top > innerHeight * 0.92) {
          el.classList.add("pending");
          reveal.observe(el);
        }
      }

      const counter = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            countUp(el, Number(el.dataset.count));
            counter.unobserve(el);
          }
        },
        { rootMargin: margin },
      );
      observers.push(counter);
      document.querySelectorAll("[data-count]").forEach((el) => counter.observe(el));
    }

    root.classList.add("fx-ready");

    const links = new Map(
      [...document.querySelectorAll<HTMLElement>("[data-nav]")].map((a) => [a.dataset.nav, a]),
    );
    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          links.forEach((a) => a.removeAttribute("aria-current"));
          links.get(entry.target.id)?.setAttribute("aria-current", "true");
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    observers.push(spy);
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

    let magnet: HTMLElement | null = null;
    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest) return;
      const card = target.closest<HTMLElement>(".spot");
      if (card) {
        const box = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - box.left}px`);
        card.style.setProperty("--y", `${e.clientY - box.top}px`);
      }
      const next = target.closest<HTMLElement>("[data-magnetic]");
      if (magnet && magnet !== next) magnet.style.transform = "";
      magnet = next;
      if (next) {
        const box = next.getBoundingClientRect();
        const x = (e.clientX - box.left - box.width / 2) * 0.16;
        const y = (e.clientY - box.top - box.height / 2) * 0.28;
        next.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    if (fine && !reduced) document.addEventListener("pointermove", onMove, { passive: true });

    const placesEls = [...document.querySelectorAll<HTMLElement>("[data-place]")];
    const onOver = (e: Event) => {
      const dep = (e.target as Element).closest?.<HTMLElement>("[data-skill]");
      const uses = dep?.dataset.uses?.split(" ") ?? [];
      for (const el of placesEls) el.classList.toggle("lit", uses.includes(el.dataset.place ?? ""));
    };
    document.addEventListener("pointerover", onOver, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
    };
  }, []);

  return null;
}
