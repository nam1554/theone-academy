import { z } from "zod";

const baristaCategory = {
  바리스타자격증: "1",
  센서리브루잉: "2",
  로스팅: "3",
  SCA디플로마: "4",
  카페음료제조반: "5",
} as const;
const baristaCategoryEnum = z.nativeEnum(baristaCategory);

const bakingCategory = {
  자격증클래스: "1",
  카페디저트: "2",
  케이크디자인: "3",
  실전케이크: "4",
  블랑제리: "5",
  홈베이킹클래스: "6",
} as const;
const bakingCategoryEnum = z.nativeEnum(bakingCategory);

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "성명을 입력해주세요.")
    .max(50, "최대 50자까지 입력 가능합니다."),
  phone: z
    .string()
    .min(1, "휴대폰을 입력해주세요.")
    .regex(
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
      "휴대폰 형식을 입력해주세요."
    ),
  email: z
    .string()
    .min(1, "이메일을 입력해주세요.")
    .email("이메일 형식을 입력해주세요."),
  baristaCategory: z
    .array(baristaCategoryEnum)
    .nonempty("바리스타학과 항목을 체크해주세요."),
  bakingCategory: z
    .array(bakingCategoryEnum)
    .nonempty("베이킹학과 항목을 체크해주세요."),
  detail: z.string().min(1, "상담내용을 입력해주세요."),
  privacyPolicyAgree: z.boolean(),
});
export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
