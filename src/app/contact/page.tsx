import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="space-y-8">
        <header className="max-w-3xl">
          <h1 className="heading-1">Contact us</h1>
          <p className="mt-3 text-para-md text-muted-foreground">
            Reach out with questions about sessions, memberships or partnerships.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <form className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-md border p-3" placeholder="First name" />
              <input className="rounded-md border p-3" placeholder="Last name" />
              <input type="email" className="rounded-md border p-3 sm:col-span-2" placeholder="Email" />
              <textarea className="rounded-md border p-3 sm:col-span-2" placeholder="Message" rows={5} />
            </div>
            <Button className="mt-4 rounded-full">Send</Button>
          </form>

          <div className="space-y-4">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="font-semibold">General</div>
              <div className="mt-2 text-sm text-muted-foreground">hello@psca.org</div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="font-semibold">Partnerships</div>
              <div className="mt-2 text-sm text-muted-foreground">partners@psca.org</div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="font-semibold">Phone</div>
              <div className="mt-2 text-sm text-muted-foreground">(123) 456‑7890</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

