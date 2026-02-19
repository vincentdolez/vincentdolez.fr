import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import type { PostMeta } from "@/lib/blog";

type BlogListProps = {
  posts: PostMeta[];
};

const pillarVariant: Record<string, "automation" | "delivery" | "demos"> = {
  automation: "automation",
  delivery: "delivery",
  demos: "demos",
};

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="border-b border-border pb-6 last:border-none"
        >
          <div className="flex items-center gap-3 text-xs text-muted">
            <Tag variant={pillarVariant[post.pillar] ?? "default"}>
              {post.pillar}
            </Tag>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.readingTime && <span>{post.readingTime} min</span>}
          </div>
          <h2 className="mt-2 font-serif text-xl leading-snug tracking-tight">
            <Link
              href={`/blog/${post.slug}`}
              className="transition-colors duration-[var(--duration-default)] hover:text-accent"
            >
              {post.title}
            </Link>
          </h2>
          {post.excerpt && (
            <p className="mt-2 line-clamp-2 text-sm leading-normal text-muted">
              {post.excerpt}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
