import { studio } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[rgba(0,240,255,0.12)] px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-10 sm:py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <p className="font-[family-name:var(--font-display)] text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--chrome-mid)]">
          {studio.displayName}
        </p>
        <p className="flex flex-col gap-1 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center">
          <a
            href={`mailto:${studio.email}`}
            className="break-all text-[var(--cyan)] no-underline hover:underline"
          >
            {studio.email}
          </a>
          <span className="hidden text-[var(--chrome-mid)] sm:inline">·</span>
          {studio.shopUrl ? (
            <a
              href={studio.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--magenta)] no-underline hover:underline"
            >
              Shop
            </a>
          ) : (
            <a href="#shop" className="text-[var(--magenta)] no-underline hover:underline">
              Shop — coming soon
            </a>
          )}
        </p>
      </div>
    </footer>
  );
}
