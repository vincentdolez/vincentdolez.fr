import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

type Metric = {
  value: string;
  label: string;
};

type MetricRowProps = {
  title: string;
  metrics: Metric[];
  note?: string;
};

export function MetricRow({ title, metrics, note }: MetricRowProps) {
  return (
    <Section variant="surface">
      <Reveal>
        <h2 className="gradient-text mt-4 mb-16 text-center font-serif text-3xl leading-tight tracking-display">
          {title}
        </h2>
      </Reveal>
      <div className="grid gap-8 md:grid-cols-3">
        {metrics.map((metric, index) => (
          <Reveal key={index} delay={index * 100}>
            <div
              className={`text-center ${
                index < metrics.length - 1
                  ? "md:border-r md:border-border/40"
                  : ""
              }`}
            >
              <div className="font-serif text-5xl leading-tight tracking-display text-text md:text-6xl">
                {metric.value}
              </div>
              <p className="mt-3 text-sm text-muted">{metric.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      {note && (
        <Reveal>
          <p className="mx-auto mt-12 max-w-xl text-center text-xs leading-normal text-muted/70">
            {note}
          </p>
        </Reveal>
      )}
    </Section>
  );
}
