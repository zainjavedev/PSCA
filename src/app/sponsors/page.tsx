import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Sponsors" };

const tiers = [
  { name: "Platinum", price: "$2000+", perks: ["Logo on kits", "Homepage feature", "Event naming"] },
  { name: "Gold", price: "$1000", perks: ["Website logo", "Social shout‑outs"] },
  { name: "Community", price: "$250", perks: ["Matchday banner", "Newsletter feature"] },
];

export default function SponsorsPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="space-y-8">
        <header className="max-w-3xl">
          <h1 className="heading-1">Sponsor the club</h1>
          <p className="mt-3 text-para-md text-muted-foreground">
            Support community sport and reach a passionate, family‑oriented audience.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="mt-1 text-2xl font-bold">{t.price}</div>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {t.perks.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="heading-2">Become a sponsor</h2>
          <p className="mt-2 text-para-md text-muted-foreground">
            We’ll tailor a package to your goals. Let’s chat!
          </p>
          <div className="mt-4 flex gap-3">
            <a href="mailto:partners@psca.org">
              <Button className="rounded-full">Email partners@psca.org</Button>
            </a>
            <a href="/contact">
              <Button variant="outline" className="rounded-full">Contact page</Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

