import { About } from "@/components/About";
import { ChannelStrip } from "@/components/ChannelStrip";
import { GamesBrowse } from "@/components/GamesBrowse";
import { Hero } from "@/components/Hero";
import { LibraryBrowse } from "@/components/LibraryBrowse";
import { PlaylistsBrowse } from "@/components/PlaylistsBrowse";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { VideosBrowse } from "@/components/VideosBrowse";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <ChannelStrip />
        <VideosBrowse />
        <GamesBrowse />
        <PlaylistsBrowse />
        <LibraryBrowse />
        <About />
      </main>
      <SiteFooter />
    </div>
  );
}
