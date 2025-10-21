"use client";

import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

type AnchorLink = { type: "anchor"; href: string; label: string };
type RouteLink = { type: "route"; href: Route; label: string };
const links: Array<AnchorLink | RouteLink> = [
  { type: "route", href: "/", label: "Home" },
  { type: "anchor", href: "#about", label: "About" },
  { type: "anchor", href: "#sports", label: "Sports" },
  { type: "anchor", href: "#programs", label: "Programs" },
  { type: "route", href: "/style-guide", label: "Style Guide" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40">
      {/* Announcement bar */}
      <div className="hidden w-full items-center justify-center gap-3 bg-neutral-800 px-4 py-2 text-xs text-neutral-200 sm:flex">
        <span>Join our summer sports camp 2025</span>
        <a href="#events">
          <Button className="h-7 rounded-full px-3 text-xs">Join now</Button>
        </a>
        <a href="#about">
          <Button variant="outline" className="h-7 rounded-full border-primary px-3 text-xs text-primary hover:bg-primary/10">
            Learn more
          </Button>
        </a>
      </div>

      {/* Main nav */}
      <div className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-foreground">
              <Image src={logo} alt="PSAC Australia" className="h-7 w-7 rounded-full" />
              <span className="hidden sm:inline">PSAC Australia</span>
            </Link>
            <nav className="hidden gap-6 text-sm md:flex">
              {links.map((l) => {
                const cls = (active: boolean) =>
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground";
                return l.type === "route" ? (
                  <Link key={l.label} href={l.href} className={cls(pathname === l.href)}>
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.label} href={l.href} className={cls(false)}>
                    {l.label}
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a href="#members">
              <Button className="rounded-full">Join now</Button>
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
              onClick={() => setOpen((s) => !s)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <>
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </Container>
        {open && (
          <div className="border-t bg-background md:hidden">
            <Container className="flex flex-col gap-1 py-3">
              {links.map((l) =>
                l.type === "route" ? (
                  <Link key={l.label} href={l.href} className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted">
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.label} href={l.href} className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted">
                    {l.label}
                  </a>
                )
              )}
              <a href="#members" className="mt-2">
                <Button className="w-full rounded-full">Join now</Button>
              </a>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}
