import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  pillar: string;
  excerpt: string;
  readingTime: number;
  author: string;
};

export type Post = PostMeta & {
  content: string;
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      pillar: data.pillar ?? "automation",
      excerpt: data.excerpt ?? "",
      readingTime: data.readingTime ?? 5,
      author: data.author ?? "Vincent Dolez",
    } satisfies PostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    pillar: data.pillar ?? "automation",
    excerpt: data.excerpt ?? "",
    readingTime: data.readingTime ?? 5,
    author: data.author ?? "Vincent Dolez",
    content,
  };
}

export function getPostsByPillar(pillar: string): PostMeta[] {
  return getAllPosts().filter((post) => post.pillar === pillar);
}
