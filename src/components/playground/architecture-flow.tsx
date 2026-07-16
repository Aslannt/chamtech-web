import { ArchitectureNode } from "@/components/playground/architecture-node";
import type {
  ArchitectureNodeId,
  ArchitectureNodeStatus,
} from "@/lib/playground/types";

export function ArchitectureFlow({
  statuses,
  correlationId,
}: {
  statuses: Record<ArchitectureNodeId, ArchitectureNodeStatus>;
  correlationId: string | null;
}) {
  return (
    <section className="surface-card rounded-2xl p-5 sm:p-6" aria-labelledby="architecture-flow-title">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
            Architecture flow
          </p>
          <h2 id="architecture-flow-title" className="mt-2 text-xl font-semibold">
            Simulated execution path
          </h2>
        </div>
        <p className="max-w-sm break-all font-mono text-[10px] leading-5 text-muted">
          {correlationId ? `Correlation · ${correlationId}` : "Correlation · waiting"}
        </p>
      </div>

      <div className="mt-7">
        <ArchitectureNode
          id="consumer"
          title="API Consumer"
          subtitle="Request"
          status={statuses.consumer}
        />
        <div aria-hidden="true" className="py-2 text-center font-mono text-primary-bright">
          ↓
        </div>
        <ArchitectureNode
          id="mule"
          title="Cham Orders Mule Integration"
          subtitle="Orchestration"
          status={statuses.mule}
        />

        <div className="mt-2 grid gap-3 md:grid-cols-2 md:gap-6">
          <div>
            <div aria-hidden="true" className="py-2 text-center font-mono text-primary-bright">
              ↓ backend path
            </div>
            <ArchitectureNode
              id="api"
              title="Cham Orders API"
              subtitle="Spring Boot"
              status={statuses.api}
            />
            <div aria-hidden="true" className="py-2 text-center font-mono text-primary-bright">
              ↓
            </div>
            <ArchitectureNode
              id="database"
              title="PostgreSQL"
              subtitle="Persistent data"
              status={statuses.database}
            />
          </div>

          <div>
            <div aria-hidden="true" className="py-2 text-center font-mono text-primary-bright">
              ↓ downstream path
            </div>
            <ArchitectureNode
              id="canonical"
              title="Canonical JSON / Simulated ERP"
              subtitle="Browser output"
              status={statuses.canonical}
            />
            <div className="mt-3 rounded-xl border border-border bg-background/70 p-4 text-xs leading-5 text-muted">
              No ERP, production service or real credential is connected.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
