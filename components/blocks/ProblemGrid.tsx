import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

type Problem = {
  title: string;
  description: string;
};

type ProblemGridProps = {
  intro: string;
  problems: Problem[];
};

export function ProblemGrid({ intro, problems }: ProblemGridProps) {
  return (
    <Section variant="surface">
      <Reveal>
        <p className="mb-16 text-center text-lg text-muted">{intro}</p>
      </Reveal>
      <div className="grid gap-8 md:grid-cols-3">
        {problems.map((problem, index) => (
          <Reveal key={index} delay={index * 100}>
            <div className="rounded-lg border border-border bg-bg p-6 shadow-sm transition-shadow duration-[var(--duration-default)] hover:shadow-md">
              <h3 className="mb-2 font-serif text-xl leading-snug tracking-display">
                {problem.title}
              </h3>
              <p className="text-sm leading-normal text-muted">
                {problem.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
