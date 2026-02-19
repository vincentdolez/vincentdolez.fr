import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

type CTASectionProps = {
  text: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
};

export function CTASection({ text, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <Section variant="white">
      <div className="text-center">
        <p className="mx-auto max-w-lg font-serif text-2xl leading-snug tracking-tight text-text">
          {text}
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
    </Section>
  );
}
