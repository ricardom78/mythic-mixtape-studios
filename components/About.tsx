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
        Studio
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
        {studio.blurb}
      </p>
    </section>
  );
}
