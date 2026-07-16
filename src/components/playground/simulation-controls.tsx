import { ScenarioSelector } from "@/components/playground/scenario-selector";
import type { ScenarioType } from "@/lib/playground/types";

const pageSizes = [1, 2, 5, 10, 20] as const;

export function SimulationControls({
  scenario,
  pageSize,
  correlationId,
  running,
  onScenarioChange,
  onPageSizeChange,
  onCorrelationIdChange,
  onGenerateCorrelationId,
  onRun,
  onReset,
}: {
  scenario: ScenarioType;
  pageSize: number;
  correlationId: string;
  running: boolean;
  onScenarioChange: (value: ScenarioType) => void;
  onPageSizeChange: (value: number) => void;
  onCorrelationIdChange: (value: string) => void;
  onGenerateCorrelationId: () => void;
  onRun: () => void;
  onReset: () => void;
}) {
  return (
    <section className="surface-card rounded-2xl p-5 sm:p-6" aria-labelledby="simulation-controls-title">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
        Configuration
      </p>
      <h2 id="simulation-controls-title" className="mt-2 text-xl font-semibold">
        Configure synchronization
      </h2>

      <div className="mt-6 space-y-6">
        <ScenarioSelector
          value={scenario}
          onChange={onScenarioChange}
          disabled={running}
        />

        <div>
          <label htmlFor="sync-status" className="text-sm font-semibold">
            Status
          </label>
          <input
            id="sync-status"
            value="CONFIRMED"
            readOnly
            className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm text-muted"
          />
          <p className="mt-2 text-xs leading-5 text-muted">
            The real Mule contract synchronizes confirmed orders only.
          </p>
        </div>

        <div>
          <label htmlFor="page-size" className="text-sm font-semibold">
            Page size
          </label>
          <select
            id="page-size"
            value={pageSize}
            disabled={running}
            onChange={(event) => onPageSizeChange(Number(event.target.value))}
            className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="correlation-id" className="text-sm font-semibold">
            X-Correlation-ID
          </label>
          <input
            id="correlation-id"
            value={correlationId}
            disabled={running}
            maxLength={128}
            onChange={(event) => onCorrelationIdChange(event.target.value)}
            placeholder="Leave empty to generate one"
            className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-xs text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary disabled:cursor-not-allowed disabled:opacity-60"
          />
          <button
            type="button"
            disabled={running}
            onClick={onGenerateCorrelationId}
            className="mt-3 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted transition-colors hover:border-primary hover:text-primary-bright disabled:cursor-not-allowed disabled:opacity-60"
          >
            Generate
          </button>
        </div>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <button
          type="button"
          disabled={running}
          onClick={onRun}
          className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-bright disabled:cursor-wait disabled:opacity-60"
        >
          {running ? "Synchronizing…" : "Run synchronization"}
        </button>
        <button
          type="button"
          onClick={onReset}
          className="rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary-bright"
        >
          Reset simulation
        </button>
      </div>
    </section>
  );
}
