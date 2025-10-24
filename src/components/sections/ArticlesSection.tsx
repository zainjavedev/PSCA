import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import cricketLeague from "@/assets/photos/pixabay-163526.jpg";
import futsalNight from "@/assets/photos/soccer.jpg";
import communityFestival from "@/assets/photos/vladvictoria-10544231.jpg";

type ArticleItem = {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  image: { src: typeof cricketLeague };
};

const articles: ArticleItem[] = [
  {
    tag: "Insights",
    date: "Nov 22, 2024",
    title: "How PSCA nurtures cricket pathways from juniors to national squads",
    excerpt:
      "Structured training blocks, selector visibility, and nationwide tournaments keep Pakistani-Australian cricketers progressing.",
    href: "/articles/cricket-pathways",
    image: { src: cricketLeague },
  },
  {
    tag: "Community",
    date: "Nov 18, 2024",
    title: "Inside our Friday futsal nights that bring the diaspora together",
    excerpt:
      "Weekly indoor games, post-match chai, and family-friendly programming make futsal the social heartbeat of PSCA.",
    href: "/articles/futsal-nights",
    image: { src: futsalNight },
  },
  {
    tag: "Events",
    date: "Nov 12, 2024",
    title: "What to expect at the Pakistan community sports festival 2025",
    excerpt:
      "From legends panels to kids cricket clinics, see how we celebrate Pakistani culture alongside friendly competition.",
    href: "/articles/community-festival-2025",
    image: { src: communityFestival },
  },
];

export function ArticlesSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="gap-6 sm:flex sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.35em] text-primary">Articles</div>
            <h2 className="mt-3 text-4xl font-medium text-primary md:text-5xl">Articles & resources</h2>
            <p className="mt-3 text-para-md text-muted-foreground">
              Discover stories, training tips, and event recaps that keep the Pakistan Sports Club Australia community
              connected across the country.
            </p>
          </div>
          <Link href="/articles" className="mt-6 inline-flex items-center sm:mt-0">
            <Button variant="outline" className="rounded-full px-6">
              Browse all posts
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="flex h-full flex-col">
              <div className="overflow-hidden rounded-[28px] border bg-card shadow-sm">
                <Image
                  src={article.image.src}
                  alt={article.title}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center rounded-full bg-secondary-200 px-3 py-1 text-xs font-medium text-primary">
                  {article.tag}
                </span>
                <span>{article.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-neutral-800">{article.title}</h3>
              <p className="mt-2 flex-1 text-para-sm text-muted-foreground">{article.excerpt}</p>
              <Link href={article.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Learn more
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

