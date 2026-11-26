import Image from "next/image";
import { playlists, type PlaylistItem } from "@/data/content";

const accentWash: Record<PlaylistItem["accent"], string> = {
  magenta: "from-[#3a0628] via-[#1a0414] to-[#050308]",
  cyan: "from-[#042a32] via-[#061018] to-[#050308]",
  purple: "from-[#1a0a3a] via-[#0c0618] to-[#050308]",
  amber: "from-[#2a1808] via-[#120c08] to-[#050308]",
};

function PlaylistCard({ item }: { item: PlaylistItem }) {
  return (
    <article className="group flex flex-col gap-3">
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-video overflow-hidden rounded-xl outline-none ring-0 transition duration-300 focus-visible:ring-2 focus-visible:ring-[var(--cyan)]"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentWash[item.accent]}`}
          aria-hidden
        />
        <Image
          src={item.thumb}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute bottom-2 left-2 rounded bg-black/75 px-1.5 py-0.5 font-[family-name:var(--font-display)] text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[var(--cyan)]">
          Playlist
        </span>
      </a>
      <div className="px-0.5">
        <h3 className="line-clamp-2 text-[0.95rem] font-semibold leading-snug text-[var(--text)] sm:text-base">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{item.meta}</p>
      </div>
    </article>
  );
}

export function PlaylistsBrowse() {
  return (
    <section
      id="playlists"
      className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-10 sm:scroll-mt-24 sm:px-10 sm:py-16"
    >
      <div className="mb-6 border-b border-[rgba(0,240,255,0.22)] pb-5">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-[0.12em] text-[var(--chrome)] sm:text-2xl">
          <span
            className="mr-2 inline-block h-2 w-2 rounded-full align-middle bg-[var(--cyan)] shadow-[0_0_12px_rgba(0,240,255,0.5)]"
            aria-hidden
          />
          Playlists
        </h2>
        <p className="mt-2 max-w-xl text-sm text-[var(--text-muted)] sm:text-base">
          Open a Mythic Mixtape Studios™ series on YouTube.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
        {playlists.map((item) => (
          <PlaylistCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
