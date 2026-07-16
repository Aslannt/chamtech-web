import Link from "next/link";
import { EasterEggLauncher } from "@/components/lab/easter-egg-launcher";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © 2026 Deivid Vanegas. ChamTech is a personal software lab.
        </p>
        <div className="flex items-center gap-4">
          <EasterEggLauncher />
          <Link
            href="/#home"
            className="font-mono text-xs transition-colors hover:text-primary-bright"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
