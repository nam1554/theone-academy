import { proposeFormSchema } from "@libs/validations/proposeForm";
import { NextRequest, NextResponse } from "next/server";
import client from "@libs/server/client";
import { BooleanEnum } from "@prisma/client";

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      phone,
      email,
      category,
      file,
      title,
      detail,
      privacyPolicyAgree,
    } = proposeFormSchema.parse(await request.json());

    await client.propose.create({
      data: {
        name,
        phone,
        email,
        category,
        file: "",
        title,
        detail,
        privacyPolicyAgree: privacyPolicyAgree
          ? BooleanEnum.TRUE
          : BooleanEnum.FALSE,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error });
  }

  return NextResponse.json({ ok: true });
}
