import { CHANNEL_LOGO_BASE64 } from "@/data/logo-base64";

export function GET() {
  const body = Buffer.from(CHANNEL_LOGO_BASE64, "base64");
  return new Response(body, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}
