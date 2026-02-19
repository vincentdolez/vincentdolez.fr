import { Button } from "@/components/ui/Button";
import { HeroCanvasLazy } from "@/components/blocks/HeroCanvasLazy";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
};

export function Hero({ title, subtitle, primaryCTA, secondaryCTA }: HeroProps) {
  const lines = title.split("\n");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-24">
      <HeroCanvasLazy />
      <div className="relative z-10 mx-auto max-w-[var(--width-wide)] px-6 text-center">
        <h1 className="mx-auto max-w-3xl font-serif leading-tight tracking-display">
          {lines.map((line, i) => (
            <span
              key={i}
              className="gradient-text block text-3xl sm:text-4xl md:text-5xl"
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-xl leading-normal text-stone-500">
          {subtitle}
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button href={primaryCTA.href}>{primaryCTA.label}</Button>
          {secondaryCTA && (
            <Button href={secondaryCTA.href} variant="secondary">
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
