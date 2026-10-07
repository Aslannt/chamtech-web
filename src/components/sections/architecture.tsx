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

function Connector({ index }: { index: number }) {
  return (
    <div aria-hidden="true" className="relative flex items-center justify-center py-2 lg:px-1 lg:py-0">
      <svg className="h-10 w-px overflow-visible lg:h-px lg:w-10" preserveAspectRatio="none">
        <line className="flow-dash lg:hidden" x1="0" y1="0" x2="0" y2="40" stroke="var(--primary-bright)" strokeOpacity="0.6" />
        <line className="flow-dash hidden lg:inline" x1="0" y1="0" x2="40" y2="0" stroke="var(--primary-bright)" strokeOpacity="0.6" />
      </svg>
      <span
        className="architecture-packet absolute size-1.5 rounded-full"
        style={{ background: "var(--signal)", animationDelay: `${index * 0.45}s` }}
      />
    </div>
  );
}

export function Architecture() {
  return (
    <section
      id="architecture"
      aria-labelledby="architecture-title"
      className="theme-dark relative isolate scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden="true" className="technical-grid" />
      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <div id="architecture-title">
          <SectionHeading
            eyebrow="04 / ChamTech Architecture"
            title="How the projects"
            accent="connect."
            description="A backend and integration case study where MuleSoft shields the consumer from authentication, pagination and internal backend response details."
          />
        </div>

        <ol className="mt-16 grid items-stretch lg:grid-cols-[1fr_auto_1.15fr_auto_1.15fr_auto_1fr]">
          {nodes.map((node, index) => (
            <li key={node.title} className="contents">
              <article
                data-reveal
                style={{ "--delay": `${index * 140}ms` } as React.CSSProperties}
                className={`blueprint-box rounded-[6px] p-5 ${index === 1 ? "!border-primary/60" : ""}`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em]">
                  <span className="text-primary-bright">{node.subtitle}</span>
                  <span className="text-muted">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 text-lg font-light leading-6 tracking-[-0.02em]">{node.title}</h3>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-4">
                  {node.items.map((item) => (
                    <li key={item} className="flex gap-2.5 font-mono text-[11px] leading-5 text-muted">
                      <span aria-hidden="true" className="text-primary-bright">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              {index < nodes.length - 1 ? <Connector index={index} /> : null}
            </li>
          ))}
        </ol>

        <div
          data-reveal
          className="mt-8 flex flex-col gap-4 rounded-[6px] border border-dashed border-border p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-medium">Canonical downstream output</p>
            <p className="mt-1.5 text-sm leading-6 text-muted">
              MuleSoft generates a canonical JSON file that simulates delivery to an ERP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
