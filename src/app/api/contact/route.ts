import { contactFormSchema } from "@libs/validations/contactForm";
import { NextRequest, NextResponse } from "next/server";
import client from "@libs/server/client";
import { BooleanEnum } from "@prisma/client";

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      phone,
      email,
      baristaCategory,
      bakingCategory,
      detail,
      privacyPolicyAgree,
    } = contactFormSchema.parse(await request.json());

    await client.contact.create({
      data: {
        name,
        phone,
        email,
        baristaCategory: baristaCategory.join("|"),
        bakingCategory: bakingCategory.join("|"),
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
