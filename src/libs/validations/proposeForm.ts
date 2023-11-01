import { z } from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf",
];

const category = {
  고객제안: "1",
  기타: "2",
  불편사항: "3",
  칭찬합시다: "4",
} as const;
const categoryEnum = z.nativeEnum(category);

export const proposeFormSchema = z.object({
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
  category: categoryEnum,
  file: z
    .any()
    .optional()
    .refine(
      (file) => !!file || file?.size <= MAX_FILE_SIZE,
      `최대 파일 사이즈는 5MB 입니다.`
    )
    .refine(
      (file) => !!file || ACCEPTED_FILE_TYPES.includes(file?.type),
      ".jpg, .jpeg, .png, .webp, .pdf 확장자만 첨부가능합니다."
    ),
  title: z.string().min(1, "제목을 입력해주세요."),
  detail: z.string().min(1, "내용을 입력해주세요."),
  privacyPolicyAgree: z.boolean(),
});
export type ProposeFormSchemaType = z.infer<typeof proposeFormSchema>;
