import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.json();
  console.log(formData);

  const data = { message: "route test!!!!" };

  return NextResponse.json({ ok: true, data, formData });
}
