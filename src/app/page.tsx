import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import heroMain from "@/assets/hero-main.png";
import thumb1 from "@/assets/hero-thumb-1.png";
import thumb2 from "@/assets/hero-thumb-2.png";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* background ribbon accent */}
        <div className="pointer-events-none absolute -left-20 bottom-[-48px] hidden h-40 w-[120%] -rotate-6 rounded-[80px] bg-gradient-to-r from-secondary-200 to-secondary-300 opacity-80 sm:block" />
        <Container className="grid items-start gap-6 md:gap-8 py-12 sm:py-16 lg:grid-cols-[1.2fr,0.8fr] lg:items-end lg:py-20">
          {/* Left content */}
          <div className="order-2 space-y-5 lg:order-1">
            <h1 className="text-display-9 md:text-display-10 text-neutral-800">
              Keep your community active, healthy, and united
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="#members">
                <Button className="h-12 rounded-full px-8 text-base md:h-14 md:px-12 md:text-lg">
                  Join the club
                </Button>
              </Link>
            </div>

            {/* Thumbnails row */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              <HeroThumb src={thumb1} alt="Community football" />
              <HeroThumb src={thumb2} alt="Junior basketball" />
            </div>
          </div>

          {/* Right image */}
          <div className="order-1 lg:order-2 lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[28px] border bg-card shadow-sm md:max-w-[560px] lg:mr-0">
              <Image src={heroMain} alt="Athletes enjoying sport" className="h-full w-full object-cover" priority />
            </div>
          </div>
        </Container>
      </section>

      {/* Simple features section kept for scaffolding usefulness */}
      <Container className="pb-16">
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

function HeroThumb({ src, alt }: { src: StaticImageData | string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border bg-card">
      {typeof src === "string" ? (
        <img src={src} alt={alt} className="aspect-[3/2] w-full object-cover object-center" />
      ) : (
        <Image src={src} alt={alt} className="aspect-[3/2] w-full object-cover object-center" />
      )}
    </div>
  );
}

const features = [
  {
    title: "All-ages programs",
    desc: "Cricket, football, badminton, volleyball, and more community sports.",
  },
  {
    title: "Events & leagues",
    desc: "Tournaments, training, and social fixtures across the calendar.",
  },
  {
    title: "Community first",
    desc: "Celebrate heritage and build lasting friendships through sport.",
  },
];
