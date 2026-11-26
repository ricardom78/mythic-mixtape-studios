import { library, type LibraryCategory } from "@/data/content";

function CategoryIcon({
  icon,
}: {
  icon: LibraryCategory["icon"];
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-7 w-7",
    "aria-hidden": true,
  };

  switch (icon) {
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 0 1 2-2h11v18H6a2 2 0 0 0-2 2V5z" />
          <path d="M17 3v18" />
        </svg>
      );
    case "audio":
      return (
        <svg {...common}>
          <path d="M3 12a6 6 0 0 1 6-6h1v12H9a6 6 0 0 1-6-6z" />
          <path d="M14 8v8" />
          <path d="M17 10v4" />
          <path d="M20 11v2" />
        </svg>
      );
    case "comic":
      return (
        <svg {...common}>
          <path d="M4 6h12l4 4v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
          <path d="M8 11h6" />
          <path d="M8 15h4" />
        </svg>
      );
    case "flip":
      return (
        <svg {...common}>
          <path d="M12 4v16" />
          <path d="M5 7h5v10H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
          <path d="M14 7h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5V7z" />
          <path d="M3 12H1" />
          <path d="M23 12h-2" />
        </svg>
      );
    case "poetry":
      return (
        <svg {...common}>
          <path d="M6 20V8l6-4 6 4v12" />
          <path d="M6 10h12" />
          <path d="M9 14h6" />
        </svg>
      );
    case "encyclopedia":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
          <path d="M4 4h16" />
        </svg>
      );
    case "lore":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="6" />
          <ellipse cx="12" cy="12" rx="10" ry="3.5" />
        </svg>
      );
    case "magazine":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      );
    case "bilingual":
      return (
        <svg {...common}>
          <path d="M7 8h5a3 3 0 0 1 3 3v1" />
          <path d="M8 15h6a3 3 0 0 0 3-3" />
          <path d="M9 11H5l-2 3" />
          <path d="M15 13h4l2 3" />
        </svg>
      );
    default:
      return null;
  }
}

export function LibraryBrowse() {
  return (
    <section
      id="library"
      className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-10 sm:scroll-mt-24 sm:px-10 sm:py-16"
    >
      <div className="mb-7 border-b border-[rgba(107,45,255,0.35)] pb-5">
        <p className="font-[family-name:var(--font-display)] text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--magenta)]">
          {library.division}
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-[0.12em] text-[var(--chrome)] sm:text-2xl">
          <span
            className="mr-2 inline-block h-2 w-2 rounded-full align-middle bg-[var(--purple)] shadow-[0_0_12px_rgba(107,45,255,0.55)]"
            aria-hidden
          />
          {library.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          {library.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {library.categories.map((item) => (
          <article
            key={item.id}
            className="group relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(12,6,24,0.65)] px-4 py-5 transition hover:border-[rgba(255,43,214,0.35)] hover:bg-[rgba(20,8,36,0.8)]"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[rgba(107,45,255,0.18)] text-[var(--cyan)] shadow-[0_0_18px_rgba(107,45,255,0.25)]">
                <CategoryIcon icon={item.icon} />
              </span>
              <span className="font-[family-name:var(--font-display)] text-[0.6rem] uppercase tracking-[0.16em] text-[var(--chrome-mid)]">
                {item.meta}
              </span>
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-[0.95rem] font-semibold leading-snug tracking-wide text-[var(--text)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              {item.blurb}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-7 max-w-2xl text-sm text-[var(--text-muted)]">
        {library.featuresNote}
      </p>
    </section>
  );
}
