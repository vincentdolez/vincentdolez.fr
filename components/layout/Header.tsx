"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, startTransition } from "react";

const navLinks = [
  { href: "/a-propos", label: "à propos" },
  { href: "/legacy-rescue", label: "offres" },
  { href: "/ia-act", label: "IA Act" },
  { href: "/blog", label: "notes" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    startTransition(() => setOpen(false));
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 8;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{ viewTransitionName: "header" }}
        className={`fixed top-0 z-50 w-full backdrop-blur-lg backdrop-saturate-150 transition-all duration-[var(--duration-default)] ${
          scrolled
            ? "border-b border-[color:var(--color-border)]/60 bg-[color:var(--color-bg)]/90"
            : "bg-[color:var(--color-bg)]/85 border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[var(--width-wide)] items-center gap-8 px-6 py-4 md:px-7">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity duration-[var(--duration-default)] hover:opacity-90"
          >
            <span className="brand-mark" aria-hidden="true" />
            <span className="font-heading text-lg font-semibold tracking-tight text-[color:var(--color-text-strong)]">
              vincent dolez
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="ml-auto hidden items-center gap-7 text-[15px] md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline transition-colors duration-[var(--duration-default)] ${
                  pathname === link.href
                    ? "text-[color:var(--color-text-strong)] active"
                    : "text-[color:var(--color-text)] hover:text-[color:var(--color-vd-moss)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-on-ink)] transition-all duration-[var(--duration-default)] hover:-translate-y-px hover:shadow-md"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-vd-acid)]" aria-hidden="true" />
              prendre rendez-vous
            </Link>
          </div>

          {/* Burger button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="ml-auto flex h-11 w-11 items-center justify-center md:hidden"
            aria-label="Ouvrir le menu"
          >
            <div className="relative h-4 w-5">
              <span className="absolute left-0 top-0 h-px w-5 bg-[color:var(--color-text-strong)]" />
              <span className="absolute left-0 top-[7px] h-px w-5 bg-[color:var(--color-text-strong)]" />
              <span className="absolute left-0 top-[14px] h-px w-5 bg-[color:var(--color-text-strong)]" />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[color:var(--color-bg)] md:hidden">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-5 flex h-11 w-11 items-center justify-center"
            aria-label="Fermer le menu"
          >
            <div className="relative h-4 w-5">
              <span className="absolute left-0 top-[7px] h-px w-5 rotate-45 bg-[color:var(--color-text-strong)]" />
              <span className="absolute left-0 top-[7px] h-px w-5 -rotate-45 bg-[color:var(--color-text-strong)]" />
            </div>
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heading text-2xl tracking-tight transition-colors duration-[var(--duration-default)] ${
                  pathname === link.href
                    ? "text-[color:var(--color-text-strong)]"
                    : "text-[color:var(--color-text)] hover:text-[color:var(--color-vd-moss)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-[var(--color-ink)] px-7 py-3 text-base font-medium text-[var(--color-on-ink)]"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-vd-acid)]" aria-hidden="true" />
              prendre rendez-vous
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
