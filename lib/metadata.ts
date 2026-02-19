import type { Metadata } from "next";

const BASE_URL = "https://vincentdolez.fr";

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
};

export function buildMetadata({
  title,
  description,
  path = "",
  ogType = "website",
  publishedTime,
}: PageMetaInput): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      ...(publishedTime && { publishedTime }),
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export function buildArticleJsonLd({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    author: {
      "@type": "Person",
      name: "Vincent Dolez",
      url: BASE_URL,
    },
    url: `${BASE_URL}/blog/${slug}`,
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vincent Dolez",
  url: BASE_URL,
  description:
    "AI Operating Partner — J'aide les dirigeants de PME à débloquer l'exécution et tirer parti de l'IA.",
  founder: {
    "@type": "Person",
    name: "Vincent Dolez",
  },
};
