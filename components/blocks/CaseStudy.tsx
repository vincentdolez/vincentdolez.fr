import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

type CaseStudyProps = {
  title: string;
  paragraphs: string[];
  result: string;
  footnote: string;
};

export function CaseStudy({
  title,
  paragraphs,
  result,
  footnote,
}: CaseStudyProps) {
  return (
    <Section variant="surface">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-xl border border-border/60 bg-bg p-8 shadow-sm md:p-10">
          <h3 className="mb-6 font-heading text-2xl leading-snug tracking-display">
            {title}
          </h3>
          <div className="space-y-4 leading-normal text-muted">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 font-medium text-text">{result}</p>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-normal text-muted">
          {footnote}
        </p>
      </Reveal>
    </Section>
  );
}
