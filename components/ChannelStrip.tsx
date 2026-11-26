import Image from "next/image";
import { studio } from "@/data/content";

export function ChannelStrip() {
  return (
    <section
      className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-4 sm:px-10"
      aria-label="Studio identity"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
        <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full bg-black shadow-[0_0_28px_rgba(255,43,214,0.45)] sm:h-[112px] sm:w-[112px]">
          <Image
            src={studio.logoSrc}
            alt={`${studio.displayName} logo`}
            fill
            sizes="112px"
            className="object-contain p-[4%]"
            priority
          />
        </div>
        <div className="min-w-0">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wide text-[var(--chrome)] sm:text-2xl">
            {studio.displayName}
          </h2>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            <a
              href={studio.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cyan)] no-underline hover:underline"
            >
              {studio.handle}
            </a>
            <span className="mx-2 text-[var(--chrome-mid)]">·</span>
            {studio.stats.videos}
            <span className="mx-2 text-[var(--chrome-mid)]">·</span>
            {studio.stats.note}
          </p>
          <p className="mt-2 max-w-xl text-[0.95rem] leading-snug text-[var(--text-muted)]">
            Welcome to the neon — click a video or playlist to watch on YouTube.
          </p>
        </div>
      </div>
    </section>
  );
}
