import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { getPost, posts } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — THE WHOLE THING` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Journal — THE WHOLE THING" }],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-prose py-40 text-center">
        <h1 className="text-5xl font-display text-gradient-gold mb-4">Not found</h1>
        <Link to="/blog" className="text-gold">← Back to journal</Link>
      </div>
    </SiteLayout>
  ),
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <SiteLayout>
      <article className="container-prose py-20 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-muted-foreground hover:text-gold transition mb-10">
          <ArrowLeft size={14} /> BACK TO JOURNAL
        </Link>
        <div className="text-xs tracking-[0.3em] text-gold mb-5">{post.date.toUpperCase()} · {post.readTime.toUpperCase()}</div>
        <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 text-gradient-gold">{post.title}</h1>
        <div className="text-sm text-muted-foreground mb-12 pb-12 border-b border-border">By {post.author}</div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90 font-light">
          {post.content.map((para, i) => (
            <p key={i} className={i === 0 ? "text-xl leading-relaxed" : ""}>{para}</p>
          ))}
        </div>
      </article>

      <section className="container-prose py-16 border-t border-border">
        <div className="text-xs tracking-[0.4em] text-gold mb-8">CONTINUE READING</div>
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group p-6 rounded-2xl border border-border hover:border-gold/40 transition">
              <div className="text-xs tracking-[0.3em] text-muted-foreground mb-2">{p.date.toUpperCase()}</div>
              <h3 className="text-xl font-light group-hover:text-gold transition">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
