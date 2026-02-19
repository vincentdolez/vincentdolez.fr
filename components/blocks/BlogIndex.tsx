"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { BlogFilters } from "@/components/blocks/BlogFilters";
import { Tag } from "@/components/ui/Tag";

const pillars = [
  {
    tag: "Automation" as const,
    variant: "automation" as const,
    title: "Automation & ROI",
    description:
      "Comment l'automation crée de la valeur mesurable. Résultats, métriques, avant/après.",
  },
  {
    tag: "Delivery" as const,
    variant: "delivery" as const,
    title: "Debt-to-Flow",
    description:
      "Passer de l'accumulation de dette à un flux continu de livraison. Méthode, cadence, gouvernance.",
  },
  {
    tag: "Démos" as const,
    variant: "demos" as const,
    title: "Preuves techniques",
    description:
      "Montrer plutôt que promettre. Repos publics, démos, walk-throughs reproductibles.",
  },
];

export function BlogIndex() {
  const [activePillar, setActivePillar] = useState("all");

  return (
    <>
      <Section variant="white" className="pt-0">
        <BlogFilters active={activePillar} onChange={setActivePillar} />
      </Section>

      <Section variant="surface">
        <h2 className="mb-8 font-serif text-2xl leading-snug tracking-display text-text">
          Trois axes, bientôt en ligne.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.tag}
              className="rounded-lg border border-border bg-bg p-6"
            >
              <Tag variant={pillar.variant}>{pillar.tag}</Tag>
              <h3 className="mt-3 font-serif text-xl leading-snug tracking-display">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-normal text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
