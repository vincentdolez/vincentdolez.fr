"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/offres", label: "Offres" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
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
        className={`fixed top-0 z-50 w-full transition-all duration-[var(--duration-default)] ${
          scrolled
            ? "border-b border-border/60 bg-bg/90 backdrop-blur-lg backdrop-saturate-150"
            : "bg-bg/95 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-[var(--width-wide)] items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-serif text-xl tracking-display text-text opacity-80 transition-opacity duration-[var(--duration-default)] hover:opacity-100"
          >
            Vincent Dolez
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors duration-[var(--duration-default)] ${
                  pathname === link.href
                    ? "text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-text/40" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-md bg-accent px-4 py-2 text-sm text-white transition-all duration-[var(--duration-default)] hover:bg-accent/90"
            >
              Contact
            </Link>
          </div>

          {/* Burger button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Ouvrir le menu"
          >
            <div className="relative h-4 w-5">
              <span className="absolute left-0 top-0 h-px w-5 bg-text" />
              <span className="absolute left-0 top-[7px] h-px w-5 bg-text" />
              <span className="absolute left-0 top-[14px] h-px w-5 bg-text" />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay — rendered outside header to avoid stacking context issues */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg md:hidden"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-5 flex h-10 w-10 items-center justify-center"
            aria-label="Fermer le menu"
          >
            <div className="relative h-4 w-5">
              <span className="absolute left-0 top-[7px] h-px w-5 rotate-45 bg-text" />
              <span className="absolute left-0 top-[7px] h-px w-5 -rotate-45 bg-text" />
            </div>
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif text-2xl tracking-display transition-colors duration-[var(--duration-default)] ${
                  pathname === link.href
                    ? "text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 rounded-md bg-accent px-8 py-3 text-base font-medium text-white transition-all duration-[var(--duration-default)] hover:bg-accent/90"
            >
              Prendre rendez-vous
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
