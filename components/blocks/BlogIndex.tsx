"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { BlogFilters } from "@/components/blocks/BlogFilters";
import { BlogList } from "@/components/blocks/BlogList";
import type { PostMeta } from "@/lib/blog";

type BlogIndexProps = {
  posts: PostMeta[];
};

export function BlogIndex({ posts }: BlogIndexProps) {
  const [activePillar, setActivePillar] = useState("all");

  const filtered =
    activePillar === "all"
      ? posts
      : posts.filter((p) => p.pillar === activePillar);

  return (
    <>
      <Section variant="white" className="pt-0">
        <BlogFilters active={activePillar} onChange={setActivePillar} />
      </Section>

      <Section variant="surface">
        <BlogList posts={filtered} />
      </Section>
    </>
  );
}
