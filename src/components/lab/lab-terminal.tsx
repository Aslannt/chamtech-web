"use client";

import { useEffect, useRef } from "react";
import { DataSnake } from "./data-snake";

export function LabTerminal({ onClose }: { onClose: () => void }) {
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [onClose]);
  return <div className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-labelledby="lab-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="max-h-[calc(100dvh-24px)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-[#09090c] shadow-2xl shadow-primary/10">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-[#09090c]/95 px-4 py-3 backdrop-blur sm:px-6">
        <div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary-bright">Hidden process detected</p><h2 id="lab-title" className="mt-1 text-lg font-semibold text-main">ChamTech Lab</h2></div>
        <button ref={closeButton} type="button" onClick={onClose} aria-label="Close ChamTech Lab" className="grid h-10 w-10 place-items-center rounded-full border border-border text-xl text-muted transition hover:border-primary hover:text-main focus-visible:outline-2 focus-visible:outline-primary">×</button>
      </header>
      <DataSnake />
    </section>
  </div>;
}
