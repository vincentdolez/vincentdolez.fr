type TagProps = {
  children: string;
  variant?: "automation" | "dette" | "lab" | "default";
};

const variantColors = {
  automation: "bg-[color:var(--color-vd-acid)] text-[color:var(--color-vd-forest)]",
  dette: "border border-[color:var(--color-error)]/40 text-[color:var(--color-error)]",
  lab: "border border-[color:var(--color-vd-moss)]/40 text-[color:var(--color-vd-moss)]",
  default: "bg-[color:var(--color-surface)] text-[color:var(--color-muted)]",
};

export function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] ${variantColors[variant]}`}
    >
      {children}
    </span>
  );
}
