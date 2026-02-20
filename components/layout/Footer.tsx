import Link from "next/link";
import { EmailLink } from "@/components/ui/EmailLink";

export function Footer() {
  return (
    <footer style={{ viewTransitionName: "footer" }} className="mt-24 border-t border-border py-12">
      <div className="mx-auto flex max-w-[var(--width-wide)] flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <span>&copy; Vincent Dolez {new Date().getFullYear()}</span>

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/vincentdolez"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline transition-colors duration-[var(--duration-default)] hover:text-text"
          >
            LinkedIn
          </a>
          <EmailLink className="link-underline transition-colors duration-[var(--duration-default)] hover:text-text" />
          <Link
            href="/mentions-legales"
            className="link-underline transition-colors duration-[var(--duration-default)] hover:text-text"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
