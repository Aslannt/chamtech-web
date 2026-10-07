import { ContactCvDownloadLink } from "@/components/ui/localized-profile-links";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site";

const links = [
  { label: "GitHub", value: "Aslannt", href: "https://github.com/Aslannt" },
  {
    label: "LinkedIn",
    value: "Deivid Vanegas",
    href: "https://www.linkedin.com/in/deivid-vanegas/",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="theme-dark relative isolate scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden="true" className="technical-grid" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 left-[-10%] h-[34rem] w-[34rem] rounded-full opacity-[0.14] blur-[120px]"
        style={{ background: "var(--signal)" }}
      />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <div id="contact-title">
          <SectionHeading
            eyebrow="08 / Contact"
            title="Let’s build something"
            accent="reliable."
            description="Want to talk about backend, integration or a project? My inbox is open."
          />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div data-reveal>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex flex-wrap items-baseline gap-x-4 text-[1.7rem] font-light tracking-[-0.04em] sm:text-[2.6rem]"
            >
              <span className="link-sweep pb-1">{siteConfig.email}</span>
              <span aria-hidden="true" className="btn-arrow text-primary-bright group-hover:translate-x-1">→</span>
            </a>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Bogotá, Colombia · UTC−5
            </p>
          </div>

          <div data-reveal style={{ "--delay": "120ms" } as React.CSSProperties} className="border-t border-border">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:border-primary-bright"
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{link.label}</span>
                  <span className="mt-2 block text-lg font-light tracking-tight">{link.value}</span>
                </span>
                <span aria-hidden="true" className="text-primary-bright transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
              </a>
            ))}

            <ContactCvDownloadLink />
          </div>
        </div>
      </div>
    </section>
  );
}
