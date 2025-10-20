"use client";

import Link from "next/link";
import { Container } from "./Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/style-guide", label: "Style Guide" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold">
            PSCA Starter
          </Link>
          <nav className="hidden gap-4 text-sm sm:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  pathname === l.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}

