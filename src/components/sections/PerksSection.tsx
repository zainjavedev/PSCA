import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

type PerkItem = {
  title: string;
  description: string;
  icon: () => JSX.Element;
};

const perks: PerkItem[] = [
  {
    title: "Elite coaching faculty",
    description: "Seasoned mentors from Grade cricket and futsal national leagues supporting every squad.",
    icon: CoachIcon,
  },
  {
    title: "Inclusive programs",
    description: "Men’s, women’s, youth, and masters competitions with community-first scheduling.",
    icon: InclusiveIcon,
  },
  {
    title: "Team culture",
    description: "Leadership workshops and social events that keep Pakistani spirit thriving.",
    icon: TeamIcon,
  },
  {
    title: "Individual plans",
    description: "Strength, conditioning, and recovery plans tailored to each athlete’s goals.",
    icon: PlanIcon,
  },
  {
    title: "Supportive facilities",
    description: "Access to prayer rooms, family lounges, and halal catering at major fixtures.",
    icon: SupportIcon,
  },
  {
    title: "Progress insights",
    description: "Season tracking dashboards for match stats, fitness testing, and coach feedback.",
    icon: InsightsIcon,
  },
];

export function PerksSection() {
  return (
    <section className="bg-secondary-200/40 py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-primary">Benefits</div>
          <h2 className="mt-3 text-4xl font-medium text-primary md:text-5xl">Why teams choose PSCA</h2>
          <p className="mx-auto mt-3 max-w-2xl text-para-md text-muted-foreground">
            From grassroots to elite, Pakistan Sports Club Australia provides the structure, support, and family you need
            to compete at your best across the nation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={perk.title}
                    className="flex h-full flex-col rounded-[28px] border border-secondary-300/60 bg-secondary-100/60 p-6 text-left shadow-sm"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary-200 text-primary">
                      <Icon />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-neutral-800">{perk.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{perk.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="flex h-full flex-col justify-between rounded-[28px] bg-primary text-primary-foreground p-8 shadow-lg">
            <div>
              <h3 className="text-2xl font-semibold">Join now and elevate your game</h3>
              <p className="mt-3 text-sm text-primary-foreground/85">
                Secure entry into national fixtures, priority access to facilities, and tailored support for your club or
                family.
              </p>
            </div>
            <Button variant="secondary" className="mt-6 rounded-full bg-white text-primary hover:bg-white/90">
              Become a PSCA member
            </Button>
            <div className="mt-10 h-20 w-20 self-end rounded-full bg-secondary-200/60" />
          </aside>
        </div>
      </Container>
    </section>
  );
}

function CoachIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="7" r="3" />
      <path d="M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" strokeLinecap="round" />
      <path d="M4 11h16" strokeLinecap="round" />
    </svg>
  );
}

function InclusiveIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="7" r="2.5" />
      <circle cx="12" cy="16" r="3" />
      <path d="M4.5 19.5c.5-1.8 2.3-3 4.5-3h6c2.2 0 4 1.2 4.5 3" strokeLinecap="round" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 19l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15V5" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 9h8" strokeLinecap="round" />
      <path d="M8 13h4" strokeLinecap="round" />
      <circle cx="16" cy="16" r="1.5" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21s-7-4.5-7-10.5a7 7 0 0 1 14 0c0 6-7 10.5-7 10.5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11v4" strokeLinecap="round" />
      <circle cx="12" cy="9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function InsightsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19h16" strokeLinecap="round" />
      <path d="M7 16v-6" strokeLinecap="round" />
      <path d="M12 16V8" strokeLinecap="round" />
      <path d="M17 16v-9" strokeLinecap="round" />
    </svg>
  );
}

