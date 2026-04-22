import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — THE WHOLE THING" },
      { name: "description", content: "The story and philosophy behind a global movement for unity." },
      { property: "og:title", content: "About — THE WHOLE THING" },
      { property: "og:description", content: "Founder Kameron Katsch on TAL, .0027 × 365, and the mathematics of unity." },
      { property: "og:image", content: "/founder.png" },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2026", label: "Awareness", text: "Launching the vision. Seeding the language of TAL across communities and leaders." },
  { year: "2027", label: "Expansion", text: "Partnerships across continents. Measurable daily progress at city-scale." },
  { year: "2028", label: "Global Scale", text: "Eight billion participants. One shared equation. The whole thing, whole." },
];

function About() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="OUR STORY" title="The Whole Thing" subtitle="Unity is not negotiated between nations. It is remembered inside individuals — and made contagious." />

      <section className="container-prose py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs tracking-[0.4em] text-gold mb-5">MISSION & PHILOSOPHY</div>
          <h2 className="text-4xl font-light mb-6">A movement, not an institution.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            THE WHOLE THING was born from a simple refusal: that the problems of a planetary species require planetary heroics. They don't. They require eight billion quiet, daily acts of coherence.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We measure what matters. Total Addressable Lives. .0027 × 365. 11:11. These aren't slogans — they are scaffolding for a future that remembers every human in it.
          </p>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-gold/20 shadow-gold">
          <img src="/community.jpg" alt="Global community" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24 border-t border-border/60 bg-gradient-dark">
        <div className="container-prose grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative rounded-3xl overflow-hidden border border-gold/20 shadow-gold">
              <img src="/founder.png" alt="Kameron Katsch" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs tracking-[0.4em] text-gold mb-5">FOUNDER</div>
            <h2 className="text-5xl font-light mb-4">Kameron Katsch</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kameron Katsch is the visionary behind THE WHOLE THING, a global initiative focused on unifying humanity through measurable daily progress and collective impact.
            </p>
            <div className="mt-8 pt-8 border-t border-border/60 text-sm text-muted-foreground italic font-display text-xl">
              "You cannot scale what you have not embodied. The whole thing starts in one chest."
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-prose py-28">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.4em] text-gold mb-4">THE HORIZON</div>
          <h2 className="text-4xl md:text-5xl font-light">A three-year arc.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {timeline.map((t, i) => (
            <div key={t.year} className="relative group p-8 rounded-2xl border border-border hover:border-gold/40 transition bg-card/40 backdrop-blur">
              <div className="text-xs tracking-[0.3em] text-gold mb-2">PHASE 0{i+1}</div>
              <div className="text-6xl font-display text-gradient-gold mb-2">{t.year}</div>
              <div className="text-xl mb-3">{t.label}</div>
              <p className="text-muted-foreground leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
