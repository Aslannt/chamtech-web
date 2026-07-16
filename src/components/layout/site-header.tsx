"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Projects", href: "/#projects" },
  { label: "Playground", href: "/playground" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          aria-label="ChamTech home"
          className="group inline-flex flex-col"
        >
          <span className="text-xl font-semibold tracking-tight">
            Cham
            <span className="text-primary-bright transition-colors group-hover:text-primary">
              Tech
            </span>
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
            Personal software lab
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="rounded-full border border-primary/60 px-5 py-2 text-sm font-semibold text-primary-bright transition-colors hover:border-primary-bright hover:bg-primary/10"
          >
            Let&apos;s talk
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary lg:hidden"
        >
          {menuOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`border-t border-border bg-background/95 px-6 py-5 backdrop-blur-xl lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-[1180px] flex-col">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-border/70 py-4 text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Let&apos;s talk
          </Link>
        </div>
      </nav>
    </header>
  );
}
