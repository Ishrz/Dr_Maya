"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Container, Icon } from "@/components/ui";

/**
 * Header mirrors the reference: wordmark left, uppercase nav right, and a
 * bordered pill CTA. On mobile it collapses to a burger that opens a full
 * overlay menu (Escape-closable, scroll-locked).
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape, lock scroll while the overlay is open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line/70 bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent bg-bg"
      }`}
    >
      <Container className="flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="#top" className="group flex items-baseline gap-2.5 no-underline">
          <span className="font-display text-[1.35rem] leading-none tracking-tight text-ink md:text-[1.6rem]">
            {nav.logo.name}
          </span>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent">
            {nav.logo.suffix}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-wipe text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link href={nav.cta.href} className="btn btn-outline ml-1">
            {nav.cta.label}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-primary lg:hidden"
        >
          <Icon name={open ? "plus" : "menu"} size={20} className={open ? "rotate-45" : ""} />
        </button>
      </Container>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-bg lg:hidden"
      >
        <Container className="flex max-h-[calc(100dvh-5rem)] flex-col overflow-y-auto py-8">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {nav.links.map((link) => (
                <li key={link.href} className="border-b border-line/70">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 font-display text-2xl text-ink no-underline"
                  >
                    {link.label}
                    <Icon name="arrow" size={18} className="text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-8 w-full"
          >
            {nav.cta.label}
          </Link>

          <p className="mt-8 text-small text-muted">{nav.logo.role}</p>
        </Container>
      </div>
    </header>
  );
}
