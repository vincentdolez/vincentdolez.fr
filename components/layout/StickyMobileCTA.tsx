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
        className="flex h-12 w-full items-center justify-center rounded-md bg-accent text-sm font-medium text-white shadow-lg transition-all duration-[var(--duration-default)] hover:bg-accent/90"
      >
        Prendre contact
      </Link>
    </div>
  );
}
