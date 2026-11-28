import { shop, studio } from "@/data/content";

export function ShopBrowse() {
  const live = Boolean(studio.shopUrl);

  return (
    <section
      id="shop"
      className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-10 sm:scroll-mt-24 sm:px-10 sm:py-16"
    >
      <div className="mb-7 border-b border-[rgba(255,43,214,0.28)] pb-5">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-[0.12em] text-[var(--chrome)] sm:text-2xl">
          <span
            className="mr-2 inline-block h-2 w-2 rounded-full align-middle bg-[var(--magenta)] shadow-[0_0_12px_rgba(255,43,214,0.5)]"
            aria-hidden
          />
          {shop.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          {shop.intro}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(12,6,24,0.75)] px-5 py-8 sm:px-8 sm:py-10">
        <p className="font-[family-name:var(--font-display)] text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--cyan)]">
          {live ? "Store open" : "Coming soon"}
        </p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--text)] sm:text-lg">
          {live
            ? "Browse merch and digital products in the Mythic Mixtape Studios™ shop."
            : shop.comingSoon}
        </p>

        <ul className="mt-6 flex flex-col gap-2 text-sm text-[var(--text-muted)] sm:text-base">
          {shop.bullets.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--magenta)] shadow-[0_0_8px_rgba(255,43,214,0.6)]"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          {live && studio.shopUrl ? (
            <a
              href={studio.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              {studio.shopLabel}
            </a>
          ) : (
            <span className="btn-ghost inline-flex cursor-default opacity-80">
              Shop opens after Shopify publish
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
