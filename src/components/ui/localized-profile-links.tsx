"use client";

import { usePathname } from "next/navigation";
import { localeFromPath, translate } from "@/lib/i18n";

const cvFiles = {
  en: "/cv/deivid-vanegas-cv-en.pdf",
  es: "/cv/deivid-vanegas-cv-es.pdf",
} as const;

function useLocale() {
  return localeFromPath(usePathname());
}

export function LocalizedExperiencePeriod({ period }: { period: string }) {
  return translate(useLocale(), period);
}

export function HeroCvDownloadLink() {
  const locale = useLocale();

  return (
    <a href={cvFiles[locale]} download hrefLang={locale} className="btn-ghost">
      {locale === "es" ? "Descargar CV" : "Download CV"}
      <span className="font-mono text-[10px] text-muted">{locale.toUpperCase()} ↓</span>
    </a>
  );
}

export function ContactCvDownloadLink() {
  const locale = useLocale();

  return (
    <a
      href={cvFiles[locale]}
      download
      hrefLang={locale}
      className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:border-primary-bright"
    >
      <span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {locale === "es" ? "Hoja de vida" : "Curriculum vitae"}
        </span>
        <span className="mt-2 block text-lg font-light tracking-tight">
          {locale === "es" ? "Descargar hoja de vida · Español" : "Download CV · English"}
        </span>
      </span>
      <span aria-hidden="true" className="text-primary-bright transition-transform group-hover:translate-y-0.5">
        ↓
      </span>
    </a>
  );
}
