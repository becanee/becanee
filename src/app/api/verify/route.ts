// app/api/verify-turnstile/route.js
export async function POST(request: Request) {
  const body = await request.json();
  const secretKey = process.env.TURNSTILE_SECRET_KEY!;
  const ip = request.headers.get("x-forwarded-for"); // Vercel-specific header for IP

  const verificationURL =
    "https://challenges.cloudflare.com/turnstile/v0/siteverify";

  const result = await fetch(verificationURL, {
    body: JSON.stringify({
      secret: secretKey,
      response: body?.token,
      remoteip: ip,
    }),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const outcome = await result.json();

  if (outcome.success) {
    return new Response(JSON.stringify({ success: true }));
  } else {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }
}
