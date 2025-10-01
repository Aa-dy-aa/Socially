import ImageKit from "imagekit";

export async function GET() {
  if (!process.env.IMAGEKIT_PRIVATE_KEY || !process.env.IMAGEKIT_PUBLIC_KEY || !process.env.IMAGEKIT_URL_ENDPOINT) {
    return new Response(
      JSON.stringify({ error: "Missing ImageKit environment keys." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  });

  const authenticationParameters = imagekit.getAuthenticationParameters();

  return Response.json({
    token: authenticationParameters.token,
    expire: authenticationParameters.expire,
    signature: authenticationParameters.signature,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  });
}
