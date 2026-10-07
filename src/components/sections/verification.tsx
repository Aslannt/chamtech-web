import { CountUp } from "@/components/motion/count-up";
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
      className="border-t border-border bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div id="verification-title">
          <SectionHeading
            eyebrow="06 / Verification & Metrics"
            title="Evidence"
            accent="before claims."
            description="The portfolio reports only checks that were executed and reviewed in the local release-candidate environment."
          />
        </div>

        <dl className="mt-14 grid border-t border-foreground sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              data-reveal
              style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
              className="border-b border-border py-8 sm:pr-6 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:[&:not(:first-child)]:pl-6"
            >
              <dd className="text-[4.2rem] font-light leading-none tracking-[-0.06em]">
                <CountUp value={metric.value} />
              </dd>
              <dt className="mt-4 max-w-[14rem] text-sm leading-6 text-muted">{metric.label}</dt>
            </div>
          ))}
        </dl>

        <div data-reveal className="mt-10 grid gap-6 border-t border-border pt-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-bright">Verified environment</p>
          <div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {environment.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span aria-hidden="true" className="text-verified">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">
              These results demonstrate a reproducible local portfolio scope. They do not claim production deployment, high availability or CI/CD execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
