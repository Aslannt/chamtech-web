const architectureNodes = [
  "API Consumer",
  "MuleSoft",
  "Spring Boot",
  "PostgreSQL",
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <div aria-hidden="true" className="technical-grid" />
      <div aria-hidden="true" className="hero-glow" />
      <div aria-hidden="true" className="hero-orbit" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-[1180px] flex-col items-center justify-center px-6 py-20 text-center sm:px-8">
        <div className="hero-enter">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2 font-mono text-xs text-primary-bright">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-verified"
            />
            Open to backend and integration opportunities
          </p>

          <h1
            id="hero-title"
            className="mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl"
          >
            Hello, I&apos;m{" "}
            <span className="text-primary-bright">Deivid Vanegas</span>
          </h1>

          <p className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Backend &amp; Integration Developer
          </p>

          <p className="mt-5 font-mono text-xs leading-6 tracking-[0.08em] text-muted sm:text-sm">
            Java · Spring Boot · MuleSoft · DataWeave · REST APIs
          </p>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            I build backend services and enterprise integrations focused on
            maintainability, traceability, data transformation and reliable API
            communication.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-bright sm:w-auto"
            >
              View my work
            </a>

            <a
              href="/cv/deivid-vanegas-cv-es.pdf"
              download
              className="w-full rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary-bright sm:w-auto"
            >
              Download CV <span className="font-mono text-[10px] text-muted">ES</span>
            </a>
          </div>

          <div className="mt-7 flex items-center justify-center gap-6 font-mono text-xs text-muted">
            <a
              href="https://github.com/Aslannt"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary-bright"
            >
              GitHub ↗
            </a>

            <span aria-hidden="true" className="text-border">
              /
            </span>

            <a
              href="https://www.linkedin.com/in/deivid-vanegas-7b2ab1283/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary-bright"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <ol
          aria-label="ChamTech architecture preview"
          className="architecture-flow mt-16 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"
        >
          {architectureNodes.map((node, index) => (
            <li
              key={node}
              className="relative z-10 flex items-center gap-3 rounded-xl border border-border bg-surface/95 px-4 py-3 text-left"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-[10px] text-primary-bright">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-xs font-medium sm:text-sm">{node}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
