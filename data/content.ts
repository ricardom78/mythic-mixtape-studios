/**
 * MythicMixtapeStudios — editable content
 * Replace titles, blurbs, thumbs, and links here.
 */

export const studio = {
  name: "MythicMixtapeStudios",
  displayName: "Mythic Mixtape Studios™",
  handle: "@MythicMixtapeStudios",
  shortName: "MMS",
  tagline: "Games. Videos. Songs. Built in the neon.",
  blurb:
    "Placeholder studio blurb — swap this for Ricardo’s real about text. MythicMixtapeStudios makes games, videos, and music with a synthwave pulse.",
  logoSrc: "/channel-logo.png",
  stats: { videos: "49 videos", note: "Portfolio mockup" },
  ctaPrimary: { label: "Browse videos", href: "#videos" },
  ctaSecondary: { label: "Games & songs", href: "#games" },
};

export type VideoItem = {
  id: string;
  title: string;
  meta: string;
  duration?: string;
  thumb: string;
  /** Accent wash when thumb is loading / placeholder */
  accent: "magenta" | "cyan" | "purple" | "amber";
  href?: string;
};

/** Primary browse experience — channel-style video grid */
export const videos: VideoItem[] = [
  {
    id: "vid-caelen",
    title: "Caelen™ | Across the Stars — A Martian Love Story",
    meta: "1 view · sample",
    duration: "Now",
    thumb: "/thumb-caelen.jpg",
    accent: "purple",
  },
  {
    id: "vid-velvet",
    title: "Velvet Reptile™ | Bad Decisions Look Good on You",
    meta: "1 view · sample",
    duration: "4:46",
    thumb: "/thumb-velvet.jpg",
    accent: "magenta",
  },
  {
    id: "vid-cyber",
    title: "Velvet Reptile™ | Neon Mirror Sessions",
    meta: "1 view · sample",
    duration: "3:12",
    thumb: "/thumb-cyber.jpg",
    accent: "cyan",
  },
  {
    id: "vid-afro",
    title: "THE MYTHIC MULTIVERSE™ | Lab Notes",
    meta: "1 view · sample",
    duration: "6:01",
    thumb: "/thumb-afro.jpg",
    accent: "cyan",
  },
  {
    id: "vid-kick",
    title: "Mythic Mixtape Studios™ | Patio Salon — KICK!",
    meta: "1 view · sample",
    duration: "2:40",
    thumb: "/thumb-kick.jpg",
    accent: "magenta",
  },
  {
    id: "vid-orbs",
    title: "THE MYTHIC MULTIVERSE™ | Character Mu",
    meta: "Playlist · 1 / 15",
    duration: "8:20",
    thumb: "/thumb-orbs.jpg",
    accent: "amber",
  },
];

export type PortfolioItem = {
  id: string;
  title: string;
  blurb: string;
  href?: string;
  meta?: string;
};

export type PortfolioSection = {
  id: string;
  title: string;
  intro: string;
  accent: "cyan" | "magenta" | "purple";
  items: PortfolioItem[];
};

/** Secondary portfolio lanes (Games + Songs). Videos live in `videos` above. */
export const sections: PortfolioSection[] = [
  {
    id: "games",
    title: "Games",
    intro: "Placeholder game projects — replace with real titles when ready.",
    accent: "magenta",
    items: [
      {
        id: "game-1",
        title: "Neon Drift Protocol",
        blurb: "Placeholder — arcade runner concept with synthwave tracks.",
        meta: "Coming soon",
      },
      {
        id: "game-2",
        title: "Cassette Crown",
        blurb: "Placeholder — short narrative game tied to the mixtape mythos.",
        meta: "Concept",
      },
      {
        id: "game-3",
        title: "Gridlock Ritual",
        blurb: "Placeholder — twin-stick arena sketch. Swap for a real build link.",
        meta: "Prototype",
      },
    ],
  },
  {
    id: "songs",
    title: "Songs",
    intro: "Track placeholders — replace with streaming or download links.",
    accent: "purple",
    items: [
      {
        id: "song-1",
        title: "Chrome Horizon",
        blurb: "Placeholder synthwave single. Swap title + link when released.",
        meta: "Single",
      },
      {
        id: "song-2",
        title: "Lava Lamp Lullaby",
        blurb: "Placeholder ambient cut. Easy to rename in content.ts.",
        meta: "Demo",
      },
      {
        id: "song-3",
        title: "Mythic Mix Vol. 1",
        blurb: "Placeholder mixtape entry — add more songs by appending items.",
        meta: "Mixtape",
      },
    ],
  },
];
