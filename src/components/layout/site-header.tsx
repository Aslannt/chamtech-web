"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { localeFromPath, localePath, translate } from "@/lib/i18n";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Projects", href: "/#projects" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Playground", href: "/playground" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const t = (value: string) => translate(locale, value);
  const navigationLabel = (label: string) =>
    label === "Certifications" && locale === "es" ? "Certificaciones" : t(label);

  useEffect(() => {
    function closeMenuWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeMenuWithEscape);

    return () => {
      window.removeEventListener("keydown", closeMenuWithEscape);
    };
  }, []);

  return (
    <header className="theme-dark sticky top-0 z-50 border-b border-border">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6 sm:px-8">
        <Link
          href={localePath(locale, "/")}
          aria-label="ChamTech home"
          className="group inline-flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-md border border-border bg-surface font-mono text-[11px] font-semibold text-foreground transition-colors group-hover:border-primary-bright"
          >
            DV
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">Deivid Vanegas</span>
            <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
              {t("Personal software lab")}
            </span>
          </span>
        </Link>

        <nav
          aria-label={t("Primary navigation")}
          className="hidden items-center gap-6 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={localePath(locale, item.href)}
              className="link-sweep pb-0.5 text-[13px] text-muted transition-colors hover:text-foreground"
            >
              {navigationLabel(item.label)}
            </Link>
          ))}

          <span aria-hidden="true" className="h-4 w-px bg-border" />

          <Link
            href={locale === "en" ? localePath("es", pathname) : localePath("en", pathname)}
            hrefLang={locale === "en" ? "es" : "en"}
            className="font-mono text-[11px] font-semibold text-muted transition-colors hover:text-foreground"
            aria-label={locale === "en" ? "Ver en español" : "View in English"}
          >
            {locale === "en" ? "ES" : "EN"}
          </Link>

          <Link
            href={localePath(locale, "/#contact")}
            className="btn-primary !px-4 !py-2 !text-[13px]"
          >
            {t("Let's talk")}
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={t(menuOpen ? "Close navigation menu" : "Open navigation menu")}
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-primary-bright lg:hidden"
        >
          {menuOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label={t("Mobile navigation")}
        className={`border-t border-border px-6 py-4 lg:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="mx-auto flex max-w-[1180px] flex-col">
          {navigation.map((item, index) => (
            <Link
              key={item.label}
              href={localePath(locale, item.href)}
              onClick={() => setMenuOpen(false)}
              className="flex items-baseline gap-4 border-b border-border py-4 text-base text-foreground"
            >
              <span className="font-mono text-[10px] text-muted">{String(index + 1).padStart(2, "0")}</span>
              {navigationLabel(item.label)}
            </Link>
          ))}

          <Link
            href={localePath(locale, "/#contact")}
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-5"
          >
            {t("Let's talk")}
          </Link>
          <Link
            href={locale === "en" ? localePath("es", pathname) : localePath("en", pathname)}
            hrefLang={locale === "en" ? "es" : "en"}
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-center font-mono text-xs text-muted"
          >
            {locale === "en" ? "Español" : "English"}
          </Link>
        </div>
      </nav>

      <ScrollProgress />
    </header>
  );
}
