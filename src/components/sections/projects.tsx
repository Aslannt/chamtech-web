import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

function ProjectVisual({ category, name }: { category: string; name: string }) {
  return (
    <div className="relative flex min-h-56 overflow-hidden rounded-2xl border border-border bg-background p-6">
      <div aria-hidden="true" className="technical-grid" />
      <div className="relative z-10 flex w-full flex-col justify-between">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          <span>{category}</span>
          <span className="text-primary-bright">ChamTech</span>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <span className="rounded-xl border border-border bg-surface px-4 py-4 text-center font-mono text-xs text-muted">
            Consumer
          </span>
          <span className="text-primary-bright">→</span>
          <span className="rounded-xl border border-primary/50 bg-primary/10 px-4 py-4 text-center text-sm font-semibold">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div id="projects-title">
          <SectionHeading
            eyebrow="05 / Featured Projects"
            title="Two projects. One connected system."
            description="Verified case studies that demonstrate backend engineering and enterprise integration as complementary disciplines."
          />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="surface-card rounded-3xl p-5 sm:p-6">
              <ProjectVisual category={project.category} name={project.name} />

              <div className="px-1 pb-1 pt-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-verified/30 bg-verified/10 px-3 py-2 font-mono text-[10px] text-verified">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-verified" />
                  {project.status}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>

                <div className="mt-6 grid grid-cols-3 gap-3 border-y border-border/70 py-5">
                  {project.metrics.slice(0, 3).map((metric) => (
                    <div key={metric.label}>
                      <p className="font-mono text-sm font-semibold text-primary-bright">{metric.value}</p>
                      <p className="mt-1 text-[10px] leading-4 text-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((technology) => (
                    <span key={technology} className="rounded-full border border-border bg-background px-3 py-2 font-mono text-[10px] text-muted">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
                  >
                    View case study
                  </Link>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold transition-colors hover:border-primary hover:text-primary-bright"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
