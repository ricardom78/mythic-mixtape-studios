import { sections, type PortfolioSection } from "@/data/content";

function accentClass(accent: PortfolioSection["accent"]) {
  return `accent-${accent}`;
}

export function PortfolioSections() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-4 sm:px-10">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`${accentClass(section.accent)} scroll-mt-20 py-10 sm:scroll-mt-24 sm:py-16`}
        >
          <div
            className="mb-7 flex flex-col gap-2 border-b pb-5"
            style={{
              borderColor:
                "color-mix(in srgb, var(--section-accent) 35%, transparent)",
            }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-[0.12em] text-[var(--chrome)] sm:text-2xl">
              <span
                className="mr-2 inline-block h-2 w-2 rounded-full align-middle"
                style={{
                  background: "var(--section-accent)",
                  boxShadow: "0 0 12px var(--section-glow)",
                }}
                aria-hidden
              />
              {section.title}
            </h2>
            <p className="max-w-xl text-base text-[var(--text-muted)]">
              {section.intro}
            </p>
          </div>

          <ul className="flex flex-col gap-1">
            {section.items.map((item) => {
              const external = Boolean(
                item.href && /^https?:\/\//i.test(item.href),
              );
              const body = (
                <>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold tracking-wide text-[var(--text)] sm:text-lg">
                      {item.title}
                    </h3>
                    {item.meta ? (
                      <span
                        className="font-[family-name:var(--font-display)] text-[0.65rem] uppercase tracking-[0.18em]"
                        style={{ color: "var(--section-accent)" }}
                      >
                        {item.meta}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--text-muted)]">
                    {item.blurb}
                  </p>
                </>
              );

              return (
                <li key={item.id}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="item-row block px-3 py-4 no-underline transition hover:bg-[rgba(255,255,255,0.03)] active:bg-[rgba(255,255,255,0.05)] sm:px-4 sm:py-5"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="item-row px-3 py-4 sm:px-4 sm:py-5">
                      {body}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
