import { cn } from "@/lib/utils";
import type React from "react";

type Variant = "default" | "secondary" | "outline" | "accent";

export function Badge({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: Variant }) {
  const styles: Record<Variant, string> = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    outline: "border border-border",
  };

  return (
    <div className={cn("inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium", styles[variant], className)} {...props} />
  );
}
