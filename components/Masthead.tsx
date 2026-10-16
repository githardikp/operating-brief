"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#thesis", label: "Thesis" },
  { href: "#work", label: "Work" },
  { href: "#record", label: "Record" },
  { href: "#contact", label: "Close" },
];

export function Masthead() {
  const [current, setCurrent] = useState("#thesis");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    function setCurrentFromScroll() {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      let next = sections[0];

      if (atBottom) {
        next = sections[sections.length - 1];
      } else {
        const marker = Math.min(window.innerHeight * 0.28, 180);
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= marker) next = section;
        }
      }

      if (next) setCurrent(`#${next.id}`);
    }

    setCurrentFromScroll();
    window.addEventListener("scroll", setCurrentFromScroll, { passive: true });
    window.addEventListener("resize", setCurrentFromScroll);
    return () => {
      window.removeEventListener("scroll", setCurrentFromScroll);
      window.removeEventListener("resize", setCurrentFromScroll);
    };
  }, []);

  return (
    <>
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
