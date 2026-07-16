"use client";

import { useEffect, useState } from "react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1_500);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyValue() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
  }

  return (
    <button
      type="button"
      onClick={copyValue}
      className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[10px] text-muted transition-colors hover:border-primary hover:text-primary-bright"
      aria-label={`Copy ${label}`}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
