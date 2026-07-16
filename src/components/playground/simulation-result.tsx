import { CopyButton } from "@/components/playground/copy-button";
import { DownloadJsonButton } from "@/components/playground/download-json-button";
import type { SimulationPlan, SimulationStatus } from "@/lib/playground/types";

export function SimulationResult({
  plan,
  status,
}: {
  plan: SimulationPlan | null;
  status: SimulationStatus;
}) {
  const finished = status === "success" || status === "error";

  return (
    <section className="surface-card rounded-2xl p-5 sm:p-6" aria-labelledby="simulation-result-title">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
        Result
      </p>
      <h2 id="simulation-result-title" className="mt-2 text-xl font-semibold">
        Synchronization summary
      </h2>

      {!plan ? (
        <p className="mt-6 text-sm leading-6 text-muted">
          No simulation has been executed yet.
        </p>
      ) : (
        <div className="mt-6 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-3 py-2 font-mono text-[10px] ${
                !finished
                  ? "border-primary/40 bg-primary/10 text-primary-bright"
                  : plan.terminalStatus === "success"
                    ? "border-verified/30 bg-verified/10 text-verified"
                    : "border-red-400/30 bg-red-400/10 text-red-300"
              }`}
            >
              {!finished
                ? "RUNNING"
                : plan.terminalStatus === "success"
                  ? "COMPLETED"
                  : "CONTROLLED ERROR"}
            </span>
            <span className="rounded-full border border-border bg-background px-3 py-2 font-mono text-[10px] text-muted">
              HTTP {plan.httpStatus}
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold text-muted">Correlation ID</p>
              <CopyButton value={plan.correlationId} label="correlation ID" />
            </div>
            <p className="mt-2 break-all font-mono text-xs leading-5 text-foreground">
              {plan.correlationId}
            </p>
          </div>

          {finished && plan.canonical && plan.outputFile ? (
            <DownloadJsonButton value={plan.canonical} filename={plan.outputFile} />
          ) : null}
        </div>
      )}
    </section>
  );
}
