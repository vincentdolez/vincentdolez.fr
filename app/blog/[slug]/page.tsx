import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Tag } from "@/components/ui/Tag";
import { CTASection } from "@/components/blocks/CTASection";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { buildMetadata, buildArticleJsonLd } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    ogType: "article",
    publishedTime: post.date,
  });
}

const pillarVariant: Record<string, "automation" | "delivery" | "demos"> = {
  automation: "automation",
  delivery: "delivery",
  demos: "demos",
};

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = buildArticleJsonLd({
    title: post.title,
    description: post.excerpt,
    date: post.date,
    slug,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section variant="white" maxWidth="content" className="pt-32">
        <div className="flex items-center gap-3 text-xs text-muted">
          <Tag variant={pillarVariant[post.pillar] ?? "default"}>
            {post.pillar}
          </Tag>
          <span>{post.readingTime} min de lecture</span>
        </div>

        <h1 className="gradient-text mt-4 font-serif text-4xl leading-tight tracking-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-sm text-muted">
          {new Date(post.date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          &middot; {post.author}
        </p>

        <hr className="hairline-fade my-8" />

        {/* MDX rendering placeholder — raw content for now */}
        <article className="prose-custom leading-loose">
          <div
            className="whitespace-pre-wrap text-text"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <hr className="hairline-fade my-12" />
      </Section>

      <CTASection
        text="Ce sujet vous parle ?"
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
        secondaryCTA={{ label: "Voir les offres", href: "/offres" }}
      />
    </>
  );
}
