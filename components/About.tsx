import { studio } from "@/data/content";

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-24 px-5 py-16 sm:px-10 sm:py-20"
    >
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-[0.12em] text-[var(--chrome)] sm:text-3xl">
        <span
          className="mr-2 inline-block h-2 w-2 rounded-full align-middle bg-[var(--magenta)] shadow-[0_0_12px_rgba(255,43,214,0.5)]"
          aria-hidden
        />
        About
      </h2>

      <p className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.14em] text-[var(--cyan)]">
        Development philosophy
      </p>
      <p className="mt-2 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
        {studio.philosophy}
      </p>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--text)]">
        {studio.blurb}
      </p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
        {studio.blurbSecondary}
      </p>

      <p className="mt-8 font-[family-name:var(--font-display)] text-xl font-bold tracking-wide text-[var(--chrome)] sm:text-2xl">
        {studio.tagline}
      </p>

      <p className="mt-6 text-base text-[var(--text-muted)]">
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
