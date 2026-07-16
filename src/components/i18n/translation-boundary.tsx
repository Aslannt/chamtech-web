"use client";

import { useLayoutEffect, useRef } from "react";
import { localePath, translate, type Locale } from "@/lib/i18n";

function localize(root: HTMLElement, locale: Locale) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if (node.parentElement?.closest("pre, code, [data-no-translate]")) { node = walker.nextNode(); continue; }
    if (node.textContent) {
      const next = translate(locale, node.textContent);
      if (next !== node.textContent) node.textContent = next;
    }
    node = walker.nextNode();
  }
  root.querySelectorAll<HTMLElement>("[aria-label], [title], [placeholder]").forEach((element) => {
    for (const attribute of ["aria-label", "title", "placeholder"]) {
      const value = element.getAttribute(attribute);
      if (value) {
        const next = translate(locale, value);
        if (next !== value) element.setAttribute(attribute, next);
      }
    }
  });
  root.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach((link) => {
    const current = link.getAttribute("href") ?? "/";
    const next = localePath(locale, current);
    if (next !== current) link.setAttribute("href", next);
  });
}

export function TranslationBoundary({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!root.current) return;
    document.documentElement.lang = locale;
    localize(root.current, locale);
    const observer = new MutationObserver(() => { if (root.current) localize(root.current, locale); });
    observer.observe(root.current, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [locale]);
  return <div
    ref={root}
    className="contents"
    onClickCapture={(event) => {
      if (locale !== "es" || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="/es"]');
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      event.preventDefault();
      window.location.assign(anchor.href);
    }}
  >{children}</div>;
}
