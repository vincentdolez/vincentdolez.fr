import { Button } from "@/components/ui/Button";
import { HeroCanvas } from "@/components/blocks/HeroCanvas";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
};

export function Hero({ title, subtitle, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-24">
      <HeroCanvas />
      <div className="relative z-10 mx-auto max-w-[var(--width-wide)] px-6 text-center">
        <h1 className="gradient-text mx-auto max-w-3xl font-serif text-5xl leading-tight tracking-tight">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-normal text-muted">
          {subtitle}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
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
