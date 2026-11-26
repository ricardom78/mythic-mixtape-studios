"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { navLinks, studio } from "@/data/content";

const links = [...navLinks];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(5,3,8,0.82)] px-4 py-3 backdrop-blur-md supports-[padding:max(0px)]:pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-10 sm:py-4">
      <div className="relative z-30 mx-auto flex max-w-6xl items-center justify-between gap-3">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 no-underline"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-black shadow-[0_0_14px_rgba(255,43,214,0.4)] sm:h-9 sm:w-9">
            <Image
              src={studio.logoSrc}
              alt=""
              fill
              sizes="40px"
              className="object-contain p-[4%]"
              priority
            />
          </span>
          <span className="truncate font-[family-name:var(--font-display)] text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--chrome)]">
            {studio.shortName}
          </span>
        </a>

        <nav
          className="hidden items-center gap-x-7 md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[rgba(255,43,214,0.35)] bg-[rgba(255,255,255,0.04)] text-[var(--chrome)] md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span
              className={`h-0.5 w-full bg-[var(--magenta)] transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-[var(--cyan)] transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-[var(--magenta)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id={panelId}
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          className={`fixed inset-0 z-20 bg-black/70 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          aria-label="Close menu backdrop"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute left-0 right-0 top-full z-30 border-b border-[rgba(255,43,214,0.25)] bg-[rgba(8,4,14,0.97)] px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_18px_40px_rgba(0,0,0,0.55)] transition ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
          aria-label="Mobile"
          aria-hidden={!open}
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link flex min-h-12 items-center border-b border-[rgba(255,255,255,0.06)] py-3 text-[0.8rem] tracking-[0.2em] text-[var(--chrome)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={studio.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center text-sm text-[var(--cyan)] no-underline"
            onClick={() => setOpen(false)}
          >
            {studio.handle} on YouTube
          </a>
        </nav>
      </div>
    </header>
  );
}
