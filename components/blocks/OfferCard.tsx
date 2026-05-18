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
      className={`px-6 py-20 ${variant === "surface" ? "bg-[color:var(--color-surface)]" : "bg-[color:var(--color-bg)]"}`}
    >
      <div className="mx-auto max-w-[var(--width-wide)]">
        <Reveal>
          <div
            className={`relative mx-auto max-w-3xl rounded-2xl p-8 md:p-10 ${
              highlighted
                ? "border border-[color:var(--color-ink)] bg-[color:var(--color-bg)] shadow-md"
                : "border border-[color:var(--color-border)] bg-[color:var(--color-bg)] shadow-sm"
            }`}
          >
            {highlighted && (
              <span className="absolute -top-3 left-8 rounded-full bg-[color:var(--color-vd-acid)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[color:var(--color-vd-forest)]">
                Recommandé
              </span>
            )}
            <div className="flex items-start gap-5">
              {number && (
                <div className="step-badge shrink-0">{number}</div>
              )}
              <div className="flex-1">
                <h3 className="font-heading text-2xl font-semibold leading-tight tracking-tight text-[color:var(--color-text-strong)] text-balance">
                  {title}
                </h3>
                <p className="mt-2 whitespace-pre-line text-lg leading-[1.6] text-[color:var(--color-text)]">
                  {hook}
                </p>

                {itemsLabel && (
                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--color-vd-moss)]">
                    {itemsLabel}
                  </p>
                )}
                <ul className="list-arrow mt-3">
                  {items.map((item, index) => (
                    <li key={index} className="text-[15px] text-[color:var(--color-text)]">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-1 border-t border-[color:var(--color-border)] pt-4 text-sm text-[color:var(--color-muted)]">
                  <span>
                    <strong className="text-[color:var(--color-text-strong)]">Engagement :</strong>{" "}
                    {engagement}
                  </span>
                  <span>
                    <strong className="text-[color:var(--color-text-strong)]">Livrable :</strong>{" "}
                    <span className="whitespace-pre-line">{deliverable}</span>
                  </span>
                </div>

                {(badge || badges) && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {badge && <span className="badge-acid">{badge}</span>}
                    {badges?.map((b, i) => (
                      <span key={i} className="badge-acid">
                        {b}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-7">
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
