import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Heart, Handshake, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — THE WHOLE THING" },
      { name: "description", content: "Join, partner, or donate. Three ways to be .27% of the answer." },
      { property: "og:title", content: "Get Involved — THE WHOLE THING" },
      { property: "og:description", content: "Three ways to join the movement." },
    ],
  }),
  component: GetInvolved,
});

const paths = [
  { I: Users, t: "Join", d: "Become one of 8 billion. Commit to .0027 × 365 and make the equation personal.", cta: "Join the Movement" },
  { I: Handshake, t: "Partner", d: "Organizations, cities, and leaders who want to embed TAL as a standard, not a slogan.", cta: "Partner With Us" },
  { I: Heart, t: "Donate", d: "Every contribution goes toward measurable, transparent, globally visible impact.", cta: "Make a Gift" },
];

function GetInvolved() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="TAKE PART" title="Get Involved" subtitle="Three doors. One movement. Walk through any of them today." />

      <section className="container-prose pb-24 grid md:grid-cols-3 gap-6">
        {paths.map(({ I, t, d, cta }) => (
          <div key={t} className="group relative p-10 rounded-3xl border border-border hover:border-gold/60 bg-card/40 backdrop-blur transition overflow-hidden">
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-gold opacity-0 group-hover:opacity-10 blur-3xl transition" />
            <I size={32} className="text-gold mb-6" />
            <h3 className="text-3xl font-light mb-4">{t}</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">{d}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-gold text-sm tracking-[0.2em] group-hover:gap-4 transition-all">
              {cta.toUpperCase()} <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </section>

      <section className="container-prose pb-28">
        <div className="rounded-3xl border border-gold/20 bg-gradient-dark p-12 md:p-20 text-center shadow-glow">
          <div className="text-xs tracking-[0.4em] text-gold mb-4">11:11</div>
          <h2 className="text-4xl md:text-5xl font-light mb-6">The door is always open.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Write us. Visit us. Build with us. The whole thing is built one conversation at a time.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium shadow-gold">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
