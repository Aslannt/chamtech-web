import { IntegrationPulse } from "@/components/motion/integration-pulse";
import { HeroCvDownloadLink } from "@/components/ui/localized-profile-links";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="theme-dark relative isolate overflow-hidden"
    >
      <div aria-hidden="true" className="technical-grid" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full opacity-[0.16] blur-[120px]"
        style={{ background: "var(--signal)" }}
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-64px)] max-w-[1180px] items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p
            className="hero-enter inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 font-mono text-[11px] text-muted"
          >
            <span aria-hidden="true" className="pulse-dot size-1.5 rounded-full bg-verified text-verified" />
            Now · APX Developer at Novatec for BBVA
          </p>

          <p
            className="hero-enter mt-10 font-mono text-[11px] uppercase tracking-[0.24em] text-primary-bright"
            style={{ "--delay": "80ms" } as React.CSSProperties}
          >
            Backend &amp; Integration Developer
          </p>

          <h1
            id="hero-title"
            className="hero-enter mt-4 text-[3.6rem] font-light leading-[0.95] tracking-[-0.06em] sm:text-[5.2rem] lg:text-[6.2rem]"
            style={{ "--delay": "140ms" } as React.CSSProperties}
          >
            Deivid Vanegas
          </h1>

          <div
            aria-hidden="true"
            className="hero-enter signal-bar mt-7 w-24"
            style={{ "--delay": "220ms" } as React.CSSProperties}
          />

          <p
            className="hero-enter mt-7 max-w-xl font-serif text-[1.9rem] italic leading-[1.15] tracking-[-0.01em] sm:text-[2.3rem]"
            style={{ "--delay": "280ms" } as React.CSSProperties}
          >
            I connect systems that were never designed to talk to each other.
          </p>

          <p
            className="hero-enter mt-6 max-w-xl text-base leading-8 text-muted"
            style={{ "--delay": "340ms" } as React.CSSProperties}
          >
            I build backend services and enterprise integrations focused on
            maintainability, traceability, data transformation and reliable API
            communication.
          </p>

          <div
            className="hero-enter mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ "--delay": "420ms" } as React.CSSProperties}
          >
            <a href="#projects" className="btn-primary">
              View my work <span aria-hidden="true" className="btn-arrow">→</span>
            </a>

            <HeroCvDownloadLink />
          </div>

          <div
            className="hero-enter mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 font-mono text-[11px] text-muted"
            style={{ "--delay": "500ms" } as React.CSSProperties}
          >
            <span data-no-translate>Java · APX · Spring Boot · MuleSoft · DataWeave</span>
            <span aria-hidden="true" className="hidden h-3 w-px bg-border sm:block" />
            <a href="https://github.com/Aslannt" target="_blank" rel="noreferrer" className="link-sweep transition-colors hover:text-foreground">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/deivid-vanegas/" target="_blank" rel="noreferrer" className="link-sweep transition-colors hover:text-foreground">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-enter" style={{ "--delay": "300ms" } as React.CSSProperties}>
          <IntegrationPulse />
        </div>
      </div>
    </section>
  );
}
