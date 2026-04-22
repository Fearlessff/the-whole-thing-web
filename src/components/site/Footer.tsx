import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-32 bg-gradient-dark">
      <div className="container-prose py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-display text-xl tracking-[0.2em]">THE WHOLE THING</div>
              <div className="text-[10px] tracking-[0.4em] text-gold mt-1">TAL ♾ 11:11</div>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            A global movement built on small daily progress. Connecting every life, every day — one 0.27% at a time.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="https://twitter.com/Thewholething" target="_blank" rel="noreferrer" className="p-2.5 rounded-full border border-border hover:border-gold hover:text-gold transition"><Twitter size={16}/></a>
            <a href="https://instagram.com/Thewholething" target="_blank" rel="noreferrer" className="p-2.5 rounded-full border border-border hover:border-gold hover:text-gold transition"><Instagram size={16}/></a>
            <a href="https://linkedin.com/company/Thewholething" target="_blank" rel="noreferrer" className="p-2.5 rounded-full border border-border hover:border-gold hover:text-gold transition"><Linkedin size={16}/></a>
            <a href="mailto:partnerships@thewholething.org" className="p-2.5 rounded-full border border-border hover:border-gold hover:text-gold transition"><Mail size={16}/></a>
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] text-gold mb-5">EXPLORE</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover-gold">About</Link></li>
            <li><Link to="/impact" className="hover-gold">Impact</Link></li>
            <li><Link to="/community" className="hover-gold">Community</Link></li>
            <li><Link to="/blog" className="hover-gold">Journal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] text-gold mb-5">ACT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/get-involved" className="hover-gold">Join</Link></li>
            <li><Link to="/get-involved" className="hover-gold">Partner</Link></li>
            <li><Link to="/get-involved" className="hover-gold">Donate</Link></li>
            <li><Link to="/contact" className="hover-gold">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground tracking-wider">
          <span>© {new Date().getFullYear()} THE WHOLE THING. All lives addressable.</span>
          <span className="text-gold">.0027 × 365 = ∞</span>
        </div>
      </div>
    </footer>
  );
}
