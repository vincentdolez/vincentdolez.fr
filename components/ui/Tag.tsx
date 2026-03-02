type TagProps = {
  children: string;
  variant?: "automation" | "dette" | "lab" | "default";
};

const variantColors = {
  automation: "bg-accent/10 text-accent",
  dette: "bg-error/10 text-error",
  lab: "bg-stone-500/10 text-stone-600",
  default: "bg-surface text-muted",
};

export function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-block rounded-sm px-2 py-1 text-xs font-medium ${variantColors[variant]}`}
    >
      {children}
    </span>
  );
}
