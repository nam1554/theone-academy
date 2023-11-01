"use client";

import Checkbox from "@components/MaterialTailwind/Checkbox";
import Input from "@components/MaterialTailwind/Input";
import Button from "@components/MaterialTailwind/Button";
import Textarea from "@components/MaterialTailwind/Textarea";
import { useForm } from "react-hook-form";
import Select from "@components/MaterialTailwind/Select";
import Link from "next/link";
import useMutation from "@libs/client/useMutation";
import { ProposeFormSchemaType } from "@libs/validations/proposeForm";
import { proposeFormSchema } from "@libs/validations/proposeForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

interface MutationResult {
  ok: boolean;
  error: any;
}

const ErrorMessage = ({ message }: { message: string }) => (
  <p className="!mt-1 text-11pxr text-red-500">{message}</p>
);

const ProposeSubmitForm = () => {
  const [propose, { loading, data, error }] =
    useMutation<MutationResult>("/api/propose");
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ProposeFormSchemaType>({
    resolver: zodResolver(proposeFormSchema),
    mode: "onChange",
    defaultValues: { category: "1" },
  });
  const onValid = (validForm: ProposeFormSchemaType) => {
    console.log("validForm : ", validForm);
    if (loading) return;
    if (validForm.privacyPolicyAgree === false) {
      alert("개인정보처리방침 약관에 동의해주세요.");
      return;
    }
    propose(validForm);
  };
  useEffect(() => {
    if (data?.ok === false && data?.error) {
      alert("더원에바란다 등록 실패하였습니다. 잠시 후 다시 시도바랍니다.");
    }
    if (data?.ok) {
      alert("더원에바란다를 등록하였습니다.");
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
      <Select
        control={control}
        rules={{ required: true }}
        name="category"
        label="문의유형"
        labels={["고객제안", "기타", "불편사항", "칭찬합니다"]}
        values={["1", "2", "3", "4"]}
        defaultValue="1"
      />
      {errors.category?.message && (
        <ErrorMessage message={errors.category?.message} />
      )}
      <Input register={register("file")} kind="file" name="file" label="파일" />
      {errors.file?.message && (
        <ErrorMessage message={errors.file?.message as string} />
      )}
      <Input
        register={register("title")}
        kind="text"
        name="title"
        label="제목"
      />
      {errors.title?.message && (
        <ErrorMessage message={errors.title?.message} />
      )}
      <Textarea
        register={register("detail")}
        name="detail"
        label="내용"
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
            {loading ? "Loading..." : "작성완료"}
          </div>
        </Button>
      </div>
    </form>
  );
};

export default ProposeSubmitForm;
