import { Reveal } from "@/components/ui/Reveal";

type System = {
  client: string;
  context: string;
  outcome: string;
};

type TrackRecordProps = {
  title: string;
  systems: System[];
  footnote?: string;
  eyebrow?: string;
};

export function TrackRecord({ title, systems, footnote, eyebrow }: TrackRecordProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[var(--width-wide)]">
        {eyebrow && (
          <Reveal>
            <span className="eyebrow mb-4">{eyebrow}</span>
          </Reveal>
        )}
        <Reveal>
          <h2 className="mb-12 font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {systems.map((sys, i) => (
            <Reveal key={sys.client} delay={i * 100}>
              <div className="h-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7">
                <h3 className="font-heading text-lg font-semibold tracking-tight text-[color:var(--color-text-strong)]">
                  {sys.client}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-text)]">
                  {sys.context}
                </p>
                <p className="mt-3 border-t border-[color:var(--color-border)] pt-3 text-sm font-medium text-[color:var(--color-vd-moss)]">
                  → {sys.outcome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        {footnote && (
          <Reveal delay={400}>
            <p className="mt-10 text-center text-sm text-[color:var(--color-muted)]">
              {footnote}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
