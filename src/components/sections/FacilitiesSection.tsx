'use client';

import Image from "next/image";
import { useState, type ReactElement } from "react";
import { Container } from "@/components/layout/Container";
import facilityPhoto from "@/assets/photos/pixabay-358042.jpg";

type FacilityItem = {
  title: string;
  description: string;
  icon: () => ReactElement;
};

const facilityItems: FacilityItem[] = [
  {
    title: "Community Pavilion",
    description:
      "The heart of PSCA meetups, featuring a presentation stage, AV for match screenings, and space for cultural showcases.",
    icon: PavilionIcon,
  },
  {
    title: "Practice Nets",
    description: "Floodlit, turf-lined cricket nets managed by accredited coaches for batting and bowling development.",
    icon: NetsIcon,
  },
  {
    title: "Indoor Training Hall",
    description: "Versatile indoor court for futsal, badminton, and pre-season conditioning regardless of the weather.",
    icon: IndoorIcon,
  },
  {
    title: "Family Lounge",
    description: "Comfortable lounge with chai service, prayer area, and kids corner so families can stay connected on match day.",
    icon: LoungeIcon,
  },
];

export function FacilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-primary">Facilities</div>
          <h2 className="mt-3 text-4xl font-medium text-neutral-800 md:text-5xl">
            Facilities created for Pakistan Sports Club Australia
          </h2>
          <p className="mt-4 max-w-xl text-para-md text-muted-foreground">
            Every PSCA venue blends professional-grade sporting infrastructure with the warmth of our Pakistani
            community, making training and events feel like home.
          </p>

          <div className="mt-10 rounded-[30px] border border-neutral-200/80 bg-card shadow-sm">
            <ul>
              {facilityItems.map((facility, index) => {
                const Icon = facility.icon;
                const isActive = index === activeIndex;

                return (
                  <li
                    key={facility.title}
                    className={`transition-colors ${index !== 0 ? "border-t border-neutral-200/70" : ""} ${
                      isActive ? "bg-secondary-100/70" : "hover:bg-neutral-100"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-expanded={isActive}
                      aria-controls={`facility-panel-${index}`}
                      className="flex w-full items-center gap-4 px-6 py-5 text-left sm:px-8"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary-200 text-primary">
                        <Icon />
                      </span>
                      <div className="flex flex-1 items-start justify-between gap-4">
                        <div>
                          <div className="text-lg font-semibold text-neutral-700">{facility.title}</div>
                        </div>
                        <span className="mt-1 text-neutral-400">
                          {isActive ? <ChevronDownIcon /> : <ChevronRightIcon />}
                        </span>
                      </div>
                    </button>
                    <div
                      id={`facility-panel-${index}`}
                      className={`px-6 pb-6 text-sm text-muted-foreground sm:px-8 ${
                        isActive ? "block" : "hidden"
                      }`}
                    >
                      <p>{facility.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="relative h-full">
          <p className="text-para-md text-muted-foreground">
            Our spaces welcome families, alumni, and new arrivals — a place to train hard, celebrate wins, and keep
            Pakistani culture thriving in Australia.
          </p>
          <div className="relative mt-6 overflow-hidden rounded-[32px] border bg-card shadow-sm">
            <Image
              src={facilityPhoto}
              alt="Pakistan Sports Club Australia facility with training nets"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="pointer-events-none absolute -left-10 top-10 hidden h-24 w-24 rounded-full bg-secondary-200/60 sm:block" />
            <div className="pointer-events-none absolute -bottom-8 right-8 hidden h-32 w-32 rounded-[40px] bg-secondary-300/40 sm:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function PavilionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 10.5 12 6l8 4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 11v7h14v-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21h6" strokeLinecap="round" />
    </svg>
  );
}

function NetsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 5v14" strokeLinecap="round" />
      <path d="M16 5v14" strokeLinecap="round" />
      <path d="M4 12h16" strokeLinecap="round" />
    </svg>
  );
}

function IndoorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="7" width="14" height="12" rx="2" />
      <path d="M9 11h6" strokeLinecap="round" />
      <path d="M9 15h6" strokeLinecap="round" />
      <path d="M7 3h10" strokeLinecap="round" />
    </svg>
  );
}

function LoungeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14a3 3 0 0 1 3 3v2H2v-2a3 3 0 0 1 3-3Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 12V9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

