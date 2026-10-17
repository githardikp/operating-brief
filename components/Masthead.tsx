"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#thesis", label: "Thesis" },
  { href: "#work", label: "Work" },
  { href: "#record", label: "Record" },
  { href: "#contact", label: "Close" },
];

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function tick() {
  if (prefersReducedMotion()) return;
  if (typeof navigator.vibrate !== "function") return;
  try {
    navigator.vibrate(20);
  } catch {
    // The browser blocked vibration. Scrolling still works.
  }
}

export function Masthead() {
  const [current, setCurrent] = useState("#thesis");
  const bar = useRef<HTMLSpanElement>(null);
  const meter = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const glide = useRef(0);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);
    let sectionId = "";
    let glideOrigin = "";
    // A nav glide withholds pulses so a long jump ticks once, on arrival.
    let holdPulse = false;

    function destination(target: HTMLElement) {
      const margin = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - margin;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return Math.min(Math.max(0, top), Math.max(0, max));
    }

    function releaseGlide(pulse: boolean) {
      const origin = glideOrigin;
      if (glide.current) cancelAnimationFrame(glide.current);
      glide.current = 0;
      glideOrigin = "";
      holdPulse = false;
      if (pulse && origin && sectionId && sectionId !== origin) tick();
    }

    function glideTo(top: number) {
      releaseGlide(false);
      if (prefersReducedMotion()) {
        window.scrollTo(0, top);
        return;
      }
      glideOrigin = sectionId;
      holdPulse = true;
      const start = window.scrollY;
      const distance = top - start;
      const duration = Math.min(1100, Math.max(520, Math.abs(distance) * 0.55));
      const began = performance.now();

      function step(now: number) {
        const t = Math.min(1, (now - began) / duration);
        const eased = 1 - Math.pow(1 - t, 4);
        window.scrollTo(0, start + distance * eased);
        if (t < 1) {
          glide.current = requestAnimationFrame(step);
          return;
        }
        const origin = glideOrigin;
        glide.current = 0;
        glideOrigin = "";
        holdPulse = false;
        sync(origin);
      }

      glide.current = requestAnimationFrame(step);
    }

    function sync(glideFrom?: string) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
      if (meter.current) meter.current.setAttribute("aria-valuenow", String(Math.round(progress * 100)));

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      let next = sections[0];
      if (atBottom) {
        next = sections[sections.length - 1];
      } else {
        const marker = Math.min(window.innerHeight * 0.28, 180);
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= marker) next = section;
        }
      }
      if (!next) return;
      const id = `#${next.id}`;
      const previous = sectionId;
      sectionId = id;
      setCurrent(id);
      if (!previous) return;
      if (glideFrom) {
        if (id !== glideFrom) tick();
        return;
      }
      if (!holdPulse && previous !== id) tick();
    }

    function onScroll() {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        sync();
      });
    }

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const link = (event.target as Element | null)?.closest("a");
      const href = link?.getAttribute("href");
      if (!href?.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!(target instanceof HTMLElement)) return;
      event.preventDefault();
      glideTo(destination(target));
      history.pushState(null, "", href);
    }

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const stopGlide = () => releaseGlide(true);
    window.addEventListener("wheel", stopGlide, { passive: true });
    window.addEventListener("touchstart", stopGlide, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      releaseGlide(false);
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", stopGlide);
      window.removeEventListener("touchstart", stopGlide);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <div className="read" ref={meter} role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
        <span ref={bar} />
      </div>
      <p className="mast-brand">
        <span>Operating Brief</span>
        <span>Bangalore · 2026</span>
      </p>
      <nav className="mast-nav" aria-label="Sections">
        <a className="mast-name" href="#thesis">
          Hardik Pandey
        </a>
        <div className="mast-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={current === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
