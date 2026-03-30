import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

type Value = {
  title: string;
  description: string;
};

type ValueListProps = {
  values: Value[];
};

export function ValueList({ values }: ValueListProps) {
  return (
    <Section variant="surface">
      <div className="mx-auto max-w-3xl space-y-12">
        {values.map((value, index) => (
          <Reveal key={index} delay={index * 100}>
            <div>
              <h3 className="mb-2 font-heading text-xl leading-snug tracking-display">
                &rarr; {value.title}
              </h3>
              <p className="leading-normal text-muted">{value.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
