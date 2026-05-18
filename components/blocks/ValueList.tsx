import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

type Value = {
  title: string;
  description: string;
};

type ValueListProps = {
  values: Value[];
  eyebrow?: string;
  heading?: string;
};

export function ValueList({ values, eyebrow, heading }: ValueListProps) {
  return (
    <Section variant="surface">
      <div className="mx-auto max-w-3xl">
        {eyebrow && (
          <span className="eyebrow mb-4">{eyebrow}</span>
        )}
        {heading && (
          <h2 className="mb-12 font-heading text-3xl leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            {heading}
          </h2>
        )}
        <div className="grid gap-3 border-t border-b border-[color:var(--color-border)] md:grid-cols-3 md:gap-0">
          {values.map((value, index) => (
            <Reveal key={index} delay={index * 100}>
              <div
                className={`px-2 py-8 md:px-7 md:py-10 ${
                  index < values.length - 1
                    ? "border-b border-[color:var(--color-border)] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <h3 className="mb-3 font-heading text-xl leading-snug tracking-tight text-[color:var(--color-text-strong)] text-pretty md:text-[22px]">
                  → {value.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[color:var(--color-text)]">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
