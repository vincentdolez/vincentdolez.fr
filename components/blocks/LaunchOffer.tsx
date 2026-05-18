import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type LaunchOfferProps = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  urgency?: string;
};

export function LaunchOffer({ title, description, cta, urgency }: LaunchOfferProps) {
  return (
    <section className="px-6 py-16">
      <Reveal>
        <div className="relative mx-auto max-w-2xl rounded-2xl border border-[color:var(--color-ink)] bg-[color:var(--color-surface)] px-8 py-10 text-center shadow-md">
          <span className="absolute -top-3 left-6 rounded-full bg-[color:var(--color-vd-acid)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[color:var(--color-vd-forest)]">
            Recommandé
          </span>
          <p className="font-heading text-2xl font-semibold tracking-tight text-[color:var(--color-text-strong)]">
            {title}
          </p>
          <p className="mt-3 text-lg leading-normal text-[color:var(--color-text)]">
            {description}
          </p>
          {urgency && (
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--color-vd-moss)]">
              {urgency}
            </p>
          )}
          <div className="mt-6">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
