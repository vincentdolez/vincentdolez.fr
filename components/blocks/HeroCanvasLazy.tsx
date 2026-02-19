"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(
  () =>
    import("@/components/blocks/HeroCanvas").then((m) => ({
      default: m.HeroCanvas,
    })),
  { ssr: false },
);

export function HeroCanvasLazy() {
  return <HeroCanvas />;
}
