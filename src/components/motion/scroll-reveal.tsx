"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveals every `[data-reveal]` element the first time it enters the viewport.
 * Elements stay visible without JavaScript: hiding only starts once
 * `reveal-ready` is placed on <html> here.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    if (!("IntersectionObserver" in window)) return;
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const observeAll = () => {
      document
        .querySelectorAll("[data-reveal]:not([data-revealed])")
        .forEach((element) => observer.observe(element));
    };

    observeAll();
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return null;
}
