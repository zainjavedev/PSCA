import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t py-8 text-sm text-muted-foreground">
      <Container className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p>© {year} PSCA</p>
        <p>
          Built with <span className="text-primary">Next.js</span> + <span className="text-primary">Tailwind</span>
        </p>
      </Container>
    </footer>
  );
}
