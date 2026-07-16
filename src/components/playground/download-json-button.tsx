"use client";

import { downloadJsonFile } from "@/lib/playground/download-json";
import type { CanonicalExport } from "@/lib/playground/types";

export function DownloadJsonButton({
  value,
  filename,
}: {
  value: CanonicalExport;
  filename: string;
}) {
  return (
    <button
      type="button"
      onClick={() => downloadJsonFile(value, filename)}
      className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
    >
      Download canonical JSON
    </button>
  );
}
