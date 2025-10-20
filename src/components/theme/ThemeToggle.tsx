"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-card px-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="dark:hidden">🌙 Dark</span>
      <span className="hidden dark:inline">☀️ Light</span>
    </button>
  );
}
