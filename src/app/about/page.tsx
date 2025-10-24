import { Container } from "@/components/layout/Container";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="space-y-10">
        <header className="max-w-3xl">
          <h1 className="heading-1">About PSCA</h1>
          <p className="mt-3 text-para-md text-muted-foreground">
            Pakistan Sports Club (PSCA) brings the community together through
            sport. We organise weekly activities, leagues, training sessions and family‑friendly
            events across the year. Our goal is simple: create a fun, inclusive environment
            where everyone can play, connect and thrive.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Community first",
              desc: "We celebrate culture and build friendships through healthy competition.",
            },
            { title: "All ages", desc: "Kids, youth and adults programs with friendly coaches." },
            { title: "Volunteer led", desc: "A passionate committee and volunteers keep things moving." },
          ].map((f) => (
            <div key={f.title} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="heading-2">Mission</h2>
            <p className="mt-2 text-para-md text-muted-foreground">
              Promote active lifestyles and create opportunities for connection through
              grassroots sports. We keep fees affordable, welcome new players, and
              champion sportsmanship on and off the field.
            </p>
          </div>
          <div>
            <h2 className="heading-2">History</h2>
            <p className="mt-2 text-para-md text-muted-foreground">
              What began as weekend games among friends has grown into a club serving
              hundreds across Sydney. From cricket to badminton, our offering keeps
              expanding thanks to a supportive community and sponsors.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
