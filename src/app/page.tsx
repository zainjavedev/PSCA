import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container className="py-12">
      <section className="text-center">
        <h1 className="heading-1">Next.js + Tailwind Starter</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Clone, install, and build fast. Opinionated theming, common components, and a style guide.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/style-guide"><Button>Open Style Guide</Button></Link>
          <Link href="https://nextjs.org/docs" target="_blank"><Button variant="secondary">Next.js Docs</Button></Link>
        </div>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <CardTitle>{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </Container>
  );
}

const features = [
  {
    title: "Tailwind + Themes",
    desc: "CSS variables + Tailwind with dark mode via a tiny ThemeProvider.",
  },
  {
    title: "Common Components",
    desc: "Button, Card, Badge, Navbar, Footer, and helper utilities.",
  },
  {
    title: "Style Guide",
    desc: "See tokens, colors, typography, and component examples in one place.",
  },
  {
    title: "TypeScript Ready",
    desc: "Strict TS config and path aliases for components and libs.",
  },
  {
    title: "Accessible Defaults",
    desc: "Semantic HTML and good contrast color choices out of the box.",
  },
  {
    title: "Production Ready",
    desc: "Linting, formatting, and sensible Next.js defaults.",
  },
];

