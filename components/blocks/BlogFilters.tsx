"use client";

const pillars = [
  { key: "all", label: "Tous" },
  { key: "automation", label: "Automation" },
  { key: "delivery", label: "Delivery" },
  { key: "demos", label: "Démos" },
];

type BlogFiltersProps = {
  active: string;
  onChange: (pillar: string) => void;
};

export function BlogFilters({ active, onChange }: BlogFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {pillars.map((pillar) => (
        <button
          key={pillar.key}
          type="button"
          onClick={() => onChange(pillar.key)}
          className={`rounded-full px-4 py-1.5 text-sm transition-all duration-[var(--duration-default)] ${
            active === pillar.key
              ? "bg-text text-bg"
              : "border border-border text-muted hover:border-text hover:text-text"
          }`}
        >
          {pillar.label}
        </button>
      ))}
    </div>
  );
}
