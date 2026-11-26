"use client";

import Image from "next/image";
import { useState } from "react";
import { videos, type VideoItem } from "@/data/content";

const filters = ["Latest", "Popular", "Oldest"] as const;

const accentWash: Record<VideoItem["accent"], string> = {
  magenta: "from-[#3a0628] via-[#1a0414] to-[#050308]",
  cyan: "from-[#042a32] via-[#061018] to-[#050308]",
  purple: "from-[#1a0a3a] via-[#0c0618] to-[#050308]",
  amber: "from-[#2a1808] via-[#120c08] to-[#050308]",
};

function isExternal(href?: string) {
  return Boolean(href && /^https?:\/\//i.test(href));
}

function VideoCard({ item }: { item: VideoItem }) {
  const external = isExternal(item.href);
  return (
    <article className="group flex flex-col gap-3">
      <a
        href={item.href ?? "#videos"}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
        {item.duration ? (
          <span className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 font-[family-name:var(--font-display)] text-[0.65rem] font-semibold tracking-wide text-white">
            {item.duration}
          </span>
        ) : null}
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

export function VideosBrowse() {
  const [active, setActive] = useState<(typeof filters)[number]>("Latest");

  return (
    <section
      id="videos"
      className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-12 sm:px-10 sm:py-16"
    >
      <div className="mb-6 border-b border-[rgba(255,255,255,0.08)]">
        <div className="flex items-end gap-8">
          <div className="border-b-2 border-white pb-3">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[0.08em] text-white sm:text-xl">
              Videos
            </h2>
          </div>
          <p className="hidden pb-3 text-sm text-[var(--text-muted)] sm:block">
            Primary browse — channel-inspired grid (not a YouTube clone)
          </p>
        </div>
      </div>

      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Video sort"
      >
        {filters.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(filter)}
              className={
                isActive
                  ? "rounded-full bg-[var(--chrome)] px-4 py-1.5 text-sm font-semibold text-[var(--bg-void)]"
                  : "rounded-full bg-[rgba(255,255,255,0.08)] px-4 py-1.5 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.14)]"
              }
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
