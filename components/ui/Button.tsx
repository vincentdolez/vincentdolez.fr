import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "acid" | "ghost";
  size?: "md" | "sm";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  withDot?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
  withDot,
}: ButtonProps) {
  const sizeClasses =
    size === "sm" ? "px-5 py-2.5 text-sm" : "px-[26px] py-[14px] text-[15px]";

  const base = `inline-flex items-center justify-center gap-2.5 rounded-full font-medium whitespace-nowrap border border-transparent transition-all duration-[var(--duration-default)] ease-[var(--ease-default)] hover:-translate-y-px hover:shadow-md ${sizeClasses}`;

  const variants = {
    primary: "bg-[var(--color-ink)] text-[var(--color-on-ink)]",
    acid: "bg-[var(--color-vd-acid)] text-[var(--color-vd-forest)]",
    secondary:
      "border-[var(--color-ink)] text-[var(--color-ink)] bg-transparent hover:bg-[var(--color-ink)] hover:text-[var(--color-on-ink)]",
    ghost:
      "bg-transparent text-[var(--color-text)] hover:text-[var(--color-vd-moss)] hover:translate-y-0 hover:shadow-none px-0 py-2",
  };

  const showDot = withDot ?? (variant === "primary" || variant === "acid");
  const dotColor =
    variant === "acid"
      ? "bg-[var(--color-vd-forest)]"
      : "bg-[var(--color-vd-acid)]";

  const classes = `${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const content = (
    <>
      {showDot && (
        <span className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden="true" />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
