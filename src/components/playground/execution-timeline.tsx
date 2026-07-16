import type { SimulationStep } from "@/lib/playground/types";

export function ExecutionTimeline({
  steps,
  currentStep,
}: {
  steps: readonly SimulationStep[];
  currentStep: number;
}) {
  return (
    <section className="surface-card rounded-2xl p-5 sm:p-6" aria-labelledby="execution-timeline-title">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
        Execution
      </p>
      <h2 id="execution-timeline-title" className="mt-2 text-xl font-semibold">
        Synchronization timeline
      </h2>

      {steps.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-border bg-background/60 p-5 text-sm leading-6 text-muted">
          Configure a scenario and run the simulation to inspect every step.
        </p>
      ) : (
        <ol className="mt-6 space-y-3">
          {steps.map((item, index) => {
            const complete = index < currentStep;
            const active = index === currentStep;
            const pending = index > currentStep;

            return (
              <li
                key={item.id}
                className={`rounded-xl border p-4 transition-colors ${
                  active
                    ? "border-primary bg-primary/10"
                    : complete
                      ? item.level === "error"
                        ? "border-red-400/30 bg-red-400/5"
                        : "border-verified/25 bg-verified/5"
                      : "border-border bg-background/60"
                } ${pending ? "opacity-55" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-current font-mono text-[9px] text-primary-bright">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{item.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
