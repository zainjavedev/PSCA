import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import heroThumbCommunity from "@/assets/photos/pixabay-358042.jpg";
import kevinSmith from "@/assets/photos/testimonials/kevin-smith.jpg";
import lilyWoods from "@/assets/photos/testimonials/lily-woods.jpg";
import matthewWoods from "@/assets/photos/testimonials/matthew-woods.jpg";

type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Samina Farooq",
    location: "Sydney, NSW",
    quote:
      "PSCA made settling into Australia so much easier. Our sons found friends fast, and the cricket program keeps them challenged every season.",
  },
  {
    name: "Imran & Nadia Malik",
    location: "Melbourne, VIC",
    quote:
      "From Ramadan futsal nights to family barbecues, the club maintains our cultural roots while providing professional coaching.",
  },
  {
    name: "Usman & Ayesha Khan",
    location: "Perth, WA",
    quote:
      "Traveling to interstate tournaments felt effortless with PSCA coordinating logistics. The community support is unmatched.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="gap-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-primary">Community</div>
            <h2 className="mt-3 text-4xl font-medium text-neutral-800 md:text-5xl">What our members say</h2>
            <p className="mt-3 max-w-2xl text-para-md text-muted-foreground">
              Hear from families and players who call Pakistan Sports Club Australia their sporting home.
            </p>
          </div>
          <Link href="/events" className="mt-6 inline-flex items-center sm:mt-0">
            <Button variant="outline" className="rounded-full px-6">
              Browse all programs
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[28px] border">
              <Image src={heroThumbCommunity} alt="PSCA families celebrating post match" className="aspect-[4/3] w-full object-cover" />
            </div>
            <blockquote className="rounded-[28px] border bg-card p-6 text-sm text-muted-foreground shadow-sm">
              “{testimonials[0].quote}”
              <footer className="mt-4 text-sm font-semibold text-neutral-800">
                {testimonials[0].name}
                <span className="block text-xs font-normal text-muted-foreground">{testimonials[0].location}</span>
              </footer>
            </blockquote>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border bg-card p-6 text-sm text-muted-foreground shadow-sm">
              “{testimonials[1].quote}”
              <footer className="mt-4 text-sm font-semibold text-neutral-800">
                {testimonials[1].name}
                <span className="block text-xs font-normal text-muted-foreground">{testimonials[1].location}</span>
              </footer>
            </div>
            <div className="overflow-hidden rounded-[28px] border">
              <Image src={kevinSmith} alt="Family of PSCA member smiling" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[28px] border">
              <Image src={lilyWoods} alt="Parent and child at PSCA training ground" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[28px] border">
              <Image src={matthewWoods} alt="Father and son cheering at PSCA match" className="aspect-[4/3] w-full object-cover" />
            </div>
            <blockquote className="rounded-[28px] border bg-card p-6 text-sm text-muted-foreground shadow-sm">
              “{testimonials[2].quote}”
              <footer className="mt-4 text-sm font-semibold text-neutral-800">
                {testimonials[2].name}
                <span className="block text-xs font-normal text-muted-foreground">{testimonials[2].location}</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
