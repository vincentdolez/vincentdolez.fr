import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type CTASectionProps = {
  text: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
};

export function CTASection({ text, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[var(--width-wide)]">
        <Reveal>
          <div className="text-center">
            <p className="mx-auto max-w-xl whitespace-pre-line font-heading text-2xl font-semibold leading-tight tracking-tight text-[color:var(--color-text-strong)] text-balance md:text-3xl">
              {text}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={primaryCTA.href}>{primaryCTA.label}</Button>
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="secondary">
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
