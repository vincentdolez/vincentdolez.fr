import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type CTASectionProps = {
  text: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
};

export function CTASection({ text, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <Section variant="surface">
      <Reveal>
        <div className="text-center">
          <hr className="hairline-fade mx-auto mb-12 max-w-xs" />
          <p className="mx-auto max-w-lg font-serif text-2xl leading-snug tracking-display text-text">
            {text}
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
      </Reveal>
    </Section>
  );
}
