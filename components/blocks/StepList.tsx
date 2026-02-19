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
        <h2 className="gradient-text mt-4 mb-16 text-center font-serif text-3xl leading-tight tracking-display">
          {title}
        </h2>
      </Reveal>
      <div className="mx-auto max-w-3xl rounded-xl border border-border/60 bg-bg p-8 shadow-sm md:p-10">
        {steps.map((step, index) => (
          <Reveal key={index} delay={index * 100}>
            <div
              className={`flex gap-6 py-6 ${
                index < steps.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border font-serif text-lg text-muted">
                {index + 1}
              </div>
              <div>
                <h3 className="font-medium text-text">{step.label}</h3>
                <p className="mt-1 leading-normal text-muted">
                  {step.description}
                </p>
                {step.deliverable && (
                  <p className="mt-1 text-sm text-muted/70">
                    Livrable : {step.deliverable}
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
