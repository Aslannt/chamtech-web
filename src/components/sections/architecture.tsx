import { SectionHeading } from "@/components/ui/section-heading";

const nodes = [
  {
    title: "API Consumer",
    subtitle: "Client",
    items: ["Authenticated request", "Confirmed orders", "X-Correlation-ID"],
  },
  {
    title: "Cham Orders Mule Integration",
    subtitle: "MuleSoft",
    items: ["JWT authentication", "Sequential pagination", "DataWeave canonical mapping"],
  },
  {
    title: "Cham Orders API",
    subtitle: "Spring Boot",
    items: ["Security and business rules", "Historical snapshots", "Standardized errors"],
  },
  {
    title: "PostgreSQL",
    subtitle: "Data",
    items: ["Persistent records", "Flyway V1/V2", "Monetary constraints"],
  },
];

export function Architecture() {
  return (
    <section
      id="architecture"
      aria-labelledby="architecture-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div id="architecture-title">
          <SectionHeading
            eyebrow="04 / ChamTech Architecture"
            title="How the projects connect."
            description="A backend and integration case study where MuleSoft shields the consumer from authentication, pagination and internal backend response details."
          />
        </div>

        <ol className="mt-14 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1.2fr_auto_1.2fr_auto_1fr]">
          {nodes.map((node, index) => (
            <li key={node.title} className="contents">
              <article className="surface-card relative rounded-2xl p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
                  {node.subtitle}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{node.title}</h3>
                <ul className="mt-5 space-y-3">
                  {node.items.map((item) => (
                    <li key={item} className="flex gap-2 text-xs leading-5 text-muted">
                      <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              {index < nodes.length - 1 ? (
                <div aria-hidden="true" className="flex items-center justify-center py-1 text-primary-bright">
                  <span className="lg:hidden">↓</span>
                  <span className="hidden font-mono lg:inline">→</span>
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-primary/25 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">Canonical downstream output</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              MuleSoft generates a canonical JSON file that simulates delivery to an ERP.
            </p>
          </div>
          <span className="w-fit rounded-full border border-border bg-background px-4 py-2 font-mono text-xs text-muted">
            Local simulator · Not a real ERP
          </span>
        </div>
      </div>
    </section>
  );
}
