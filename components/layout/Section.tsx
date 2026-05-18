import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  variant?: "white" | "surface";
  maxWidth?: "content" | "wide";
  className?: string;
  id?: string;
};

export function Section({
  children,
  variant = "white",
  maxWidth = "wide",
  className = "",
  id,
}: SectionProps) {
  const bgClass =
    variant === "surface"
      ? "bg-[color:var(--color-surface)]"
      : "bg-[color:var(--color-bg)]";
  const widthClass =
    maxWidth === "content"
      ? "max-w-[var(--width-content)]"
      : "max-w-[var(--width-wide)]";

  return (
    <section id={id} className={`px-6 py-24 ${bgClass} ${className}`}>
      <div className={`mx-auto ${widthClass}`}>{children}</div>
    </section>
  );
}
