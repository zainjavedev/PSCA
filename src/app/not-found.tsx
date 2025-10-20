import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h2 className="heading-2">Page not found</h2>
      <p className="mt-2 text-muted-foreground">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 text-primary hover:underline">Go Home</Link>
    </div>
  );
}

