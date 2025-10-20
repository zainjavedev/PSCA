import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata = { title: "Style Guide" };

export default function StyleGuidePage() {
  return (
    <Container className="space-y-10 py-10">
      <section>
        <h2 className="heading-2">Colors</h2>
        <p className="mt-1 text-sm text-muted-foreground">Key tokens exposed via Tailwind theme.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ColorSwatch name="primary" className="bg-primary text-primary-foreground" />
          <ColorSwatch name="secondary" className="bg-secondary text-secondary-foreground" />
          <ColorSwatch name="accent" className="bg-accent text-accent-foreground" />
          <ColorSwatch name="destructive" className="bg-destructive text-destructive-foreground" />
          <ColorSwatch name="muted" className="bg-muted text-muted-foreground" />
          <ColorSwatch name="card" className="bg-card text-card-foreground border" />
          <ColorSwatch name="background" className="bg-background text-foreground border" />
          <ColorSwatch name="border" className="bg-background text-foreground border-4" borderOnly />
        </div>
      </section>

      <section>
        <h2 className="heading-2">Typography</h2>
        <div className="mt-4 space-y-4">
          <h1 className="heading-1">Heading 1 – The quick brown fox</h1>
          <h2 className="heading-2">Heading 2 – The quick brown fox</h2>
          <p>
            Body – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, leo a interdum suscipit, mauris
            lectus volutpat nisl, vitae ultrices massa neque non risus.
          </p>
          <p className="muted">Muted – Use for subdued supporting text.</p>
        </div>
      </section>

      <section>
        <h2 className="heading-2">Buttons & Badges</h2>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <section>
        <h2 className="heading-2">Cards</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cards are simple containers with a border, background, and shadow.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Container>
  );
}

function ColorSwatch({ name, className, borderOnly = false }: { name: string; className: string; borderOnly?: boolean }) {
  return (
    <div className="overflow-hidden rounded-md border">
      <div className={"h-16 w-full " + className} />
      <div className="px-3 py-2 text-xs text-muted-foreground">
        <div className="font-medium text-foreground">{name}</div>
        <div>{borderOnly ? "border token" : "bg/text tokens"}</div>
      </div>
    </div>
  );
}

