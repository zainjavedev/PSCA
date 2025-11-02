import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import heroMain from "@/assets/photos/usbofphotography-12732254.jpg";
import heroThumbCommunity from "@/assets/photos/pixabay-358042.jpg";
import heroThumbFestival from "@/assets/photos/vladvictoria-10544231.jpg";
import cricketPhoto from "@/assets/photos/pixabay-163526.jpg";
import futsalPhoto from "@/assets/photos/soccer.jpg";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { TrainersSection } from "@/components/sections/TrainersSection";
import { PerksSection } from "@/components/sections/PerksSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";

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
          <div className="order-2 space-y-6 lg:order-1">
            {/* Club credibility row */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 font-semibold text-neutral-700">PSC</span>
              <Stars />
              <span className="text-muted-foreground">Serving Pakistani Australians since 1996</span>
            </div>

            <h1 className="text-display-9 md:text-display-10 text-neutral-800">
              Uniting Pakistan&apos;s sporting spirit across Australia
            </h1>
            <p className="max-w-2xl text-para-md text-muted-foreground">
              Pakistan Sports Club Australia brings together players, supporters, and families for year-round cricket,
              futsal, and community celebrations from Sydney to Perth.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="/members">
                <Button className="h-12 rounded-full px-8 text-base md:h-14 md:px-10 md:text-lg">Become a member</Button>
              </a>
              <a href="mailto:info@psca.org.au">
                <Button variant="outline" className="h-12 rounded-full px-6 text-base md:h-14 md:px-8 md:text-lg">
                  info@psca.org.au
                </Button>
              </a>
            </div>

            {/* Thumbnails row */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              <HeroThumb src={heroThumbCommunity} alt="PSCA community cricket match" />
              <HeroThumb src={heroThumbFestival} alt="Pakistan Independence sports festival" />
            </div>
          </div>

          {/* Right image */}
          <div className="order-1 lg:order-2 lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[28px] border bg-card shadow-sm md:max-w-[560px] lg:mr-0">
              <Image src={heroMain} alt="Pakistan Sports Club Australia players warming up" className="h-full w-full object-cover" priority />
            </div>
          </div>
        </Container>
      </section>

      {/* Programs feature cards */}
      <section id="programs" className="py-12 sm:py-16">
        <Container>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.35em] text-primary">Programs</div>
            <h2 className="mt-3 font-sans text-4xl font-medium text-neutral-800 md:text-5xl">Signature PSCA programs</h2>
            <p className="mx-auto mt-3 max-w-2xl text-para-md text-muted-foreground">
              From premier cricket leagues to indoor futsal nights, Pakistan Sports Club Australia delivers organised
              competitions and events for every generation of our community.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {sportsCards.map((card) => (
              <article key={card.title} className="flex h-full flex-col gap-4">
                <div className="relative overflow-hidden rounded-[28px]">
                  <Image src={card.image} alt={card.title} className="aspect-[4/5] w-full object-cover" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <Badge icon={<CalendarIcon />}>{card.season}</Badge>
                    <Badge icon={<LocationIcon />}>{card.location}</Badge>
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-neutral-700">{card.title}</h3>
                <p className="text-para-sm text-muted-foreground">{card.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/contact">
              <Button className="rounded-full px-8">Register your team</Button>
            </a>
            <Link href="/events">
              <Button variant="outline" className="rounded-full px-8">View event calendar</Button>
            </Link>
          </div>
        </Container>
      </section>

      <FacilitiesSection />
      <TrainersSection />
      <PerksSection />
      <ArticlesSection />
      <TestimonialsSection />
      <FaqSection />
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
    title: "PSCA Premier Cricket League",
    desc: "Flagship one-day and T20 competitions bringing together Pakistani clubs from every major Australian city.",
    season: "September – March",
    location: "Sydney & Melbourne",
    image: cricketPhoto,
  },
  {
    title: "Indoor Futsal Nights",
    desc: "Fast-paced futsal matchups every Friday with mixed squads, music, and post-game chai.",
    season: "Year-round",
    location: "Auburn Indoor Centre",
    image: futsalPhoto,
  },
  {
    title: "Community Sports Festival",
    desc: "Annual family weekend featuring friendly matches, cultural stalls, and performances celebrating Pakistan.",
    season: "August",
    location: "Rotating national venues",
    image: heroThumbCommunity,
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

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
