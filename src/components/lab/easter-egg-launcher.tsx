"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const LabTerminal = dynamic(() => import("./lab-terminal").then((module) => module.LabTerminal), { ssr: false });

export function EasterEggLauncher() {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" onClick={() => setOpen(true)} aria-label="Open ChamTech Lab" title="Something is incubating" className="rounded-full p-2 text-muted transition hover:bg-surface-raised hover:text-primary-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
      <svg viewBox="0 0 24 28" aria-hidden="true" className="h-5 w-5">
        <path d="M12 1.75C8.4 1.75 2.75 10.2 2.75 17A9.25 9.25 0 0 0 21.25 17C21.25 10.2 15.6 1.75 12 1.75Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="m4.1 15.2 4.2 2.5 3.5-3.1 3.4 2.4 4.5-3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </button>
    {open ? <LabTerminal onClose={() => setOpen(false)} /> : null}
  </>;
}
