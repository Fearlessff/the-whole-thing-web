import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { posts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — THE WHOLE THING" },
      { name: "description", content: "Essays on unity, daily progress, and Total Addressable Lives." },
      { property: "og:title", content: "Journal — THE WHOLE THING" },
      { property: "og:description", content: "Essays on the mathematics of unity." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="JOURNAL" title="Essays & Reflections" subtitle="Writings on unity, Total Addressable Lives, and the quiet arithmetic of daily progress." />

      <section className="container-prose py-16 grid gap-8">
        {posts.map((p, i) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group grid md:grid-cols-[auto_1fr_auto] gap-8 items-start p-8 rounded-2xl border border-border hover:border-gold/40 bg-card/40 transition"
          >
            <div className="text-6xl font-display text-muted-foreground group-hover:text-gold transition">0{i + 1}</div>
            <div>
              <div className="text-xs tracking-[0.3em] text-gold mb-3">{p.date.toUpperCase()} · {p.readTime.toUpperCase()}</div>
              <h2 className="text-3xl font-light mb-3 group-hover:text-gradient-gold transition">{p.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <div className="mt-4 text-xs tracking-[0.2em] text-muted-foreground">BY {p.author.toUpperCase()}</div>
            </div>
            <ArrowRight className="mt-2 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition" />
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
