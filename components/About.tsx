import { studio } from "@/data/content";

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-12 sm:scroll-mt-24 sm:px-10 sm:py-20"
    >
      <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-[0.12em] text-[var(--chrome)] sm:text-3xl">
        <span
          className="mr-2 inline-block h-2 w-2 rounded-full align-middle bg-[var(--magenta)] shadow-[0_0_12px_rgba(255,43,214,0.5)]"
          aria-hidden
        />
        About
      </h2>

      <p className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.14em] text-[var(--cyan)] sm:text-sm">
        Development philosophy
      </p>
      <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--text-muted)] sm:text-lg">
        {studio.philosophy}
      </p>

      <p className="mt-7 max-w-2xl text-base leading-relaxed text-[var(--text)] sm:mt-8 sm:text-lg">
        {studio.blurb}
      </p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
        {studio.blurbSecondary}
      </p>

      <p className="mt-7 font-[family-name:var(--font-display)] text-lg font-bold tracking-wide text-[var(--chrome)] sm:mt-8 sm:text-2xl">
        {studio.tagline}
      </p>

      <p className="mt-6 break-words text-base text-[var(--text-muted)]">
        Business inquiries:{" "}
        <a
          href={`mailto:${studio.email}`}
          className="text-[var(--cyan)] no-underline hover:underline"
        >
          {studio.email}
        </a>
      </p>
    </section>
  );
}
