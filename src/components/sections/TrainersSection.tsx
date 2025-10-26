import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import heroMain from "@/assets/photos/usbofphotography-12732254.jpg";
import futsalPhoto from "@/assets/photos/soccer.jpg";
import heroThumbFestival from "@/assets/photos/vladvictoria-10544231.jpg";

type SocialLink = {
  label: string;
  href: string;
  icon: () => JSX.Element;
};

type Trainer = {
  name: string;
  role: string;
  badge: string;
  image: StaticImageData;
  socials: SocialLink[];
};

const trainers: Trainer[] = [
  {
    name: "Hamza Qureshi",
    role: "PSCA National Cricket Director",
    badge: "Cricket Coach",
    image: heroMain,
    socials: [
      { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
      { label: "X", href: "https://x.com", icon: XIcon },
      { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
    ],
  },
  {
    name: "Aisha Siddiqui",
    role: "Women’s Futsal & Fitness Lead",
    badge: "Futsal Coach",
    image: futsalPhoto,
    socials: [
      { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
      { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
      { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
    ],
  },
  {
    name: "Usman Farid",
    role: "Strength & Conditioning Strategist",
    badge: "Performance Coach",
    image: heroThumbFestival,
    socials: [
      { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
      { label: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
      { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
    ],
  },
];

export function TrainersSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="gap-6 sm:flex sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.35em] text-primary">Trainers</div>
            <h2 className="mt-3 text-4xl font-medium text-primary md:text-5xl">Meet our expert coaches</h2>
            <p className="mt-3 text-para-md text-muted-foreground">
              The Pakistan Sports Club Australia coaching panel brings decades of elite experience, guiding our players
              through cricket, futsal, and high-performance conditioning pathways.
            </p>
          </div>
          <Link href={"/members" as Route} className="mt-6 inline-flex items-center sm:mt-0">
            <Button variant="outline" className="rounded-full px-6">
              Meet all trainers
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="flex h-full flex-col rounded-[32px] border bg-card p-6 shadow-sm">
              <div className="relative overflow-hidden rounded-[28px]">
                <Image src={trainer.image} alt={trainer.name} className="aspect-[4/5] w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-secondary-200 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                  {trainer.badge}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-neutral-800">{trainer.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{trainer.role}</p>
              </div>
              <div className="mt-6 flex items-center gap-4 text-primary">
                {trainer.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-secondary-200/50 transition hover:border-primary hover:bg-primary/10"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M13.5 8.5V6.75c0-.6.4-1 1-1h1.5V3h-2.5c-2.1 0-3.5 1.3-3.5 3.6V8.5H8v2.8h2.5V21h3V11.3h2.4l.3-2.8h-2.7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M17.3 4h2.2l-5.1 5.9 6 8.1H15l-3.6-4.9-4.2 4.9H5.1l5.5-6.4-5.8-7.6h5.6l3.3 4.5L17.3 4z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M20.45 20.45h-3.6v-5.4c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.3-.1.2-.1.5-.1.8v5.5h-3.6s.1-8.9 0-9.8h3.6v1.4c.2-.7 1.2-1.7 2.9-1.7 2.1 0 3.7 1.4 3.7 4.4v5.7zM5.34 8.2a2.08 2.08 0 1 1 0-4.16 2.08 2.08 0 0 1 0 4.16zM7.14 20.45H3.5V10.68h3.64v9.77z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M21.6 7.2c-.2-.7-.7-1.2-1.4-1.4C19 5.5 12 5.5 12 5.5s-7 0-8.2.3c-.7.2-1.2.7-1.4 1.4C2 8.4 2 12 2 12s0 3.6.3 4.8c.2.7.7 1.2 1.4 1.4 1.2.3 8.2.3 8.2.3s7 0 8.2-.3c.7-.2 1.2-.7 1.4-1.4.3-1.2.3-4.8.3-4.8s0-3.6-.3-4.8zM9.8 15.4V8.6l5.5 3.4-5.5 3.4z" />
    </svg>
  );
}
