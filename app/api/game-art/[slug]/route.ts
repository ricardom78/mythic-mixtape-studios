import { GAME_ART_BASE64 } from "@/data/game-art-base64";

type Params = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { slug } = await params;
  const data = GAME_ART_BASE64[slug];
  if (!data) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(Buffer.from(data, "base64"), {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}
