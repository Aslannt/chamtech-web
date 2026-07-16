import type { SyntheticOrdersPage } from "@/lib/playground/types";

export function PaginationSummary({
  pages,
  visible,
}: {
  pages: readonly SyntheticOrdersPage[];
  visible: boolean;
}) {
  return (
    <section className="surface-card rounded-2xl p-5 sm:p-6" aria-labelledby="pagination-summary-title">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
        Sequential pagination
      </p>
      <h2 id="pagination-summary-title" className="mt-2 text-xl font-semibold">
        Backend pages
      </h2>

      {!visible || pages.length === 0 ? (
        <p className="mt-6 text-sm leading-6 text-muted">
          Page metadata will appear when the backend retrieval step begins.
        </p>
      ) : (
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {pages.map((page) => (
            <li key={page.page} className="rounded-xl border border-border bg-background p-4">
              <p className="font-mono text-xs font-semibold text-primary-bright">
                Page {page.page + 1} of {Math.max(page.totalPages, 1)}
              </p>
              <p className="mt-2 text-xs leading-5 text-muted">
                {page.content.length} {page.content.length === 1 ? "order" : "orders"} received
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                API page index {page.page} · {page.last ? "pagination complete" : "continue"}
              </p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
