import Link from "next/link";
import { EmailLink } from "@/components/ui/EmailLink";

export function Footer() {
  return (
    <footer style={{ viewTransitionName: "footer" }}>
      {/* Bottom strip */}
      <div className="border-t border-[color:var(--color-border)] px-6 py-6">
        <div className="mx-auto flex max-w-[var(--width-wide)] flex-col items-center justify-between gap-4 text-sm text-[color:var(--color-muted)] sm:flex-row">
          <Link href="/" className="flex items-center gap-2.5 transition-opacity duration-[var(--duration-default)] hover:opacity-90">
            <span className="brand-mark brand-mark--sm" aria-hidden="true" />
            <span>© Vincent Dolez {new Date().getFullYear()} · Vannes, Morbihan</span>
          </Link>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://www.linkedin.com/in/vincentdolez"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-[color:var(--color-text-strong)]"
            >
              LinkedIn
            </a>
            <EmailLink className="link-underline hover:text-[color:var(--color-text-strong)]" />
            <Link href="/mentions-legales" className="link-underline hover:text-[color:var(--color-text-strong)]">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
