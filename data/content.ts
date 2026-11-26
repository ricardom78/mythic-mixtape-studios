/**
 * MythicMixtapeStudios — editable content
 * Replace titles, blurbs, thumbs, and links here.
 */

export const studio = {
  name: "MythicMixtapeStudios",
  displayName: "Mythic Mixtape Studios™",
  handle: "@MythicMixtapeStudios",
  shortName: "MMS",
  tagline: "Enter the world of imagination.",
  philosophy:
    "Build the foundation now. Populate and expand it gradually as the studio's creative assets are organized and approved.",
  blurb:
    "Mythic Mixtape Studios™ is an independent creative media and digital entertainment studio developing original music, cinematic productions, fictional universes, interactive games, digital publications and multimedia experiences.",
  blurbSecondary:
    "Blending imagination, storytelling, emerging technology and distinctive visual artistry, the studio creates interconnected worlds that transcend traditional entertainment formats.",
  email: "mythicmixtapestudios@gmail.com",
  logoSrc: "/channel-logo.png",
  youtubeUrl: "https://www.youtube.com/@MythicMixtapeStudios",
  /** Future: Shopify merch store — link or embed when ready; keep portfolio on Vercel. */
  shopUrl: undefined as string | undefined,
  stats: { videos: "YouTube", note: "Watch on channel" },
  ctaPrimary: { label: "Browse videos", href: "#videos" },
  ctaSecondary: { label: "Games", href: "#games" },
};

export type VideoItem = {
  id: string;
  title: string;
  meta: string;
  duration?: string;
  thumb: string;
  accent: "magenta" | "cyan" | "purple" | "amber";
  href?: string;
};

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

export type PlaylistItem = {
  id: string;
  title: string;
  meta: string;
  thumb: string;
  href: string;
  accent: "magenta" | "cyan" | "purple" | "amber";
};

/** YouTube playlists — thumbnails from channel, same pattern as videos */
export const playlists: PlaylistItem[] = [
  {
    id: "pl-fairy",
    title: "Fairy Tales From Another Timeline™",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/ldmO9oklcdo/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLSc-7eX8nhAE",
    accent: "purple",
  },
  {
    id: "pl-shorts",
    title: "SHORTS — CGNN™",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/Jr_NUtBOmFo/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLW0CIVNjFtlk",
    accent: "cyan",
  },
  {
    id: "pl-after-dark",
    title: "AFTER DARK™ | The Late-Night Collection",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/LsFJ1uFdU00/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLPEpT55_L4cE",
    accent: "magenta",
  },
  {
    id: "pl-cosmos",
    title: "THE COSMOS UNIVERSE™",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/NIzAKCkOnYI/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLLsyog7B-YYo",
    accent: "cyan",
  },
  {
    id: "pl-dance",
    title: "MYTHIC MIXTAPE DANCE CUTS™",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/YVx9I0sHHxQ/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLUYROImLUpS8",
    accent: "magenta",
  },
  {
    id: "pl-dead-channels",
    title: "DEAD CHANNELS™ — The Lost Broadcast Collection",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/SKOzi8X-xvg/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLfWmKm4dqHTU",
    accent: "purple",
  },
  {
    id: "pl-operator",
    title: "THE OPERATOR™ — LAB 07",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/mtCSZDqfLqQ/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLe0y0kRHNG24",
    accent: "cyan",
  },
  {
    id: "pl-multiverse",
    title: "THE MYTHIC MULTIVERSE™",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/44cdyfGSBnM/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLJW3MWGgoaLg",
    accent: "purple",
  },
  {
    id: "pl-cartoons",
    title: "CARTOONS & VIDEO GAMES THAT SHOULD NEVER EXIST™",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/RC3dW4-Jsx4/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLMnPOuLIM3nk",
    accent: "amber",
  },
  {
    id: "pl-strange-devotion",
    title: "STRANGE DEVOTION™ | A Sci-Fi Space Rock Opera",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/co0-ie3XcXM/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLXqMypnvjFGg",
    accent: "magenta",
  },
  {
    id: "pl-puppets",
    title: "PUPPETS FROM ANOTHER TIMELINE™",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/rLQbyClAWxI/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLUuYhl6s2Iec",
    accent: "amber",
  },
  {
    id: "pl-hair-metal",
    title: "HAIR METAL FROM ANOTHER TIMELINE™ | Glam Rock & Power Ballads",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/Z6SYV5v_jp8/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLNJuVeKkq6Sc",
    accent: "magenta",
  },
  {
    id: "pl-radio",
    title: "MYTHIC MIXTAPE RADIO™",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/lOGwP1X8a14/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLEwDT9VQV0Fs",
    accent: "cyan",
  },
  {
    id: "pl-cinema",
    title: "MYTHIC MIXTAPE CINEMA™ — NOW SHOWING!",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/co0-ie3XcXM/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLCmIez-MaFEw",
    accent: "purple",
  },
  {
    id: "pl-robot-jams",
    title: "ROBOT JAMS™",
    meta: "Playlist",
    thumb: "https://i.ytimg.com/vi/EpDDD3m43Ug/hqdefault.jpg",
    href: "https://www.youtube.com/playlist?list=PLclCWm5Q1dEQ",
    accent: "cyan",
  },
];

export type GameItem = {
  id: string;
  title: string;
  blurb: string;
  meta: string;
  /** Local art path or omit for coming-soon placeholder */
  thumb?: string;
  accent: "magenta" | "cyan" | "purple" | "amber";
  href?: string;
  featured?: boolean;
  comingSoon?: boolean;
};

export const games: GameItem[] = [
  {
    id: "game-candyland",
    title: "Candyland and Aliens",
    blurb:
      "Legendary consumable chaos — sweet worlds, stranger together. Sugar rush: always.",
    meta: "Game",
    thumb: "/games/candyland-aliens.jpg",
    accent: "magenta",
  },
  {
    id: "game-jack-static",
    title: "Jack Static™ — Initiation Game",
    blurb:
      "Initiation into the static — neon nights, round shades, and the signal that won’t let go.",
    meta: "Game",
    thumb: "/games/jack-static.jpg",
    accent: "purple",
  },
  {
    id: "game-picture-this",
    title: "Picture This! — An AI Story Roulette Game",
    blurb:
      "Image + your words = total mayhem. Visual Mad Libs™ from the PattyVERSE™.",
    meta: "Game",
    thumb: "/games/picture-this.jpg",
    accent: "cyan",
  },
  {
    id: "game-que-no",
    title: "¡QUE NO!™ — The Spanglish Game",
    blurb:
      "Palabras, frases, cultura, modismos — y actitud. With Dr. Que No™.",
    meta: "Game",
    thumb: "/games/que-no.jpg",
    accent: "amber",
    featured: true,
  },
  {
    id: "game-pattyverse",
    title: "PattyVERSE™",
    blurb:
      "A larger interactive universe in the works. Foundation first — populate as assets are approved.",
    meta: "Coming soon",
    accent: "purple",
    comingSoon: true,
  },
];

/** @deprecated Prefer `games` + `playlists` — kept empty so old imports don’t break */
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

export const sections: PortfolioSection[] = [];

export const navLinks = [
  { href: "#videos", label: "Videos" },
  { href: "#games", label: "Games" },
  { href: "#playlists", label: "Playlists" },
  { href: "#about", label: "About" },
] as const;
