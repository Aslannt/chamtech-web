"use client";

import { usePathname } from "next/navigation";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/data/certifications";
import { localeFromPath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const sectionCopy = {
  en: {
    eyebrow: "Selected credentials",
    title: "Credentials that reinforce the stack.",
    description:
      "A focused selection of certifications and structured programs aligned with cloud, artificial intelligence, agile delivery and software engineering.",
    credential: "View credential",
    linkedin: "See credential history on LinkedIn",
    note:
      "Only the credentials most relevant to my current backend and integration profile are highlighted here.",
  },
  es: {
    eyebrow: "Credenciales seleccionadas",
    title: "Credenciales que respaldan el stack.",
    description:
      "Una selección enfocada de certificaciones y programas estructurados relacionados con cloud, inteligencia artificial, entrega ágil e ingeniería de software.",
    credential: "Ver credencial",
    linkedin: "Ver historial de credenciales en LinkedIn",
    note:
      "Aquí se destacan únicamente las credenciales más relevantes para mi perfil actual de backend e integración.",
  },
};

export function Certifications() {
  const locale = localeFromPath(usePathname());
  const copy = sectionCopy[locale];

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div id="certifications-title">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {certifications.map((certification) => {
            const content = certification.content[locale];

            return (
              <article
                key={certification.id}
                className="surface-card group flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 px-3 font-mono text-xs font-semibold tracking-[0.12em] text-primary-bright">
                    {certification.badge}
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1.5 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    {content.type}
                  </span>
                </div>

                <div className="mt-6 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
                    {certification.issuer}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-8 tracking-tight">
                    {content.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-foreground/85">
                    {content.issued}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {content.summary}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                  <span className="rounded-full border border-border bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    {content.focus}
                  </span>

                  {certification.credentialUrl ? (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-primary-bright transition-colors hover:text-foreground"
                    >
                      {copy.credential} ↗
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-muted">{copy.note}</p>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-primary/60 px-5 py-3 text-sm font-semibold text-primary-bright transition-colors hover:border-primary-bright hover:bg-primary/10"
          >
            {copy.linkedin} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
