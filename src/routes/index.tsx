import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Play, Infinity as InfinityIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE WHOLE THING — Connecting Every Life, Every Day" },
      { name: "description", content: "A global movement built on small daily progress. .0027 × 365." },
      { property: "og:title", content: "THE WHOLE THING — Connecting Every Life, Every Day" },
      { property: "og:description", content: "Total Addressable Lives. Join the movement for global unity." },
      { property: "og:image", content: "/hero-bg.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-24 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="absolute inset-0 grain" />

        <div className="container-prose relative py-32 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gold/30 bg-background/40 backdrop-blur text-xs tracking-[0.4em] text-gold mb-8 animate-fade-up">
            <InfinityIcon size={14} /> TAL · 11:11
          </div>
          <h1 className="text-6xl md:text-8xl font-light leading-[1.05] animate-fade-up delay-100">
            Connecting <span className="text-gradient-gold italic">Every Life,</span><br />
            Every Day
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
            A global movement built on small daily progress — <span className="text-gold">.0027 × 365.</span>
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Link to="/get-involved" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium tracking-wide shadow-gold hover:opacity-90 transition">
              Join the Movement
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/get-involved" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border hover:border-gold hover:text-gold text-sm font-medium tracking-wide transition">
              Partner With Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-muted-foreground animate-glow-pulse">
          SCROLL
        </div>
      </section>

      {/* VIDEO */}
      <section className="relative py-28">
        <div className="container-prose">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.4em] text-gold mb-4">THE VISION</div>
            <h2 className="text-4xl md:text-6xl font-light">Watch the Vision</h2>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-gold/20 shadow-gold group">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Ww21q1jqimI"
              title="The Whole Thing — Vision"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gold/20 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-28 border-t border-border/60">
        <div className="container-prose grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs tracking-[0.4em] text-gold mb-5">OUR MISSION</div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">To unify humanity through measurable daily progress.</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Every human counts. Every day matters. We exist to make global unity quantifiable — not as a slogan, but as a standard.
            </p>
          </div>
          <div>
            <div className="text-xs tracking-[0.4em] text-gold mb-5">OUR VISION</div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">A world where every life is <span className="text-gradient-gold italic">addressable.</span></h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We measure Total Addressable Lives — TAL — because what gets measured gets honored. 8 billion stakeholders. One shared horizon.
            </p>
          </div>
        </div>
      </section>

      {/* TAL VISUAL */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-60" />
        <div className="container-prose relative text-center">
          <div className="text-xs tracking-[0.4em] text-gold mb-5">THE EQUATION</div>
          <div className="text-5xl md:text-8xl font-display tracking-tight">
            <span className="text-gradient-gold">.0027</span>
            <span className="text-muted-foreground mx-4">×</span>
            <span>365</span>
            <span className="text-muted-foreground mx-4">=</span>
            <span className="text-gradient-gold"><InfinityIcon className="inline" size={80} /></span>
          </div>
          <p className="mt-10 max-w-2xl mx-auto text-muted-foreground leading-relaxed text-lg">
            If every human improves just 0.27% each day, the world transforms exponentially. This is the mathematics of unity.
          </p>
          <Link to="/impact" className="mt-10 inline-flex items-center gap-2 text-gold hover:gap-4 transition-all text-sm tracking-[0.2em]">
            SEE THE IMPACT <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container-prose">
          <div className="rounded-3xl border border-gold/20 bg-gradient-dark p-12 md:p-20 text-center shadow-glow">
            <h2 className="text-4xl md:text-6xl font-light leading-tight">Be <span className="text-gradient-gold italic">0.27%</span> of the answer.</h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">Every movement begins with one. Today, that one is you.</p>
            <Link to="/get-involved" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium shadow-gold">
              Begin Today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
