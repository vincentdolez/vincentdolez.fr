import { Section } from "@/components/layout/Section";

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
      <p className="mb-12 text-center text-lg text-muted">{intro}</p>
      <div className="grid gap-8 md:grid-cols-3">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-bg p-6"
          >
            <h3 className="mb-2 font-serif text-xl leading-snug tracking-tight">
              {problem.title}
            </h3>
            <p className="text-sm leading-normal text-muted">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
