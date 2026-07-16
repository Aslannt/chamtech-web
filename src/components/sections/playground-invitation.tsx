import Link from "next/link";

export function PlaygroundInvitation() {
  return (
    <section className="border-t border-border py-16 sm:py-20" aria-labelledby="playground-invitation-title">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="surface-card relative overflow-hidden rounded-3xl p-7 sm:p-10">
          <div aria-hidden="true" className="technical-grid" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-bright">
                Interactive case study
              </p>
              <h2 id="playground-invitation-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Explore the architecture interactively.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted">
                Run a synthetic order synchronization and inspect pagination,
                correlation tracking, stable errors and canonical transformation.
              </p>
            </div>
            <Link
              href="/playground"
              className="shrink-0 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
            >
              Launch Sync Playground
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
