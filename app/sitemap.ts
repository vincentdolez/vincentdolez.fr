import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://vincentdolez.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), priority: 1 },
    { url: `${BASE_URL}/legacy-rescue`, lastModified: new Date(), priority: 0.95 },
    { url: `${BASE_URL}/quickscan-pme`, lastModified: new Date(), priority: 0.95 },
    { url: `${BASE_URL}/formations`, lastModified: new Date(), priority: 0.85 },
    { url: `${BASE_URL}/ia-act`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/a-propos`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.6 },
  ];

  const posts = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  return [...staticPages, ...posts];
}
