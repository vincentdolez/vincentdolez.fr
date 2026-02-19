"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

type Metric = {
  value: string;
  label: string;
};

type MetricRowProps = {
  title: string;
  metrics: Metric[];
  note?: string;
};

/** Parse a metric value string into animatable parts. */
function parseMetric(value: string): {
  prefix: string;
  number: number;
  suffix: string;
} {
  const match = value.match(/^([^\d]*?)([\d]+)(.*?)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return {
    prefix: match[1],
    number: parseInt(match[2], 10),
    suffix: match[3],
  };
}

function CountUp({ value }: { value: string }) {
  const { prefix, number, suffix } = parseMetric(value);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || number === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setCurrent(number);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(Math.round(eased * number));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  if (number === 0) {
    return (
      <div ref={ref} className="font-serif text-5xl leading-tight tracking-display text-text md:text-6xl">
        {value}
      </div>
    );
  }

  return (
    <div ref={ref} className="font-serif text-5xl leading-tight tracking-display text-text md:text-6xl">
      {prefix}
      {current}
      {suffix}
    </div>
  );
}

export function MetricRow({ title, metrics, note }: MetricRowProps) {
  return (
    <Section variant="surface">
      <Reveal>
        <h2 className="gradient-text mt-4 mb-16 text-center font-serif text-3xl leading-tight tracking-display">
          {title}
        </h2>
      </Reveal>
      <div className="grid gap-8 md:grid-cols-3">
        {metrics.map((metric, index) => (
          <Reveal key={index} delay={index * 100}>
            <div
              className={`text-center ${
                index < metrics.length - 1
                  ? "md:border-r md:border-border/40"
                  : ""
              }`}
            >
              <CountUp value={metric.value} />
              <p className="mt-3 text-sm text-muted">{metric.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      {note && (
        <Reveal>
          <p className="mx-auto mt-12 max-w-xl text-center text-xs leading-normal text-muted/70">
            {note}
          </p>
        </Reveal>
      )}
    </Section>
  );
}
