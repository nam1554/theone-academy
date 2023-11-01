"use client";

import Checkbox from "@components/MaterialTailwind/Checkbox";
import Input from "@components/MaterialTailwind/Input";
import Button from "@components/MaterialTailwind/Button";
import Textarea from "@components/MaterialTailwind/Textarea";
import { useForm } from "react-hook-form";
import Select from "@components/MaterialTailwind/Select";
import Link from "next/link";

import useMutation from "@libs/client/useMutation";
import {
  PartnershipFormSchemaType,
  partnershipFormSchema,
} from "@libs/validations/partnershipForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface MutationResult {
  ok: boolean;
  error: any;
}

const ErrorMessage = ({ message }: { message: string }) => (
  <p className="!mt-1 text-11pxr text-red-500">{message}</p>
);

const PartnershipSubmitForm = () => {
  const [partnership, { loading, data, error }] =
    useMutation<MutationResult>("/api/partnership");
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PartnershipFormSchemaType>({
    resolver: zodResolver(partnershipFormSchema),
    mode: "onChange",
    defaultValues: { category: "1" },
  });
  const onValid = (validForm: PartnershipFormSchemaType) => {
    if (loading) return;
    if (validForm.privacyPolicyAgree === false) {
      alert("개인정보처리방침 약관에 동의해주세요.");
      return;
    }
    partnership(validForm);
  };
  useEffect(() => {
    if (data?.ok === false && data?.error) {
      alert("제휴문의 등록 실패하였습니다. 잠시 후 다시 시도바랍니다.");
    }
    if (data?.ok) {
      alert("제휴문의를 등록하였습니다.");
      reset();
    }
  }, [data, reset]);
  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="flex flex-col space-y-40pxr"
    >
      <Input
        register={register("companyName")}
        kind="text"
        name="companyName"
        label="회사명"
      />
      {errors.companyName?.message && (
        <ErrorMessage message={errors.companyName?.message} />
      )}
      <Select
        control={control}
        rules={{ required: true }}
        name="category"
        label="제휴분야"
        labels={[
          "1.기업 및 학교 단체교육",
          "2.카페홍보 메뉴솔루션",
          "3.대학교 업무협약",
        ]}
        values={["1", "2", "3"]}
        defaultValue="1"
      />
      {errors.category?.message && (
        <ErrorMessage message={errors.category?.message} />
      )}
      <Input
        register={register("phone")}
        kind="text"
        name="phone"
        label="연락처"
        placeholder="000-0000-0000"
      />
      {errors.phone?.message && (
        <ErrorMessage message={errors.phone?.message} />
      )}
      <Textarea
        register={register("detail")}
        name="detail"
        label="문의내용"
        placeholder="문의내용을 상세하게 작성해 주세요."
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
            {loading ? "Loading..." : "접수하기"}
          </div>
        </Button>
      </div>
    </form>
  );
};

export default PartnershipSubmitForm;
