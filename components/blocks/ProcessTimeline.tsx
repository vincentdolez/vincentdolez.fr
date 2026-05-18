import { Reveal } from "@/components/ui/Reveal";

type ProcessStep = {
  label: string;
  duration: string;
  description: string;
  deliverable: string;
  highlighted?: boolean;
};

type ProcessTimelineProps = {
  title: string;
  steps: ProcessStep[];
  eyebrow?: string;
};

export function ProcessTimeline({ title, steps, eyebrow }: ProcessTimelineProps) {
  return (
    <section className="bg-[color:var(--color-surface)] px-6 py-24">
      <div className="mx-auto max-w-[var(--width-wide)]">
        {eyebrow && (
          <Reveal>
            <div className="mb-4 flex justify-center">
              <span className="eyebrow">{eyebrow}</span>
            </div>
          </Reveal>
        )}
        <Reveal>
          <h2 className="mb-14 text-center font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col gap-3 rounded-2xl border bg-[color:var(--color-bg)] p-7 transition-colors ${
                  step.highlighted
                    ? "border-[color:var(--color-ink)] shadow-md"
                    : "border-[color:var(--color-border)]"
                }`}
              >
                {step.highlighted && (
                  <span className="absolute -top-2.5 left-6 rounded-full bg-[color:var(--color-vd-acid)] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[color:var(--color-vd-forest)]">
                    Recommandé
                  </span>
                )}
                <div className="step-badge">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-heading text-[22px] font-semibold tracking-tight text-[color:var(--color-text-strong)]">
                  {step.label}
                </h3>
                <p className="text-[15px] leading-[1.55] text-[color:var(--color-text)]">
                  {step.description}
                </p>
                <div className="mt-auto border-t border-[color:var(--color-border)] pt-4 text-[13px] text-[color:var(--color-muted)]">
                  <p>
                    <strong className="text-[color:var(--color-text-strong)]">Engagement :</strong>{" "}
                    {step.duration}
                  </p>
                  <p className="mt-1">
                    <strong className="text-[color:var(--color-text-strong)]">Livrable :</strong>{" "}
                    {step.deliverable}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
