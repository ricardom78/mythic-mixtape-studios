import Image from "next/image";
import { sections, studio } from "@/data/content";

export function SiteNav() {
  return (
    <header className="relative z-20 flex items-center justify-between gap-4 px-5 py-4 sm:px-10">
      <a href="#top" className="flex items-center gap-3 no-underline">
        <span className="relative h-9 w-9 overflow-hidden rounded-full shadow-[0_0_14px_rgba(255,43,214,0.4)]">
          <Image
            src={studio.logoSrc}
            alt=""
            fill
            sizes="36px"
            className="object-cover"
            priority
          />
        </span>
        <span className="font-[family-name:var(--font-display)] text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--chrome)]">
          {studio.shortName}
        </span>
      </a>
      <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-x-8">
        <a href="#videos" className="nav-link">
          Videos
        </a>
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="nav-link">
            {section.title}
          </a>
        ))}
        <a href="#about" className="nav-link">
          About
        </a>
      </nav>
    </header>
  );
}
