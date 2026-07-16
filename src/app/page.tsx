const colors = [
  { name: "Background", value: "#070709" },
  { name: "Surface", value: "#111116" },
  { name: "Surface raised", value: "#17171F" },
  { name: "Primary violet", value: "#8B5CF6" },
  { name: "Bright accent", value: "#A78BFA" },
  { name: "Main text", value: "#F4F4F5" },
  { name: "Muted text", value: "#A1A1AA" },
  { name: "Verified", value: "#34D399" },
];

const technologies = [
  "Java 21",
  "Spring Boot",
  "MuleSoft",
  "DataWeave",
  "REST APIs",
];

export default function Home() {
  return (
      <main className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-8 lg:px-12">
        <div aria-hidden="true" className="technical-grid" />

        <div className="relative z-10 mx-auto max-w-[1180px]">
          <header className="flex items-center justify-between border-b border-border pb-6">
            <div>
              <p className="text-xl font-semibold tracking-tight">
                Cham<span className="text-primary-bright">Tech</span>
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Personal software lab
              </p>
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Visual system / 01
            </p>
          </header>

          <section className="py-20 sm:py-28">
            <p className="mb-6 inline-flex rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-primary-bright">
              Dark technical portfolio
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Dark. Precise.{" "}
              <span className="text-primary-bright">
              Architecture-driven.
            </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              The visual foundation for ChamTech: a personal software laboratory
              focused on backend engineering and enterprise integration.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                  href="#components"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
              >
                Primary action
              </a>

              <a
                  href="https://github.com/Aslannt"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary-bright"
              >
                Secondary action
              </a>
            </div>
          </section>

          <section
              id="components"
              aria-labelledby="components-title"
              className="border-t border-border py-16"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-bright">
              Foundation
            </p>

            <h2
                id="components-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Color and component language
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {colors.map((color) => (
                  <article
                      key={color.name}
                      className="surface-card rounded-2xl p-4"
                  >
                    <div
                        className="h-20 rounded-xl border border-white/10"
                        style={{ backgroundColor: color.value }}
                    />
                    <p className="mt-4 text-sm font-medium">{color.name}</p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {color.value}
                    </p>
                  </article>
              ))}
            </div>

            <div className="surface-card mt-8 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div>
                  <p className="text-lg font-semibold">
                    Backend & Integration
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                    Reusable card treatment for technologies, experience,
                    architecture nodes and verified projects.
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-verified/30 bg-verified/10 px-3 py-2 font-mono text-xs text-verified">
                <span className="size-2 rounded-full bg-verified" />
                Verified state
              </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-full border border-border bg-background px-3 py-2 font-mono text-xs text-muted"
                    >
                  {technology}
                </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
  );
}