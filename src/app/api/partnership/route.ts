import { NextRequest, NextResponse } from "next/server";
import client from "@libs/server/client";
import { BooleanEnum } from "@prisma/client";
import { partnershipFormSchema } from "@libs/validations/partnershipForm";

export async function POST(request: NextRequest) {
  try {
    const { companyName, category, phone, detail, privacyPolicyAgree } =
      partnershipFormSchema.parse(await request.json());

    await client.partnership.create({
      data: {
        companyName,
        category,
        phone,
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
