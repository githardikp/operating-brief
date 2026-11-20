"use client";

import { useEffect } from "react";

const STAGGER_MS = 120;
const NOTE_DELAY_MS = 900;

export function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const sketches = Array.from(document.querySelectorAll<SVGElement>("[data-sketch]"));
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const sketchObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as SVGElement;
          const delay = Number(el.dataset.stagger || 0) * STAGGER_MS;
          window.setTimeout(() => {
            el.classList.add("drawn");
            const id = el.dataset.sketchId;
            if (!id) return;
            const note = document.querySelector<HTMLElement>(`[data-note-for="${id}"]`);
            if (note) window.setTimeout(() => note.classList.add("note-in"), NOTE_DELAY_MS);
          }, delay);
          sketchObserver.unobserve(el);
        });
      },
      { threshold: 0.35 },
    );

    sketches.forEach((el) => sketchObserver.observe(el));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    reveals.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        el.classList.add("in");
        return;
      }
      el.classList.add("await");
      revealObserver.observe(el);
    });

    return () => {
      sketchObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
