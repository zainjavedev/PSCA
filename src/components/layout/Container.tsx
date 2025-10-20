import { cn } from "@/lib/utils";
import type React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export function Container({ className, children }: Props) {
  return <div className={cn("container mx-auto px-4", className)}>{children}</div>;
}
