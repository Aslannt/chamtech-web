import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border py-20 sm:py-28">
        <div aria-hidden="true" className="technical-grid" />
        <div className="relative z-10 mx-auto max-w-[1180px] px-6 sm:px-8">
          <Link href="/#projects" className="font-mono text-xs text-muted transition-colors hover:text-primary-bright">
            ← Back to projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-bright">{project.category}</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">{project.name}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{project.description}</p>
            </div>

            <div className="lg:text-right">
              <span className="inline-flex items-center gap-2 rounded-full border border-verified/30 bg-verified/10 px-4 py-2 font-mono text-xs text-verified">
                <span aria-hidden="true" className="size-2 rounded-full bg-verified" />
                {project.status}
              </span>
              <div className="mt-5">
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
                >
                  View repository ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1180px] px-6 py-20 sm:px-8 sm:py-24">
        <section aria-labelledby="overview-title" className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary-bright">Project overview</p>
            <h2 id="overview-title" className="mt-4 text-3xl font-semibold">Context and approach</h2>
          </div>
          <div className="space-y-8 text-base leading-8 text-muted">
            <div><h3 className="font-semibold text-foreground">Overview</h3><p className="mt-2">{project.overview}</p></div>
            <div><h3 className="font-semibold text-foreground">Problem</h3><p className="mt-2">{project.problem}</p></div>
            <div><h3 className="font-semibold text-foreground">Solution</h3><p className="mt-2">{project.solution}</p></div>
          </div>
        </section>

        <section aria-labelledby="metrics-title" className="mt-20 border-t border-border pt-20">
          <h2 id="metrics-title" className="text-3xl font-semibold">Verified metrics</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <article key={metric.label} className="surface-card rounded-2xl p-6">
                <p className="font-mono text-3xl font-semibold text-primary-bright">{metric.value}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{metric.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="project-architecture-title" className="mt-20 border-t border-border pt-20">
          <h2 id="project-architecture-title" className="text-3xl font-semibold">Architecture</h2>
          <ol className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {project.architecture.map((node, index) => (
              <li key={node.title} className="surface-card rounded-2xl p-5">
                <span className="font-mono text-[10px] text-primary-bright">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-semibold">{node.title}</h3>
                <p className="mt-3 text-xs leading-5 text-muted">{node.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 grid gap-6 border-t border-border pt-20 lg:grid-cols-2">
          <div className="surface-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Main capabilities</h2>
            <ul className="mt-6 space-y-3">
              {project.capabilities.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
                  <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Verification evidence</h2>
            <ul className="mt-6 space-y-3">
              {project.verification.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
                  <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-verified" />{item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Engineering decisions</h2>
            <ul className="mt-6 space-y-3">
              {project.decisions.map((item) => <li key={item} className="text-sm leading-7 text-muted">— {item}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Scope limitations</h2>
            <ul className="mt-6 space-y-3">
              {project.limitations.map((item) => <li key={item} className="text-sm leading-7 text-muted">— {item}</li>)}
            </ul>
          </div>
        </section>

        <section className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl border border-primary/25 bg-primary/5 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Review the implementation</h2>
            <p className="mt-2 text-sm leading-6 text-muted">Source code, documentation and reproducible local instructions are available on GitHub.</p>
          </div>
          <a href={project.repository} target="_blank" rel="noreferrer" className="shrink-0 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-bright">
            Open GitHub ↗
          </a>
        </section>
      </div>
    </main>
  );
}
