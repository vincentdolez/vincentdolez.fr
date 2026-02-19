import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type OfferCardProps = {
  title: string;
  hook: string;
  items: string[];
  itemsLabel?: string;
  engagement: string;
  deliverable: string;
  cta: { label: string; href: string };
  variant?: "white" | "surface";
  id?: string;
};

export function OfferCard({
  title,
  hook,
  items,
  itemsLabel,
  engagement,
  deliverable,
  cta,
  variant = "white",
  id,
}: OfferCardProps) {
  return (
    <section
      id={id}
      className={`py-24 ${variant === "surface" ? "bg-surface" : "bg-bg"}`}
    >
      <div className="mx-auto max-w-[var(--width-wide)] px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h3 className="gradient-text font-serif text-2xl leading-tight tracking-display">
              {title}
            </h3>
            <p className="mt-3 text-lg text-muted">{hook}</p>

            {itemsLabel && (
              <p className="mt-8 text-sm font-medium text-text">{itemsLabel}</p>
            )}
            <ul className="mt-3 space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                  <span className="text-sm leading-normal">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted">
              <span>
                <span className="font-medium text-text">Engagement :</span>{" "}
                {engagement}
              </span>
              <span>
                <span className="font-medium text-text">Livrable :</span>{" "}
                {deliverable}
              </span>
            </div>

            <div className="mt-8">
              <Button href={cta.href} variant="secondary">
                {cta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
