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
  number?: string;
  highlighted?: boolean;
  badge?: string;
  badges?: string[];
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
  number,
  highlighted = false,
  badge,
  badges,
}: OfferCardProps) {
  return (
    <section
      id={id}
      className={`py-20 ${variant === "surface" ? "bg-surface" : "bg-bg"}`}
    >
      <div className="mx-auto max-w-[var(--width-wide)] px-6">
        <Reveal>
          <div
            className={`mx-auto max-w-3xl rounded-xl p-8 md:p-10 ${
              highlighted
                ? "border-2 border-accent/20 bg-bg shadow-md"
                : "border border-border/60 bg-bg shadow-sm"
            }`}
          >
            <div className="flex items-start gap-4">
              {number && (
                <span className="shrink-0 font-mono text-sm text-muted/50">
                  {number}
                </span>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="gradient-text font-heading text-2xl leading-tight tracking-display">
                    {title}
                  </h3>
                  {highlighted && (
                    <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
                      Recommandé
                    </span>
                  )}
                </div>
                <p className="mt-2 text-lg text-muted whitespace-pre-line">{hook}</p>

                {itemsLabel && (
                  <p className="mt-6 text-sm font-medium text-text">
                    {itemsLabel}
                  </p>
                )}
                <ul className="mt-3 space-y-2">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                      <span className="text-sm leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted">
                  <span>
                    <span className="font-medium text-text">
                      Engagement :
                    </span>{" "}
                    {engagement}
                  </span>
                  <span>
                    <span className="font-medium text-text">Livrable :</span>{" "}
                    <span className="whitespace-pre-line">{deliverable}</span>
                  </span>
                </div>
                {(badge || badges) && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {badge && (
                      <span className="inline-block rounded-full border border-success/30 px-2.5 py-0.5 text-xs text-success">
                        {badge}
                      </span>
                    )}
                    {badges?.map((b, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-full border border-success/30 px-2.5 py-0.5 text-xs text-success"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6">
                  <Button
                    href={cta.href}
                    variant={highlighted ? "primary" : "secondary"}
                  >
                    {cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
