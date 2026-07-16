import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site";

const links = [
  { label: "GitHub", value: "Aslannt", href: "https://github.com/Aslannt" },
  {
    label: "LinkedIn",
    value: "Deivid Vanegas",
    href: "https://www.linkedin.com/in/deivid-vanegas-7b2ab1283/",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="surface-card overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div id="contact-title">
                <SectionHeading
                  eyebrow="07 / Contact"
                  title="Let’s build something reliable."
                  description="I’m open to conversations about backend development, enterprise integration and Java or MuleSoft opportunities."
                />
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-8 inline-flex rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
              >
                Send me an email
              </a>
            </div>

            <div className="grid gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary"
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Email</span>
                  <span className="mt-2 block text-sm font-semibold">{siteConfig.email}</span>
                </span>
                <span aria-hidden="true" className="text-primary-bright">↗</span>
              </a>

              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary"
                >
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{link.label}</span>
                    <span className="mt-2 block text-sm font-semibold">{link.value}</span>
                  </span>
                  <span aria-hidden="true" className="text-primary-bright">↗</span>
                </a>
              ))}

              <a
                href="/cv/deivid-vanegas-cv-es.pdf"
                download
                hrefLang="es"
                className="flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary"
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Curriculum vitae</span>
                  <span className="mt-2 block text-sm font-semibold">Download CV · Spanish</span>
                </span>
                <span aria-hidden="true" className="text-primary-bright">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
