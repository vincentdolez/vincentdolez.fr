"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function StickyMobileCTA() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden">
      <Link
        href="/contact"
        className="flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-[var(--color-ink)] text-sm font-medium text-[var(--color-on-ink)] shadow-lg"
      >
        <span className="h-2 w-2 rounded-full bg-[var(--color-vd-acid)]" aria-hidden="true" />
        prendre rendez-vous
      </Link>
    </div>
  );
}
