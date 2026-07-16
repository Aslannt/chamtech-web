import { SectionHeading } from "@/components/ui/section-heading";

const metrics = [
  { value: "50", label: "Automated tests" },
  { value: "38", label: "Java tests" },
  { value: "12", label: "MUnit tests" },
  { value: "2", label: "Locally verified Release Candidates" },
];

const environment = [
  "Docker",
  "PostgreSQL 17.10",
  "Flyway V1/V2",
  "Real API + Mule synchronization",
];

export function Verification() {
  return (
    <section
      id="verification"
      aria-labelledby="verification-title"
      className="border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div id="verification-title">
          <SectionHeading
            eyebrow="06 / Verification & Metrics"
            title="Evidence before claims."
            description="The portfolio reports only checks that were executed and reviewed in the local release-candidate environment."
          />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <article key={metric.label} className="surface-card rounded-2xl p-6">
              <p className="font-mono text-4xl font-semibold text-primary-bright">{metric.value}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{metric.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary-bright">Verified environment</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {environment.map((item) => (
              <span key={item} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-muted">
            These results demonstrate a reproducible local portfolio scope. They do not claim production deployment, high availability or CI/CD execution.
          </p>
        </div>
      </div>
    </section>
  );
}
