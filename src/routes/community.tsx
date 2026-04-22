import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — THE WHOLE THING" },
      { name: "description", content: "A global community bound by universal love and measurable progress." },
      { property: "og:title", content: "Community — THE WHOLE THING" },
      { property: "og:description", content: "Universal love, worldwide." },
      { property: "og:image", content: "/community.jpg" },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="UNIVERSAL LOVE" title="One Community, One Horizon" subtitle="From every continent, every time zone, every tradition — one shared daily commitment." />

      <section className="container-prose pb-20">
        <div className="relative rounded-3xl overflow-hidden border border-gold/20 shadow-gold">
          <img src="/community.jpg" alt="Global community" className="w-full h-[500px] object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-0 p-10">
            <div className="text-xs tracking-[0.4em] text-gold mb-3">PRESENT IN</div>
            <div className="text-5xl font-display">47 countries · 312 cities</div>
          </div>
        </div>
      </section>

      <section className="container-prose py-16 grid md:grid-cols-3 gap-6">
        {[
          { r: "The Americas", c: "74k participants", t: "From São Paulo to Toronto, daily circles keep the equation alive." },
          { r: "Europe & Africa", c: "112k participants", t: "Where the oldest cities meet the newest commitments." },
          { r: "Asia & Oceania", c: "196k participants", t: "The largest chapter. The most unified dawn on earth." },
        ].map((x) => (
          <div key={x.r} className="p-8 rounded-2xl border border-border bg-card/40 hover:border-gold/40 transition">
            <div className="text-xs tracking-[0.3em] text-gold mb-2">{x.c.toUpperCase()}</div>
            <h3 className="text-2xl font-light mb-3">{x.r}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{x.t}</p>
          </div>
        ))}
      </section>

      <section className="container-prose py-20 text-center">
        <div className="text-xs tracking-[0.4em] text-gold mb-4">STAY CONNECTED</div>
        <h2 className="text-4xl font-light mb-10">@Thewholething</h2>
        <div className="flex items-center justify-center gap-6">
          {[
            { I: Twitter, h: "https://twitter.com/Thewholething", l: "Twitter" },
            { I: Instagram, h: "https://instagram.com/Thewholething", l: "Instagram" },
            { I: Linkedin, h: "https://linkedin.com/company/Thewholething", l: "LinkedIn" },
          ].map(({ I, h, l }) => (
            <a key={l} href={h} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3">
              <div className="p-5 rounded-full border border-border group-hover:border-gold group-hover:text-gold transition">
                <I size={20} />
              </div>
              <span className="text-xs tracking-[0.3em] text-muted-foreground group-hover:text-gold transition">{l.toUpperCase()}</span>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
