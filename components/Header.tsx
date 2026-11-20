"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { TODO_BOOKING_URL, nav, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 8);
        const marker = 120;
        let current = "";
        for (const item of nav) {
          const el = document.querySelector(item.href);
          if (!(el instanceof HTMLElement)) continue;
          if (el.getBoundingClientRect().top <= marker) current = item.href;
        }
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const panel = panelRef.current;
    const focusable = () =>
      panel ? [...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")] : [];
    focusable()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const list = focusable();
      const first = list[0];
      const last = list[list.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const follow = (href: string) => {
    setOpen(false);
    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
    }
  };

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="container header-inner">
        <a className="wordmark" href="#top">
          {site.name}
        </a>
        <span className="wordmark-role">— {site.role.toLowerCase()}</span>
        <nav className="nav-desktop" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.href}
              className="nav-link"
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
            >
              <span className="nav-num">{item.numeral}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn header-cta" href={TODO_BOOKING_URL}>
          {site.bookingLabel}
        </a>
        <button
          ref={buttonRef}
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Menu aria-hidden="true" strokeWidth={1.5} size={22} />
        </button>
      </div>
      <div
        ref={panelRef}
        id={menuId}
        className={open ? "menu open" : "menu"}
        inert={!open}
        aria-hidden={!open}
      >
        <button className="menu-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
          <X aria-hidden="true" strokeWidth={1.5} size={22} />
        </button>
        <nav className="menu-nav" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.href}
              className="menu-link"
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
              onClick={() => follow(item.href)}
            >
              <span className="nav-num">{item.numeral}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn menu-cta" href={TODO_BOOKING_URL}>
          {site.bookingLabel}
        </a>
      </div>
    </header>
  );
}
