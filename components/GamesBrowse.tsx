import Image from "next/image";
import { games, type GameItem } from "@/data/content";

const accentWash: Record<GameItem["accent"], string> = {
  magenta: "from-[#3a0628] via-[#1a0414] to-[#050308]",
  cyan: "from-[#042a32] via-[#061018] to-[#050308]",
  purple: "from-[#1a0a3a] via-[#0c0618] to-[#050308]",
  amber: "from-[#2a1808] via-[#120c08] to-[#050308]",
};

function GameCard({ item }: { item: GameItem }) {
  const body = (
    <>
      <div
        className={`relative overflow-hidden rounded-xl ${item.featured ? "aspect-square sm:aspect-[16/10]" : "aspect-[4/5]"}`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentWash[item.accent]}`}
          aria-hidden
        />
        {item.thumb ? (
          <Image
            src={item.thumb}
            alt=""
            fill
            sizes={
              item.featured
                ? "100vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.22em] text-[var(--chrome-mid)]">
              Coming soon
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <span
          className="absolute bottom-2 left-2 rounded bg-black/75 px-2 py-1 font-[family-name:var(--font-display)] text-[0.6rem] font-semibold uppercase tracking-[0.16em]"
          style={{
            color:
              item.accent === "cyan"
                ? "var(--cyan)"
                : item.accent === "magenta"
                  ? "var(--magenta)"
                  : item.accent === "amber"
                    ? "#f5c16c"
                    : "#b79cff",
          }}
        >
          {item.meta}
        </span>
      </div>
      <div className="px-0.5 pt-3">
        <h3 className="font-[family-name:var(--font-display)] text-[0.95rem] font-semibold leading-snug tracking-wide text-[var(--text)] sm:text-base">
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
          {item.blurb}
        </p>
      </div>
    </>
  );

  const className = `group flex flex-col ${item.featured ? "sm:col-span-2 lg:col-span-3" : ""}`;

  if (item.href) {
    return (
      <article className={className}>
        <a
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={
            item.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className="block no-underline outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)]"
        >
          {body}
        </a>
      </article>
    );
  }

  return <article className={className}>{body}</article>;
}

export function GamesBrowse() {
  return (
    <section
      id="games"
      className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-10 sm:scroll-mt-24 sm:px-10 sm:py-16"
    >
      <div className="mb-6 border-b border-[rgba(255,43,214,0.25)] pb-5">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-[0.12em] text-[var(--chrome)] sm:text-2xl">
          <span
            className="mr-2 inline-block h-2 w-2 rounded-full align-middle bg-[var(--magenta)] shadow-[0_0_12px_rgba(255,43,214,0.5)]"
            aria-hidden
          />
          Games
        </h2>
        <p className="mt-2 max-w-xl text-sm text-[var(--text-muted)] sm:text-base">
          Original games and interactive experiences from Mythic Mixtape
          Studios™.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((item) => (
          <GameCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
