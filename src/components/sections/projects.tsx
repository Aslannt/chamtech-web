import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

const snippets: Record<string, { file: string; code: string }> = {
  "cham-orders-api": {
    file: "POST /api/v1/orders",
    code: `Authorization: Bearer ••••••
X-Correlation-ID: 7f3c-a91

{
  "customerId": 42,
  "items": [{ "sku": "CHM-001", "quantity": 3 }]
}

← 201 Created · total 59.85 · snapshot stored`,
  },
  "cham-orders-mule-integration": {
    file: "order-sync.dwl",
    code: `%dw 2.0
output application/json
---
payload.orders map (order) -> {
  orderId: order.id,
  customer: order.customer.name,
  total: order.totalAmount as Number,
  lines: order.items map { sku: $.sku }
}`,
  },
};

function ProjectVisual({ slug, category }: { slug: string; category: string }) {
  const snippet = snippets[slug];
  return (
    <div className="theme-dark overflow-hidden rounded-[8px] border border-border">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        <span>{category}</span>
        <span data-no-translate className="normal-case tracking-normal text-primary-bright">{snippet?.file}</span>
      </div>
      <pre className="min-h-52 overflow-x-auto px-4 py-4 font-mono text-[11.5px] leading-[1.7] text-foreground/85">
        <code>{snippet?.code}</code>
      </pre>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div id="projects-title">
          <SectionHeading
            eyebrow="05 / Featured Projects"
            title="Two projects."
            accent="One connected system."
            description="Verified case studies that demonstrate backend engineering and enterprise integration as complementary disciplines."
          />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              data-reveal
              style={{ "--delay": `${index * 140}ms` } as React.CSSProperties}
              className="surface-card lift flex flex-col p-4 sm:p-5"
            >
              <ProjectVisual slug={project.slug} category={project.category} />

              <div className="flex flex-1 flex-col px-2 pb-2 pt-7">
                <span className="inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-verified">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-verified" />
                  {project.status}
                </span>

                <h3 className="mt-4 text-3xl font-light tracking-[-0.04em]">{project.name}</h3>
                <p className="mt-4 text-[15px] leading-7 text-muted">{project.description}</p>

                <dl className="mt-7 grid grid-cols-3 border-y border-border">
                  {project.metrics.slice(0, 3).map((metric) => (
                    <div key={metric.label} className="border-r border-border py-4 pr-3 last:border-r-0 [&:not(:first-child)]:pl-4">
                      <dd className="text-2xl font-light tracking-[-0.04em]">
                        {metric.value}
                      </dd>
                      <dt className="mt-1 text-[11px] leading-4 text-muted">{metric.label}</dt>
                    </div>
                  ))}
                </dl>

                <p data-no-translate className="mt-5 font-mono text-[11px] leading-6 text-muted">
                  {project.technologies.slice(0, 5).join("  ·  ")}
                </p>

                <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
                  <Link href={`/projects/${project.slug}`} className="btn-primary">
                    View case study <span aria-hidden="true" className="btn-arrow">→</span>
                  </Link>
                  <a href={project.repository} target="_blank" rel="noreferrer" className="btn-ghost">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-verified">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-verified" />
            Verified end to end
          </p>
          <p className="text-sm text-muted">
            50 automated tests · 38 Java + 12 MUnit · real API and Mule sync on Docker with PostgreSQL 17
          </p>
        </div>
      </div>
    </section>
  );
}
