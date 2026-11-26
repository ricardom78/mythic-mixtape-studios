import Image from "next/image";
import { studio } from "@/data/content";

export function ChannelStrip() {
  return (
    <section
      className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-2 sm:px-10 sm:pt-4"
      aria-label="Studio identity"
    >
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-7 sm:text-left">
        <div className="relative h-[96px] w-[96px] shrink-0 overflow-hidden rounded-full bg-black shadow-[0_0_28px_rgba(255,43,214,0.45)] sm:h-[112px] sm:w-[112px]">
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
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-wide text-[var(--chrome)] sm:text-2xl">
            {studio.displayName}
          </h2>
          <p className="mt-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-[var(--text-muted)] sm:justify-start">
            <a
              href={studio.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cyan)] no-underline hover:underline"
            >
              {studio.handle}
            </a>
            <span className="text-[var(--chrome-mid)]">·</span>
            <span>{studio.stats.videos}</span>
            <span className="text-[var(--chrome-mid)]">·</span>
            <span>{studio.stats.note}</span>
          </p>
          <p className="mt-2 max-w-xl text-[0.95rem] leading-snug text-[var(--text-muted)]">
            Welcome to the neon — tap a video or playlist to watch on YouTube.
          </p>
        </div>
      </div>
    </section>
  );
}
