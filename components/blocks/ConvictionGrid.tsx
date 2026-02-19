import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

type Conviction = {
  title: string;
  description: string;
};

type ConvictionGridProps = {
  title: string;
  convictions: Conviction[];
};

export function ConvictionGrid({ title, convictions }: ConvictionGridProps) {
  return (
    <Section variant="surface">
      <Reveal>
        <h2 className="gradient-text mt-4 mb-16 font-serif text-3xl leading-tight tracking-display">
          {title}
        </h2>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {convictions.map((conviction, index) => (
          <Reveal key={index} delay={index * 100}>
            <div className="rounded-lg border border-border bg-bg p-6 shadow-sm transition-shadow duration-[var(--duration-default)] hover:shadow-md">
              <h3 className="mb-2 font-serif text-xl leading-snug tracking-display">
                {conviction.title}
              </h3>
              <p className="text-sm leading-normal text-muted">
                {conviction.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
