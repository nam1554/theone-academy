import { z } from "zod";

const category = {
  기업및학교단체교육: "1",
  카페홍보메뉴솔루션: "2",
  대학교업무협약: "3",
} as const;
const categoryEnum = z.nativeEnum(category);

export const partnershipFormSchema = z.object({
  companyName: z
    .string()
    .min(1, "회사명을 입력해주세요.")
    .max(50, "최대 50자까지 입력 가능합니다."),
  category: categoryEnum,
  phone: z
    .string()
    .min(1, "연락처를 입력해주세요.")
    .regex(
      /^([0-9]{2,3})-?([0-9]{3,4})-?([0-9]{4})$/,
      "연락처 형식을 입력해주세요."
    ),

  detail: z.string().min(1, "상담내용을 입력해주세요."),
  privacyPolicyAgree: z.boolean(),
});
export type PartnershipFormSchemaType = z.infer<typeof partnershipFormSchema>;
