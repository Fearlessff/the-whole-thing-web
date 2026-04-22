import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — THE WHOLE THING" },
      { name: "description", content: "If every human improves 0.27% daily, the world transforms exponentially." },
      { property: "og:title", content: "Impact — THE WHOLE THING" },
      { property: "og:description", content: "The measurable mathematics of global unity." },
    ],
  }),
  component: Impact,
});

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 2000;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}{suffix}</span>;
}

function Impact() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="GLOBAL IMPACT" title="The Math of Unity" subtitle="If every human improves just 0.27% daily, the world transforms exponentially." />

      <section className="container-prose py-20 grid md:grid-cols-4 gap-6">
        {[
          { v: 8, s: "B", d: 0, l: "Total Addressable Lives" },
          { v: 0.27, s: "%", d: 2, l: "Daily Progress" },
          { v: 365, s: "", d: 0, l: "Days Per Cycle" },
          { v: 2.63, s: "×", d: 2, l: "Compounded Growth" },
        ].map((k) => (
          <div key={k.l} className="p-8 rounded-2xl border border-border bg-card/40 text-center hover:border-gold/40 transition">
            <div className="text-5xl font-display text-gradient-gold mb-2"><Counter to={k.v} suffix={k.s} decimals={k.d} /></div>
            <div className="text-xs tracking-[0.3em] text-muted-foreground">{k.l}</div>
          </div>
        ))}
      </section>

      <section className="container-prose py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-[0.4em] text-gold mb-5">HOW IT COMPOUNDS</div>
          <h2 className="text-4xl font-light mb-6">Small becomes staggering.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            1.0027 raised to the 365th power equals approximately 2.65. That means a human being who improves by 0.27% every day for one year is 165% better than where they began.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Multiply that across 8 billion lives and the ceiling disappears. This is not optimism. This is arithmetic.
          </p>
        </div>
        <div className="rounded-2xl border border-gold/20 p-8 bg-gradient-dark">
          <div className="space-y-4">
            {[
              { d: "Day 1", v: 15 },
              { d: "Day 30", v: 28 },
              { d: "Day 90", v: 45 },
              { d: "Day 180", v: 68 },
              { d: "Day 365", v: 100 },
            ].map((r) => (
              <div key={r.d}>
                <div className="flex justify-between text-xs tracking-[0.2em] text-muted-foreground mb-2">
                  <span>{r.d}</span><span className="text-gold">{r.v}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-gradient-gold" style={{ width: `${r.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
