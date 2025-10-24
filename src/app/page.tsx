import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import heroMain from "@/assets/hero-main.jpg";
import thumb1 from "@/assets/hero-thumb-1.jpg";
import thumb2 from "@/assets/hero-thumb-2.jpg";
import sportFootball from "@/assets/sports-football.png";
import sportTennis from "@/assets/sports-tennis.png";
import photoSoccer from "@/assets/photos/soccer.jpg";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* background ribbon accent (bottom) */}
        <div className="pointer-events-none absolute -left-20 bottom-[-48px] hidden h-40 w-[120%] -rotate-6 rounded-[80px] bg-gradient-to-r from-secondary-200 to-secondary-300 opacity-80 sm:block" />

        {/* decorative ring near thumbs */}
        <div className="pointer-events-none absolute right-[46%] top-[60%] hidden h-48 w-48 -translate-y-1/2 rounded-full border-[12px] border-secondary-300/70 sm:block lg:right-1/2 lg:top-[64%] lg:h-56 lg:w-56" />

        <Container className="grid items-start gap-6 md:gap-8 py-10 sm:py-14 lg:grid-cols-[1.2fr,0.8fr] lg:items-end lg:py-20">
          {/* Left content */}
          <div className="order-2 space-y-5 lg:order-1">
            {/* Reviews row */}
            <div className="flex items-center gap-3 text-sm text-neutral-600">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-neutral-600">G</span>
              <Stars />
              <span className="text-muted-foreground">+1,200 reviews</span>
            </div>

            <h1 className="text-display-9 md:text-display-10 text-neutral-800">
              Keep your kids active, healthy, and having a blast
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <a href="/contact">
                <Button className="h-12 rounded-full px-8 text-base md:h-14 md:px-10 md:text-lg">Join the club</Button>
              </a>
              <a href="tel:+11234567890">
                <Button variant="outline" className="h-12 rounded-full px-6 text-base md:h-14 md:px-8 md:text-lg">
                  (123) 456 - 7890
                </Button>
              </a>
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

      {/* Sports feature cards */}
      <section id="sports" className="py-12 sm:py-16">
        <Container>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.35em] text-primary">Sports</div>
            <h2 className="mt-3 font-sans text-4xl font-medium text-primary md:text-5xl">Explore our sports</h2>
            <p className="mx-auto mt-3 max-w-2xl text-para-md text-muted-foreground">
              Fermentum hendrerit donec libero lacinia non et in adipiscing gravida eu risus praesent sit orci in sed id nibh facilisis.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {sportsCards.map((card) => (
              <article key={card.title} className="flex h-full flex-col gap-4">
                <div className="relative overflow-hidden rounded-[28px]">
                  <Image src={card.image} alt={card.title} className="aspect-[4/5] w-full object-cover" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <Badge icon={<CalendarIcon />}>{card.days}</Badge>
                    <Badge icon={<ClockIcon />}>{card.time}</Badge>
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-neutral-700">{card.title}</h3>
                <p className="text-para-sm text-muted-foreground">{card.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/contact">
              <Button className="rounded-full px-8">Enroll your kids</Button>
            </a>
            <Link href="/sports">
              <Button variant="outline" className="rounded-full px-8">Browse all sports</Button>
            </Link>
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

function Stars() {
  return (
    <span className="inline-flex items-center gap-1 text-primary">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

const sportsCards = [
  {
    title: "Soccer",
    desc: "Energetic sessions focused on teamwork, dribbling skills and confidence for young players.",
    days: "Tue and Thu",
    time: "12:00AM – 2:00 PM",
    image: photoSoccer,
  },
  {
    title: "Football",
    desc: "Friendly, fast games that keep kids active while building coordination and friendships.",
    days: "Tue to Sun",
    time: "4:00PM – 7:00 PM",
    image: sportFootball,
  },
  {
    title: "Tennis",
    desc: "Coach-led rallies and drills that nurture agility, focus and love for the game.",
    days: "Mon to Wed",
    time: "4:00PM – 7:00 PM",
    image: sportTennis,
  },
];

function Badge({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur">
      {icon}
      <span>{children}</span>
    </span>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 15" />
    </svg>
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
