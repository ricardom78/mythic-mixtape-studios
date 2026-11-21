import { studio } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[rgba(0,240,255,0.12)] px-5 py-10 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-[family-name:var(--font-display)] text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--chrome-mid)]">
          {studio.displayName}
        </p>
        <p className="text-sm text-[var(--text-muted)]">
          Starter portfolio · content lives in{" "}
          <code className="text-[var(--cyan)]">data/content.ts</code>
        </p>
      </div>
    </footer>
  );
}
