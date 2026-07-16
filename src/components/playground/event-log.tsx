import type { EventLogEntry } from "@/lib/playground/types";

export function EventLog({ entries }: { entries: readonly EventLogEntry[] }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-[#050507]" aria-labelledby="event-log-title">
      <header className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
            Simulated execution log
          </p>
          <h2 id="event-log-title" className="mt-1 text-sm font-semibold">
            Event stream
          </h2>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
          synthetic
        </span>
      </header>

      <div className="h-[24rem] overflow-auto p-5 font-mono text-xs leading-6" aria-live="polite">
        {entries.length === 0 ? (
          <p className="text-muted">Awaiting simulation…</p>
        ) : (
          <ol className="space-y-2">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className={
                  entry.level === "error"
                    ? "text-red-300"
                    : entry.level === "success"
                      ? "text-verified"
                      : "text-muted"
                }
              >
                <span className="text-primary-bright">
                  [+{entry.elapsedMs.toString().padStart(4, "0")}ms]
                </span>{" "}
                {entry.message}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
