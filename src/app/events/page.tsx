import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Events" };

const events = [
  { date: "Nov 23", title: "Community Cricket Day", where: "Sydney Park Oval" },
  { date: "Dec 07", title: "Badminton Club Night", where: "Greenwood Sports Centre" },
  { date: "Jan 12", title: "Family Sports Picnic", where: "Centennial Parklands" },
];

export default function EventsPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="space-y-8">
        <header className="max-w-3xl">
          <h1 className="heading-1">Upcoming events</h1>
          <p className="mt-3 text-para-md text-muted-foreground">
            From tournaments to social gatherings—mark your calendar and bring the family.
          </p>
        </header>

        <div className="space-y-4">
          {events.map((e) => (
            <div key={e.title} className="flex items-center justify-between rounded-lg border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-200 font-semibold text-neutral-700">
                  {e.date}
                </div>
                <div>
                  <div className="font-medium">{e.title}</div>
                  <div className="text-sm text-muted-foreground">{e.where}</div>
                </div>
              </div>
              <Button className="rounded-full">Attend</Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

