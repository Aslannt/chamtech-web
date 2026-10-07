import Link from "next/link";

export function PlaygroundInvitation() {
  return (
    <section className="theme-dark border-t border-border pb-24 sm:pb-32" aria-labelledby="playground-invitation-title">
      <div className="mx-auto max-w-[1180px] px-6 pt-16 sm:px-8 sm:pt-20">
        <div data-reveal className="relative overflow-hidden rounded-[10px] border border-border p-7 sm:p-10">
          <div aria-hidden="true" className="signal-bar absolute inset-x-0 top-0" />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary-bright">
                Interactive case study
              </p>
              <h2 id="playground-invitation-title" className="mt-4 text-3xl font-light tracking-[-0.04em] sm:text-[2.6rem]">
                Explore the architecture interactively.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted">
                Run a synthetic order synchronization and inspect pagination,
                correlation tracking, stable errors and canonical transformation.
              </p>
            </div>
            <Link href="/playground" className="btn-primary shrink-0">
              Launch Sync Playground <span aria-hidden="true" className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
