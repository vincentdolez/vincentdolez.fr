import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type Step = {
  label: string;
  description: string;
  deliverable?: string;
};

type StepListProps = {
  title: string;
  steps: Step[];
  cta?: { label: string; href: string };
  variant?: "white" | "surface";
};

export function StepList({
  title,
  steps,
  cta,
  variant = "white",
}: StepListProps) {
  return (
    <Section variant={variant}>
      <Reveal>
        <h2 className="mb-12 text-center font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mx-auto max-w-3xl rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-8 shadow-sm md:p-10">
        {steps.map((step, index) => (
          <Reveal key={index} delay={index * 100}>
            <div
              className={`flex gap-6 py-6 ${
                index < steps.length - 1 ? "border-b border-[color:var(--color-border)]" : ""
              }`}
            >
              <div className="step-badge shrink-0">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[color:var(--color-text-strong)]">
                  {step.label}
                </h3>
                <p className="mt-2 whitespace-pre-line leading-normal text-[color:var(--color-text)]">
                  {step.description}
                </p>
                {step.deliverable && (
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--color-vd-moss)]">
                    → Livrable : {step.deliverable}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
        {cta && (
          <div className="mt-8 text-center">
            <Button href={cta.href} variant="secondary">
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
