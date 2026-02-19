import { Section } from "@/components/layout/Section";

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
      <h2 className="gradient-text mb-12 font-serif text-3xl leading-tight tracking-tight">
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {convictions.map((conviction, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-bg p-6"
          >
            <h3 className="mb-2 font-serif text-xl leading-snug tracking-tight">
              {conviction.title}
            </h3>
            <p className="text-sm leading-normal text-muted">
              {conviction.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
