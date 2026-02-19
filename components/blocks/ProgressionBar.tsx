import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { number: "01", label: "Quickscan", duration: "Jours", signal: "Confiance" },
  { number: "02", label: "Sprint", duration: "Semaines", signal: "Preuve" },
  { number: "03", label: "Partner", duration: "Mois", signal: "Récurrence" },
];

export function ProgressionBar() {
  return (
    <Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-center gap-4 md:flex-col md:items-start md:gap-0">
            {/* Connector line (desktop) */}
            {index < steps.length - 1 && (
              <div className="absolute right-0 top-4 hidden h-px w-6 translate-x-full bg-border md:block" />
            )}
            <span className="font-mono text-xs text-muted">{step.number}</span>
            <div>
              <div className="font-serif text-2xl tracking-display text-text md:mt-2">
                {step.label}
              </div>
              <div className="mt-1 flex gap-3 text-sm text-muted">
                <span>{step.duration}</span>
                <span className="text-border">·</span>
                <span>{step.signal}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
