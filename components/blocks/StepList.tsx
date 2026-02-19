import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

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
      <h2 className="gradient-text mb-12 font-serif text-3xl leading-tight tracking-tight">
        {title}
      </h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border font-serif text-lg text-muted">
              {index + 1}
            </div>
            <div>
              <h3 className="font-medium text-text">{step.label}</h3>
              <p className="mt-1 text-muted leading-normal">
                {step.description}
              </p>
              {step.deliverable && (
                <p className="mt-1 text-sm text-muted/70">
                  Livrable : {step.deliverable}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      {cta && (
        <div className="mt-12">
          <Button href={cta.href} variant="secondary">
            {cta.label}
          </Button>
        </div>
      )}
    </Section>
  );
}
