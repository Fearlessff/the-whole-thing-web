import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display text-gradient-gold">404</h1>
        <p className="mt-4 text-muted-foreground">This page is not part of the whole thing — yet.</p>
        <Link to="/" className="mt-8 inline-block px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium">Return Home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "THE WHOLE THING — A Global Movement for Unity" },
      { name: "description", content: "Connecting every life, every day. A global movement built on small daily progress — .0027 × 365." },
      { property: "og:title", content: "THE WHOLE THING — A Global Movement for Unity" },
      { property: "og:description", content: "Total Addressable Lives. .0027 × 365. Join the movement." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.png" },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}
