import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site vincentdolez.fr.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <Section variant="white" maxWidth="content" className="pt-32">
      <h1 className="gradient-text font-serif text-4xl leading-tight tracking-display">
        Mentions légales
      </h1>

      <div className="mt-8 space-y-8 text-sm leading-normal text-muted">
        <div>
          <h2 className="mb-2 font-medium text-text">Éditeur du site</h2>
          <p>
            Vincent Dolez
            <br />
            AI Operating Partner — Consultant indépendant
            <br />
            Email : vincent@vincentdolez.fr
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-medium text-text">Hébergement</h2>
          <p>
            Vercel Inc.
            <br />
            440 N Barranca Ave #4133, Covina, CA 91723, USA
            <br />
            Site : vercel.com
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-medium text-text">
            Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, code source)
            est la propriété exclusive de Vincent Dolez, sauf mention contraire.
            Toute reproduction, même partielle, est soumise à autorisation
            préalable.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-medium text-text">
            Données personnelles
          </h2>
          <p>
            Les données transmises via le formulaire de contact sont uniquement
            utilisées pour répondre à votre demande. Elles ne sont ni vendues,
            ni cédées à des tiers. Conformément au RGPD, vous disposez d&apos;un
            droit d&apos;accès, de rectification et de suppression de vos
            données. Pour exercer ce droit : vincent@vincentdolez.fr.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-medium text-text">Cookies</h2>
          <p>
            Ce site n&apos;utilise aucun cookie de suivi publicitaire. Des
            cookies techniques peuvent être utilisés pour le bon fonctionnement
            du site.
          </p>
        </div>
      </div>
    </Section>
  );
}
