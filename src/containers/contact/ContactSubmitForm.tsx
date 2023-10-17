"use client";

import Checkbox from "@components/MaterialTailwind/Checkbox";
import Input from "@components/MaterialTailwind/Input";
import Button from "@components/MaterialTailwind/Button";
import Textarea from "@components/MaterialTailwind/Textarea";
import { useForm } from "react-hook-form";
import CheckboxGroup from "@components/MaterialTailwind/CheckboxGroup";
import useMutation from "@libs/client/useMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ContactFormSchemaType,
  contactFormSchema,
} from "@libs/validations/contactForm";
import Link from "next/link";

interface MutationResult {
  ok: boolean;
  error: any;
}

const ErrorMessage = ({ message }: { message: string }) => (
  <p className="!mt-1 text-11pxr text-red-500">{message}</p>
);

const ContactSubmitForm = () => {
  const router = useRouter();
  const [contact, { loading, data, error }] =
    useMutation<MutationResult>("/api/contact");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: { baristaCategory: [], bakingCategory: [] },
  });
  const onValid = (validForm: ContactFormSchemaType) => {
    if (loading) return;
    if (validForm.privacyPolicyAgree === false) {
      alert("개인정보처리방침 약관에 동의해주세요.");
      return;
    }
    contact(validForm);
  };
  useEffect(() => {
    if (data?.ok === false && data?.error) {
      alert("상담문의 등록 실패하였습니다. 잠시 후 다시 시도바랍니다.");
    }
    if (data?.ok) {
      alert("상담문의를 등록하였습니다.");
      reset();
    }
  }, [data, reset]);
  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="flex flex-col space-y-40pxr"
    >
      <Input register={register("name")} kind="text" name="name" label="성명" />
      {errors.name?.message && <ErrorMessage message={errors.name?.message} />}
      <Input
        register={register("phone")}
        kind="text"
        name="phone"
        label="휴대폰"
        placeholder="000-0000-0000"
      />
      {errors.phone?.message && (
        <ErrorMessage message={errors.phone?.message} />
      )}
      <Input
        register={register("email")}
        kind="text"
        name="email"
        label="이메일"
        placeholder="theone-academy@example.com"
      />
      {errors.email?.message && (
        <ErrorMessage message={errors.email?.message} />
      )}
      <CheckboxGroup
        register={register("baristaCategory", {
          required: true,
        })}
        name="baristaCategory"
        label="바리스타학과"
        labels={[
          "바리스타자격증",
          "센서리&브루잉",
          "로스팅",
          "SCA디플로마",
          "카페음료제조반",
        ]}
        values={["1", "2", "3", "4", "5"]}
      />
      {errors.baristaCategory?.message && (
        <ErrorMessage message={errors.baristaCategory?.message} />
      )}
      <CheckboxGroup
        register={register("bakingCategory", {
          required: true,
        })}
        name="bakingCategory"
        label="베이킹학과"
        labels={[
          "자격증 클래스",
          "카페디저트",
          "케이크디자인",
          "실전케이크",
          "블랑제리",
          "홈베이킹 클래스",
        ]}
        values={["1", "2", "3", "4", "5", "6"]}
      />
      {errors.bakingCategory?.message && (
        <ErrorMessage message={errors.bakingCategory?.message} />
      )}
      <Textarea
        register={register("detail", {
          required: true,
        })}
        name="detail"
        label="상담내용"
        placeholder="상담내용을 상세하게 작성해 주세요."
        resize
      />
      {errors.detail?.message && (
        <ErrorMessage message={errors.detail?.message} />
      )}
      <div className="flex flex-col">
        <label
          htmlFor="privacyPolicyAgree"
          className="text-16pxr text-gray-700"
        >
          개인정보처리방침
        </label>
        <div className="flex mt-10pxr">
          <Checkbox
            register={register("privacyPolicyAgree", {
              required: true,
            })}
            name="privacyPolicyAgree"
            label={
              <div className="flex">
                <div className="text-16pxr">약관을 읽고 동의합니다. </div>
                <div className="text-16pxr font-medium ml-1 text-black">
                  <Link href={"/privacy"}>[약관 자세히 보기]</Link>
                </div>
              </div>
            }
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button type="submit">
          <div className="text-16pxr">
            {loading ? "Loading..." : "상담신청접수"}
          </div>
        </Button>
      </div>
    </form>
  );
};

export default ContactSubmitForm;
