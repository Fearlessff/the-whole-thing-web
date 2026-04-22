import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/impact", label: "Impact" },
  { to: "/community", label: "Community" },
  { to: "/blog", label: "Journal" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-prose flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="The Whole Thing" className="h-9 w-9 object-contain transition-transform group-hover:rotate-180 duration-700" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-[0.2em] text-foreground">THE WHOLE THING</span>
            <span className="text-[10px] tracking-[0.4em] text-gold mt-1">TAL ♾ 11:11</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm tracking-wide text-muted-foreground hover-gold relative"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/get-involved"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition shadow-gold"
        >
          Join the Movement
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/60 animate-fade-in">
          <nav className="container-prose flex flex-col py-6 gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground hover-gold"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-5 py-3 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium"
            >
              Join the Movement
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
