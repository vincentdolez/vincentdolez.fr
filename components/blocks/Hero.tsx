import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type HeroProps = {
  title: ReactNode;
  subtitle: string;
  eyebrow?: string;
  pulse?: boolean;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  centered?: boolean;
};

export function Hero({
  title,
  subtitle,
  eyebrow,
  pulse = false,
  primaryCTA,
  secondaryCTA,
  centered = false,
}: HeroProps) {
  return (
    <section className="hero-dark relative pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="hero-leaf" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true" />

      <div
        className={`relative z-10 mx-auto max-w-[var(--width-wide)] px-6 ${centered ? "text-center" : ""}`}
      >
        <div className={`max-w-3xl ${centered ? "mx-auto" : ""}`}>
          {eyebrow && (
            <span className={pulse ? "eyebrow eyebrow-pulse" : "eyebrow"}>
              {eyebrow}
            </span>
          )}

          <h1 className="mt-6 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.0] tracking-[-0.04em] text-[color:var(--color-text-strong)] [font-variation-settings:'opsz'_96]">
            {title}
          </h1>

          <p className="mt-8 max-w-[38rem] text-xl leading-[1.6] text-[color:var(--color-text)] text-pretty">
            {subtitle}
          </p>

          <div className={`mt-10 flex flex-wrap items-center gap-3 ${centered ? "justify-center" : ""}`}>
            <Button href={primaryCTA.href}>{primaryCTA.label}</Button>
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="secondary">
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
