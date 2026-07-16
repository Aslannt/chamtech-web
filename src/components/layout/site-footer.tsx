"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { EasterEggLauncher } from "@/components/lab/easter-egg-launcher";
import { TranslationBoundary } from "@/components/i18n/translation-boundary";
import { localeFromPath, localePath, translate } from "@/lib/i18n";

export function SiteFooter() {
  const locale = localeFromPath(usePathname());
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © 2026 Deivid Vanegas. {translate(locale, "ChamTech is a personal software lab.")}
        </p>
        <div className="flex items-center gap-4">
          <TranslationBoundary locale={locale}><EasterEggLauncher /></TranslationBoundary>
          <Link
            href={localePath(locale, "/#home")}
            className="font-mono text-xs transition-colors hover:text-primary-bright"
          >
            {translate(locale, "Back to top ↑")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
