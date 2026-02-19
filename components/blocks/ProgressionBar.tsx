import { Section } from "@/components/layout/Section";

const steps = [
  { label: "Quickscan", duration: "jours", signal: "confiance" },
  { label: "Sprint", duration: "semaines", signal: "preuve" },
  { label: "Partner", duration: "mois", signal: "récurrence" },
];

export function ProgressionBar() {
  return (
    <Section variant="white">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-0">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="text-center">
              <div className="font-serif text-xl tracking-tight text-text">
                {step.label}
              </div>
              <div className="mt-1 text-xs text-muted">({step.duration})</div>
              <div className="mt-1 text-xs text-muted/70">{step.signal}</div>
            </div>
            {index < steps.length - 1 && (
              <div className="mx-6 hidden h-px w-16 bg-border md:block" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
