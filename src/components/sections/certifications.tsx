"use client";

import { usePathname } from "next/navigation";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/data/certifications";
import { localeFromPath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const sectionCopy = {
  en: {
    eyebrow: "07 / Selected credentials",
    title: "Credentials that",
    accent: "reinforce the stack.",
    description:
      "A focused selection of certifications and structured programs aligned with cloud, artificial intelligence, containers and software engineering.",
    credential: "View credential",
    credentialCode: "Credential code",
    linkedin: "See credential history on LinkedIn",
    note:
      "Only the credentials most relevant to my current backend and integration profile are highlighted here.",
  },
  es: {
    eyebrow: "07 / Credenciales seleccionadas",
    title: "Credenciales que",
    accent: "respaldan el stack.",
    description:
      "Una selección enfocada de certificaciones y programas estructurados relacionados con cloud, inteligencia artificial, contenedores e ingeniería de software.",
    credential: "Ver credencial",
    credentialCode: "Código de credencial",
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
      className="scroll-mt-24 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div id="certifications-title">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            accent={copy.accent}
            description={copy.description}
          />
        </div>

        <ul className="mt-14 border-t border-foreground">
          {certifications.map((certification, index) => {
            const content = certification.content[locale];

            return (
              <li
                key={certification.id}
                data-reveal
                style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
                className="group grid gap-4 border-b border-border py-7 transition-colors duration-500 hover:bg-surface sm:grid-cols-[5.5rem_1fr_auto] sm:items-start sm:gap-8 sm:px-4"
              >
                <span className="inline-flex h-11 w-fit min-w-14 items-center justify-center rounded-md border border-border bg-surface px-3 font-mono text-[11px] font-semibold tracking-[0.12em] text-primary-bright transition-colors group-hover:border-primary">
                  {certification.badge}
                </span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {certification.issuer} · {content.type}
                  </p>
                  <h3 className="mt-2 text-xl font-light leading-8 tracking-[-0.025em] sm:text-2xl">
                    {content.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                    {content.summary}
                  </p>
                  {certification.credentialCode ? (
                    <p className="mt-2 break-all font-mono text-[10px] leading-5 text-muted">
                      {copy.credentialCode}: {certification.credentialCode}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-2 sm:items-end sm:text-right">
                  <span className="text-sm text-foreground/85">{content.issued}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary-bright">
                    {content.focus}
                  </span>
                  {certification.credentialUrl ? (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-sweep text-sm font-semibold text-primary-bright"
                    >
                      {copy.credential} ↗
                    </a>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>

        <div data-reveal className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-muted">{copy.note}</p>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="btn-ghost shrink-0">
            {copy.linkedin} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
