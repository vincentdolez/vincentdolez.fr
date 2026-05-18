import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

type CaseStudyProps = {
  title: string;
  paragraphs: string[];
  result: string;
  footnote?: string;
  label?: string;
};

export function CaseStudy({
  title,
  paragraphs,
  result,
  footnote,
  label = "Cas client",
}: CaseStudyProps) {
  return (
    <Section variant="white">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-sm md:p-10">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-vd-moss)]">
            {label}
          </p>
          <h3 className="mb-6 font-heading text-2xl leading-tight tracking-tight text-[color:var(--color-text-strong)] text-balance md:text-[28px]">
            {title}
          </h3>
          <div className="space-y-4 leading-[1.7] text-[color:var(--color-text)]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 border-t border-[color:var(--color-border)] pt-4 font-heading text-[22px] font-semibold leading-[1.3] tracking-tight text-[color:var(--color-text-strong)]">
            {result}
          </p>
        </div>
      </Reveal>
      {footnote && (
        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-normal text-[color:var(--color-muted)]">
            {footnote}
          </p>
        </Reveal>
      )}
    </Section>
  );
}
