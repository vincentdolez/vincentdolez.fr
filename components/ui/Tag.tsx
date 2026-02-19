type TagProps = {
  children: string;
  variant?: "automation" | "delivery" | "demos" | "default";
};

const variantColors = {
  automation: "bg-accent/10 text-accent",
  delivery: "bg-success/10 text-success",
  demos: "bg-warning/10 text-warning",
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
