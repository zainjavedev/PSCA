import { Container } from "@/components/layout/Container";

export const metadata = { title: "Sports" };

const sports = [
  { name: "Cricket", blurb: "Weekend fixtures, nets and social T20s." },
  { name: "Football (Soccer)", blurb: "Casual kickabouts and small‑sided leagues." },
  { name: "Badminton", blurb: "Court bookings and club nights for all levels." },
  { name: "Volleyball", blurb: "Indoor sessions with beginner‑friendly coaching." },
  { name: "Tennis", blurb: "Social hits and junior development blocks." },
  { name: "Table Tennis", blurb: "Fast matches and friendly ladders." },
];

export default function SportsPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <header className="max-w-3xl">
          <h1 className="heading-1">Sports we play</h1>
          <p className="mt-3 text-para-md text-muted-foreground">
            Join a session that suits your vibe—competitive, social, or family fun.
          </p>
        </header>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sports.map((s) => (
            <article key={s.name} className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

