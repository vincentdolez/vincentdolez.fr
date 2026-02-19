import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { BlogIndex } from "@/components/blocks/BlogIndex";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Articles",
  description:
    "Retours de terrain, méthodes et preuves techniques sur l'automation, la delivery et l'IA.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Section variant="white" className="pt-32">
        <h1 className="gradient-text font-serif text-4xl leading-tight tracking-display">
          Articles
        </h1>
        <p className="mt-3 text-xl text-stone-500">
          Retours de terrain, méthodes et preuves techniques. Pas de contenu
          pour remplir — chaque article part d&apos;un problème réel.
        </p>
      </Section>

      <BlogIndex />
    </>
  );
}
