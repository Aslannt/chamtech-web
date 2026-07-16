import type { Metadata } from "next";
import Link from "next/link";
import { PlaygroundShell } from "@/components/playground/playground-shell";

export const metadata: Metadata = {
  title: "ChamTech Sync Playground | Deivid Vanegas",
  description:
    "Interactive simulation of a MuleSoft-to-Spring Boot order synchronization flow with pagination, correlation IDs and canonical JSON transformation.",
  alternates: { canonical: "/playground" },
  openGraph: {
    title: "ChamTech Sync Playground | Deivid Vanegas",
    description:
      "Interactive simulation of a MuleSoft-to-Spring Boot order synchronization flow with pagination, correlation IDs and canonical JSON transformation.",
    url: "/playground",
    images: ["/opengraph-image"],
  },
};

export default function PlaygroundPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border py-20 sm:py-24">
        <div aria-hidden="true" className="technical-grid" />
        <div className="relative z-10 mx-auto max-w-[1180px] px-6 sm:px-8">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-bright">
            Interactive architecture simulation
          </span>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
            ChamTech Sync Playground
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Run a synthetic synchronization and explore how MuleSoft authenticates,
            retrieves paginated confirmed orders, propagates correlation IDs and
            produces a canonical downstream JSON model.
          </p>

          <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/5 p-5 text-sm leading-7 text-muted">
            <strong className="text-foreground">Simulation boundary:</strong>{" "}
            This playground uses synthetic data and simulated execution steps. It
            does not connect to production services or expose real credentials.
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://github.com/Aslannt/cham-orders-api"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary-bright"
            >
              Cham Orders API ↗
            </a>
            <a
              href="https://github.com/Aslannt/cham-orders-mule-integration"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary-bright"
            >
              Mule Integration ↗
            </a>
            <Link
              href="/#architecture"
              className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-muted transition-colors hover:border-primary hover:text-primary-bright"
            >
              Back to architecture
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 sm:py-20">
        <PlaygroundShell />
      </section>
    </main>
  );
}
