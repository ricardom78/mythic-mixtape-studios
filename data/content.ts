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
    "Mythic Mixtape Studios™ makes games, videos, and music with a synthwave pulse — fairy-tale sci-fi, late-night neon, and mythic multiverse lore.",
  logoSrc: "/channel-logo.png",
  youtubeUrl: "https://www.youtube.com/@MythicMixtapeStudios",
  stats: { videos: "YouTube", note: "Watch on channel" },
  ctaPrimary: { label: "Browse videos", href: "#videos" },
  ctaSecondary: { label: "Playlists", href: "#playlists" },
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
    id: "vid-aeri",
    title: "Aeri™ — Blue Current",
    meta: "YouTube · Mythic Mixtape Studios™",
    thumb: "https://i.ytimg.com/vi/co0-ie3XcXM/hqdefault.jpg",
    accent: "cyan",
    href: "https://www.youtube.com/watch?v=co0-ie3XcXM",
  },
  {
    id: "vid-velvet",
    title: "Velvet Reptile™ — Electric Devotion",
    meta: "YouTube · Mythic Mixtape Studios™",
    thumb: "https://i.ytimg.com/vi/_b5-lbcNnVM/hqdefault.jpg",
    accent: "magenta",
    href: "https://www.youtube.com/watch?v=_b5-lbcNnVM",
  },
  {
    id: "vid-unicorn",
    title: "The Unicorn™ — A Realm of Her Own",
    meta: "YouTube · Mythic Mixtape Studios™",
    thumb: "https://i.ytimg.com/vi/RC3dW4-Jsx4/hqdefault.jpg",
    accent: "purple",
    href: "https://www.youtube.com/watch?v=RC3dW4-Jsx4",
  },
  {
    id: "vid-juno",
    title: "Juno Honey Steps™ — Honey Steps",
    meta: "YouTube · Mythic Mixtape Studios™",
    thumb: "https://i.ytimg.com/vi/wWYPgChP6iI/hqdefault.jpg",
    accent: "amber",
    href: "https://www.youtube.com/watch?v=wWYPgChP6iI",
  },
  {
    id: "vid-nicky",
    title: "Nicky Neon™ — After the Lights Go Out",
    meta: "YouTube · Mythic Mixtape Studios™",
    thumb: "https://i.ytimg.com/vi/Z6SYV5v_jp8/hqdefault.jpg",
    accent: "magenta",
    href: "https://www.youtube.com/watch?v=Z6SYV5v_jp8",
  },
  {
    id: "vid-sitara",
    title: "Sitara™ — 11.44 MHz",
    meta: "YouTube · Mythic Mixtape Studios™",
    thumb: "https://i.ytimg.com/vi/ldmO9oklcdo/hqdefault.jpg",
    accent: "purple",
    href: "https://www.youtube.com/watch?v=ldmO9oklcdo",
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

/** Secondary portfolio lanes — Games placeholders + YouTube playlists */
export const sections: PortfolioSection[] = [
  {
    id: "playlists",
    title: "Playlists",
    intro: "Open a Mythic Mixtape Studios™ series on YouTube.",
    accent: "cyan",
    items: [
      {
        id: "pl-fairy",
        title: "Fairy Tales From Another Timeline™",
        blurb: "Storybook sci-fi cuts from across the catalog.",
        meta: "Playlist",
        href: "https://www.youtube.com/playlist?list=PLSc-7eX8nhAE",
      },
      {
        id: "pl-shorts",
        title: "SHORTS — CGNN™",
        blurb: "Quick neon hits and channel shorts.",
        meta: "Playlist",
        href: "https://www.youtube.com/playlist?list=PLW0CIVNjFtlk",
      },
      {
        id: "pl-after-dark",
        title: "AFTER DARK™ | The Late-Night Collection",
        blurb: "After-hours pulse for empty halls and blue light.",
        meta: "Playlist",
        href: "https://www.youtube.com/playlist?list=PLPEpT55_L4cE",
      },
      {
        id: "pl-cosmos",
        title: "THE COSMOS UNIVERSE™",
        blurb: "Space-signal lore and cosmic transmissions.",
        meta: "Playlist",
        href: "https://www.youtube.com/playlist?list=PLLsyog7B-YYo",
      },
      {
        id: "pl-dance",
        title: "MYTHIC MIXTAPE DANCE CUTS™",
        blurb: "Floor-ready remix energy from the studio.",
        meta: "Playlist",
        href: "https://www.youtube.com/playlist?list=PLUYROImLUpS8",
      },
      {
        id: "pl-dead-channels",
        title: "DEAD CHANNELS™ — The Lost Broadcast Collection",
        blurb: "Found-signal broadcasts from dead TV worlds.",
        meta: "Playlist",
        href: "https://www.youtube.com/playlist?list=PLfWmKm4dqHTU",
      },
      {
        id: "pl-operator",
        title: "THE OPERATOR™ — LAB 07",
        blurb: "Lab notes from the Operator’s desk.",
        meta: "Playlist",
        href: "https://www.youtube.com/playlist?list=PLe0y0kRHNG24",
      },
      {
        id: "pl-multiverse",
        title: "THE MYTHIC MULTIVERSE™",
        blurb: "Characters, worlds, and multiverse lore.",
        meta: "Playlist",
        href: "https://www.youtube.com/playlist?list=PLJW3MWGgoaLg",
      },
      {
        id: "pl-cartoons",
        title: "CARTOONS & VIDEO GAMES THAT SHOULD NEVER EXIST™",
        blurb: "Impossible toons and game worlds that shouldn’t work — but do.",
        meta: "Playlist",
        href: "https://www.youtube.com/playlist?list=PLMnPOuLIM3nk",
      },
      {
        id: "pl-strange-devotion",
        title: "STRANGE DEVOTION™ | A Sci-Fi Space Rock Opera",
        blurb: "The space rock opera arc — devotion, glitch, and gold light.",
        meta: "Playlist",
        href: "https://www.youtube.com/playlist?list=PLXqMypnvjFGg",
      },
    ],
  },
  {
    id: "games",
    title: "Games",
    intro: "Game projects coming soon — placeholders until builds are ready.",
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
];
