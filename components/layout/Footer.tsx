import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[var(--width-wide)] flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <span>&copy; Vincent Dolez {new Date().getFullYear()}</span>

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/vincentdolez"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-[var(--duration-default)] hover:text-text"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vincent@vincentdolez.fr"
            className="transition-colors duration-[var(--duration-default)] hover:text-text"
          >
            Email
          </a>
          <Link
            href="/mentions-legales"
            className="transition-colors duration-[var(--duration-default)] hover:text-text"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
