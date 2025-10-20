import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "default" | "secondary" | "outline" | "destructive" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground shadow hover:opacity-95",
  secondary: "bg-secondary text-secondary-foreground shadow hover:opacity-95",
  outline: "border border-border bg-background hover:bg-muted",
  destructive: "bg-destructive text-destructive-foreground hover:opacity-95",
  ghost: "hover:bg-muted",
  link: "text-primary underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-9 px-4",
  lg: "h-11 px-6 text-base",
};

export function Button({ className, variant = "default", size = "md", ...props }: Props) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

