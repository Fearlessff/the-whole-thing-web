import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-80" />
      <div className="container-prose relative py-24 md:py-32 text-center">
        {eyebrow && (
          <div className="text-xs tracking-[0.4em] text-gold mb-6 animate-fade-up">{eyebrow}</div>
        )}
        <h1 className="text-5xl md:text-7xl font-light animate-fade-up delay-100">
          <span className="text-gradient-gold">{title}</span>
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
