import type {
  ArchitectureNodeId,
  ArchitectureNodeStatus,
} from "@/lib/playground/types";

const statusStyles: Record<ArchitectureNodeStatus, string> = {
  idle: "border-border bg-surface text-muted",
  active: "border-primary bg-primary/10 text-primary-bright shadow-[0_0_32px_rgba(139,92,246,0.18)]",
  success: "border-verified/50 bg-verified/10 text-verified",
  error: "border-red-400/50 bg-red-400/10 text-red-300",
  skipped: "border-border bg-background text-muted opacity-55",
};

const statusLabels: Record<ArchitectureNodeStatus, string> = {
  idle: "Idle",
  active: "Active",
  success: "Success",
  error: "Error",
  skipped: "Skipped",
};

export function ArchitectureNode({
  id,
  title,
  subtitle,
  status,
}: {
  id: ArchitectureNodeId;
  title: string;
  subtitle: string;
  status: ArchitectureNodeStatus;
}) {
  return (
    <article
      data-node={id}
      className={`rounded-2xl border p-4 transition-[border-color,background-color,box-shadow,opacity,transform] duration-300 ${statusStyles[status]} ${status === "active" ? "-translate-y-0.5" : ""}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em]">
          {subtitle}
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em]">
          <span
            aria-hidden="true"
            className={`size-1.5 rounded-full ${
              status === "error"
                ? "bg-red-300"
                : status === "success"
                  ? "bg-verified"
                  : "bg-current"
            }`}
          />
          {statusLabels[status]}
        </span>
      </div>
      <h3 className="mt-3 text-sm font-semibold text-foreground">{title}</h3>
    </article>
  );
}
