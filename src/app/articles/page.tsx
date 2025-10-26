import { Container } from "@/components/layout/Container";

export default function ArticlesPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-primary">Articles</div>
        <h1 className="mt-4 text-4xl font-semibold text-neutral-800 md:text-5xl">
          Articles & resources
        </h1>
        <p className="mt-4 text-para-md text-muted-foreground">
          Our editorial hub is on the way. We&apos;re curating match reports, community stories, and training insights
          from Pakistan Sports Club Australia. Check back soon or follow us on social media for updates.
        </p>
      </div>
    </Container>
  );
}

