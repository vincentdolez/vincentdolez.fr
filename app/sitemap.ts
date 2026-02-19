import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://vincentdolez.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), priority: 1 },
    { url: `${BASE_URL}/a-propos`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/offres`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.8 },
  ];

  const posts = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  return [...staticPages, ...posts];
}
