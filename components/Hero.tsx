import Image from "next/image";
import { studio } from "@/data/content";
import { Waveform } from "./Waveform";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[70svh] flex-col sm:min-h-[82svh] lg:min-h-[88svh]"
      aria-label="Mythic Mixtape Studios hero"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Atmosphere only — never rely on banner’s baked-in lettering */}
        <div
          className="hero-banner absolute inset-0"
          style={{ backgroundImage: "url(/banner-ref.jpg)" }}
        />
        <div className="absolute inset-0 bg-[rgba(5,3,8,0.72)] sm:bg-[rgba(5,3,8,0.5)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,3,8,0.55)_0%,rgba(5,3,8,0.35)_40%,rgba(5,3,8,0.85)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,3,8,0.9)_0%,rgba(5,3,8,0.65)_55%,rgba(5,3,8,0.75)_100%)]" />
        <div className="absolute -left-24 top-[18%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,43,214,0.3),transparent_70%)] blur-2xl" />
        <div className="absolute -right-16 top-[12%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(107,45,255,0.34),transparent_70%)] blur-2xl" />
        <div className="absolute bottom-[10%] left-1/2 h-40 w-[70%] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(0,240,255,0.14),transparent_70%)] blur-xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-10 pt-6 sm:px-10 sm:pb-12 sm:pt-8">
        <div className="hero-brand w-full max-w-3xl">
          <div className="reveal mb-5 flex items-center gap-3">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-black shadow-[0_0_20px_rgba(255,43,214,0.5)] ring-1 ring-[rgba(255,43,214,0.4)] sm:h-16 sm:w-16">
              <Image
                src={studio.logoSrc}
                alt=""
                fill
                sizes="64px"
                className="object-contain p-[6%]"
                priority
              />
            </span>
            <p className="font-[family-name:var(--font-display)] text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--cyan)] sm:tracking-[0.35em]">
              Portfolio
            </p>
          </div>

          <h1 className="reveal reveal-delay-1">
            <span className="sr-only">{studio.displayName}</span>
            <span
              aria-hidden
              className="chrome-text chrome-text-glow hero-title block"
            >
              <span className="block">Mythic Mixtape</span>
              <span className="block">Studios™</span>
            </span>
          </h1>

          <div className="reveal reveal-delay-2 mt-5">
            <Waveform />
          </div>

          <p className="reveal reveal-delay-2 mt-5 max-w-md text-base leading-snug text-[var(--text)] sm:text-xl sm:text-[var(--text-muted)]">
            {studio.tagline}
          </p>
        </div>

        <div className="reveal reveal-delay-3 mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href={studio.ctaPrimary.href}
            className="btn-primary w-full text-center sm:w-auto"
          >
            {studio.ctaPrimary.label}
          </a>
          <a
            href={studio.ctaSecondary.href}
            className="btn-ghost w-full text-center sm:w-auto"
          >
            {studio.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
