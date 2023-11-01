import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = await (
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1/direct_upload`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CLOUDFLARE_IMAGE_TOKEN}`,
        },
      }
    )
  ).json();
  return NextResponse.json({ ok: true, ...response.result });
}
