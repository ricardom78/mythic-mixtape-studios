import Image from "next/image";
import { studio } from "@/data/content";
import { Waveform } from "./Waveform";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[78svh] flex-col sm:min-h-[88svh]"
      aria-label="Mythic Mixtape Studios hero"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-[0.32] blur-[1.5px]"
          style={{
            backgroundImage: "url(/banner-ref.jpg)",
            maskImage:
              "linear-gradient(180deg, black 0%, black 50%, transparent 92%)",
            WebkitMaskImage:
              "linear-gradient(180deg, black 0%, black 50%, transparent 92%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,3,8,0.3)] via-[rgba(5,3,8,0.55)] to-[var(--bg-void)]" />
        <div className="absolute -left-24 top-[18%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,43,214,0.35),transparent_70%)] blur-2xl" />
        <div className="absolute -right-16 top-[12%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(107,45,255,0.4),transparent_70%)] blur-2xl" />
        <div className="absolute bottom-[12%] left-1/2 h-40 w-[70%] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(0,240,255,0.18),transparent_70%)] blur-xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-10 pt-2 sm:px-10 sm:pb-12 sm:pt-4">
        <div className="reveal mb-4 flex items-center gap-3 sm:mb-5">
          <span className="relative h-14 w-14 overflow-hidden rounded-full bg-black shadow-[0_0_20px_rgba(255,43,214,0.5)] sm:h-14 sm:w-14">
            <Image
              src={studio.logoSrc}
              alt=""
              fill
              sizes="56px"
              className="object-contain p-[6%]"
              priority
            />
          </span>
          <p className="font-[family-name:var(--font-display)] text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--cyan)] sm:tracking-[0.35em]">
            Portfolio
          </p>
        </div>

        <h1 className="reveal reveal-delay-1 max-w-[14ch] text-[clamp(1.85rem,8.2vw,4.4rem)] leading-[1.02] sm:max-w-none sm:leading-[0.95]">
          <span className="chrome-text chrome-text-glow">
            {studio.displayName}
          </span>
        </h1>

        <div className="reveal reveal-delay-2 mt-4 sm:mt-5">
          <Waveform />
        </div>

        <p className="reveal reveal-delay-2 mt-4 max-w-md text-base leading-snug text-[var(--text-muted)] sm:mt-5 sm:text-xl">
          {studio.tagline}
        </p>

        <div className="reveal reveal-delay-3 mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
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
