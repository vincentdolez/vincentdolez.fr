import { Section } from "@/components/layout/Section";

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
      <h2 className="gradient-text mb-12 text-center font-serif text-3xl leading-tight tracking-tight">
        {title}
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="font-serif text-4xl leading-tight tracking-tight text-text">
              {metric.value}
            </div>
            <p className="mt-2 text-sm text-muted">{metric.label}</p>
          </div>
        ))}
      </div>
      {note && (
        <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-normal text-muted/70">
          {note}
        </p>
      )}
    </Section>
  );
}
