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
        <p className="mt-1 text-sm text-muted-foreground">Brand palette mapped to Tailwind classes.</p>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="mb-3 text-base font-semibold">Core tokens</h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ColorSwatch label="Primary" className="bg-primary text-primary-foreground" hex="#42C652" />
              <ColorSwatch label="Secondary" className="bg-secondary text-secondary-foreground" hex="#D8E662" />
              <ColorSwatch label="Accent" className="bg-accent text-accent-foreground" />
              <ColorSwatch label="Destructive" className="bg-destructive text-destructive-foreground" />
              <ColorSwatch label="Muted" className="bg-muted text-muted-foreground" />
              <ColorSwatch label="Card" className="bg-card text-card-foreground border" />
              <ColorSwatch label="Background" className="bg-background text-foreground border" />
              <ColorSwatch label="Border" className="bg-background text-foreground border-4" />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold">Primary colors</h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ColorSwatch label="Primary 100" className="bg-primary-100" hex="#42C652" />
            </div>
          </div>

          <hr className="border-border" />

          <div>
            <h3 className="mb-3 text-base font-semibold">Secondary colors</h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ColorSwatch label="Secondary 100" className="bg-secondary-100" hex="#E4FADA" />
              <ColorSwatch label="Secondary 200" className="bg-secondary-200" hex="#DBF4A9" />
              <ColorSwatch label="Secondary 300" className="bg-secondary-300" hex="#D8E662" />
              <ColorSwatch label="Secondary 400" className="bg-secondary-400" hex="#D1E5DD" />
            </div>
          </div>

          <hr className="border-border" />

          <div>
            <h3 className="mb-3 text-base font-semibold">Neutral colors</h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ColorSwatch label="Neutral 100" className="bg-neutral-100" hex="#FFFFFF" />
              <ColorSwatch label="Neutral 200" className="bg-neutral-200" hex="#EDF6E9" />
              <ColorSwatch label="Neutral 300" className="bg-neutral-300" hex="#BBC8C3" />
              <ColorSwatch label="Neutral 400" className="bg-neutral-400" hex="#6A847A" />
              <ColorSwatch label="Neutral 500" className="bg-neutral-500" hex="#2E8361" />
              <ColorSwatch label="Neutral 600" className="bg-neutral-600" hex="#245240" />
              <ColorSwatch label="Neutral 700" className="bg-neutral-700" hex="#35463F" />
              <ColorSwatch label="Neutral 800" className="bg-neutral-800" hex="#243C38" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="heading-2">Typography</h2>
        <div className="mt-4 divide-y rounded-md border">
          <TypeRow label="Display 10" className="text-display-10 font-semibold" size="75px" lineHeight="1.115em" />
          <TypeRow label="Display 9" className="text-display-9 font-semibold" size="60px" lineHeight="1.115em" />
          <TypeRow label="Display 8" className="text-display-8 font-semibold" size="48px" lineHeight="1.25em" />
          <TypeRow label="Display 7" className="text-display-7 font-semibold" size="36px" lineHeight="1.25em" />
          <TypeRow label="Display 2" className="text-display-2 font-semibold" size="16px" lineHeight="1.25em" />
          <TypeRow label="Display 1" className="text-display-1 font-semibold" size="14px" lineHeight="1.25em" />
          <div className="p-5 text-sm text-muted-foreground">&nbsp;</div>
          <TypeRow
            label="Paragraph Large – Gravida vulputate scelerisque dui at aliquam at. Nec purus nisl a tellus velit tellus."
            className="text-para-lg"
            size="18px"
            lineHeight="1.5em"
          />
          <TypeRow
            label="Paragraph Default – Gravida vulputate scelerisque dui at aliquam at. Nec purus nisl a tellus velit tellus."
            className="text-para-md"
            size="16px"
            lineHeight="1.5em"
          />
          <TypeRow
            label="Paragraph Small – Gravida vulputate scelerisque dui at aliquam at. Nec purus nisl a tellus velit tellus."
            className="text-para-sm"
            size="14px"
            lineHeight="1.5em"
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Weights: Default (normal), Mid (medium), Strong (semibold).</p>
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

function ColorSwatch({ label, className, hex }: { label: string; className: string; hex?: string }) {
  return (
    <div className="overflow-hidden rounded-md border bg-card">
      <div className={"h-24 w-full " + className} />
      <div className="flex items-center justify-between px-3 py-2 text-xs text-muted-foreground">
        <div className="font-medium text-foreground">{label}</div>
        {hex ? (
          <span className="rounded border px-1.5 py-0.5 font-mono text-[10px] text-foreground/80">{hex}</span>
        ) : null}
      </div>
    </div>
  );
}

function TypeRow({ label, className, size, lineHeight }: { label: string; className: string; size: string; lineHeight: string }) {
  return (
    <div className="grid grid-cols-1 items-baseline gap-4 p-5 sm:grid-cols-3">
      <div className="sm:col-span-2">
        <div className={className}>{label}</div>
      </div>
      <div className="flex items-center justify-start gap-6 text-sm text-muted-foreground sm:justify-end">
        <div>
          <div className="text-foreground">{size}</div>
          <div className="text-xs">Size</div>
        </div>
        <div>
          <div className="text-foreground">{lineHeight}</div>
          <div className="text-xs">Line Height</div>
        </div>
        <div className="hidden sm:block">
          <div className="text-foreground">Default • Mid • Strong</div>
          <div className="text-xs">Weights</div>
        </div>
      </div>
    </div>
  );
}
