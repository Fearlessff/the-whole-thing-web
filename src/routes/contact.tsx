import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — THE WHOLE THING" },
      { name: "description", content: "Reach out to partnerships@thewholething.org or visit us in person." },
      { property: "og:title", content: "Contact — THE WHOLE THING" },
      { property: "og:description", content: "Write us. Visit us. Build with us." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

function Contact() {
  const [state, setState] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = { name: form.get("name"), email: form.get("email"), message: form.get("message") };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      setState("error");
      return;
    }
    setErrors({});
    setState("sent");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <SiteLayout>
      <PageHeader eyebrow="SAY HELLO" title="Start a Conversation" subtitle="Partnerships, press, or just to say hi. The door is always open." />

      <section className="container-prose py-16 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-3 text-gold mb-2"><Mail size={18} /><span className="text-xs tracking-[0.3em]">EMAIL</span></div>
            <a href="mailto:partnerships@thewholething.org" className="text-xl font-light hover-gold">partnerships@thewholething.org</a>
          </div>
          <div>
            <div className="flex items-center gap-3 text-gold mb-2"><MapPin size={18} /><span className="text-xs tracking-[0.3em]">IN PERSON</span></div>
            <p className="text-muted-foreground leading-relaxed">
              Better yet, see us in person! We love our community, so feel free to visit during normal business hours.
            </p>
          </div>
          <div className="pt-8 border-t border-border">
            <div className="text-xs tracking-[0.3em] text-gold mb-3">FOLLOW</div>
            <div className="flex flex-col gap-2 text-muted-foreground text-sm">
              <a href="https://twitter.com/Thewholething" target="_blank" rel="noreferrer" className="hover-gold">Twitter · @Thewholething</a>
              <a href="https://instagram.com/Thewholething" target="_blank" rel="noreferrer" className="hover-gold">Instagram · @Thewholething</a>
              <a href="https://linkedin.com/company/Thewholething" target="_blank" rel="noreferrer" className="hover-gold">LinkedIn · @Thewholething</a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-3 p-10 rounded-3xl border border-border bg-card/40 backdrop-blur space-y-6">
          <div>
            <label className="text-xs tracking-[0.3em] text-muted-foreground mb-2 block">NAME</label>
            <input name="name" maxLength={100} className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition" />
            {errors.name && <p className="text-destructive text-xs mt-2">{errors.name}</p>}
          </div>
          <div>
            <label className="text-xs tracking-[0.3em] text-muted-foreground mb-2 block">EMAIL</label>
            <input name="email" type="email" maxLength={255} className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition" />
            {errors.email && <p className="text-destructive text-xs mt-2">{errors.email}</p>}
          </div>
          <div>
            <label className="text-xs tracking-[0.3em] text-muted-foreground mb-2 block">MESSAGE</label>
            <textarea name="message" rows={5} maxLength={1000} className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition resize-none" />
            {errors.message && <p className="text-destructive text-xs mt-2">{errors.message}</p>}
          </div>
          <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium shadow-gold hover:opacity-90 transition">
            Send Message <Send size={14} />
          </button>
          {state === "sent" && <p className="text-gold text-sm">Thank you. We'll be in touch soon.</p>}
        </form>
      </section>
    </SiteLayout>
  );
}
