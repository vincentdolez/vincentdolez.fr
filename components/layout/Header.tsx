"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/offres", label: "Offres" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-bg/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[var(--width-wide)] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-text transition-colors duration-[var(--duration-default)]"
        >
          Vincent Dolez
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-[var(--duration-default)] ${
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
            className="rounded-md bg-accent px-4 py-2 text-sm text-white transition-all duration-[var(--duration-default)] hover:bg-accent/90"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
