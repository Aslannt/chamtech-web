"use client";

import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/i18n";

const cvFiles = {
  en: "/cv/deivid-vanegas-cv-en.pdf",
  es: "/cv/deivid-vanegas-cv-es.pdf",
} as const;

function useLocale() {
  return localeFromPath(usePathname());
}

export function HeroCvDownloadLink() {
  const locale = useLocale();

  return (
    <a
      href={cvFiles[locale]}
      download
      hrefLang={locale}
      className="w-full rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary-bright sm:w-auto"
    >
      {locale === "es" ? "Descargar CV" : "Download CV"}{" "}
      <span className="font-mono text-[10px] text-muted">
        {locale.toUpperCase()}
      </span>
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
      className="flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary"
    >
      <span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          {locale === "es" ? "Hoja de vida" : "Curriculum vitae"}
        </span>
        <span className="mt-2 block text-sm font-semibold">
          {locale === "es" ? "Descargar hoja de vida · Español" : "Download CV · English"}
        </span>
      </span>
      <span aria-hidden="true" className="text-primary-bright">
        ↓
      </span>
    </a>
  );
}
