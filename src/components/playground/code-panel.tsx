import { CopyButton } from "@/components/playground/copy-button";

export function CodePanel({
  title,
  eyebrow,
  value,
  emptyMessage,
}: {
  title: string;
  eyebrow: string;
  value: string | null;
  emptyMessage: string;
}) {
  return (
    <section className="surface-card min-w-0 rounded-2xl p-5 sm:p-6">
      <header className="flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-bright">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-lg font-semibold">{title}</h2>
        </div>
        {value ? <CopyButton value={value} label={title} /> : null}
      </header>

      {value ? (
        <pre className="mt-5 max-h-[28rem] overflow-auto rounded-xl border border-border bg-background p-4 font-mono text-xs leading-6 text-muted">
          <code>{value}</code>
        </pre>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-border bg-background/60 p-6 text-sm leading-6 text-muted">
          {emptyMessage}
        </div>
      )}
    </section>
  );
}
