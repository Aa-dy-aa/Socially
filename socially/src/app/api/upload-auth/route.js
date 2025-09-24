require('dotenv').config();
import { getUploadAuthParams } from "@imagekit/next/server";

export async function GET() {
  console.log("PRIVATE_KEY:", process.env.IMAGEKIT_PRIVATE_KEY);
  console.log("PUBLIC_KEY:", process.env.IMAGEKIT_PUBLIC_KEY);

  if (!process.env.IMAGEKIT_PRIVATE_KEY || !process.env.IMAGEKIT_PUBLIC_KEY) {
    return new Response(
      JSON.stringify({ error: "Missing ImageKit environment keys." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const { token, expire, signature } = getUploadAuthParams({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  });

  return Response.json({
    token,
    expire,
    signature,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  });
}
