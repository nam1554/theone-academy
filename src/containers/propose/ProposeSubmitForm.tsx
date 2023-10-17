"use client";

import Checkbox from "@components/MaterialTailwind/Checkbox";
import Input from "@components/MaterialTailwind/Input";
import Button from "@components/MaterialTailwind/Button";
import Textarea from "@components/MaterialTailwind/Textarea";
import { useForm } from "react-hook-form";
import Select from "@components/MaterialTailwind/Select";
import Link from "next/link";

interface ProposeForm {
  name: string;
  phone: string;
  email: string;
  category: "1" | "2" | "3" | "4";
  file: FileList;
  title: string;
  detail: string;
  privacyPolicyAgree: boolean;
}

const ProposeSubmitForm = () => {
  const { register, control, handleSubmit, reset } = useForm<ProposeForm>();
  return (
    <form className="flex flex-col space-y-40pxr">
      <Input
        register={register("name", {
          required: true,
        })}
        kind="text"
        name="name"
        label="성명"
      />
      <Input
        register={register("phone", {
          required: true,
        })}
        kind="text"
        name="phone"
        label="휴대폰"
        placeholder="000-0000-0000"
      />
      <Input
        register={register("email", {
          required: true,
        })}
        kind="text"
        name="email"
        label="이메일"
        placeholder="theone-academy@example.com"
      />
      <Select
        control={control}
        rules={{ required: true }}
        name="category"
        label="문의유형"
        labels={["고객제안", "기타", "불편사항", "칭찬합니다"]}
        values={["1", "2", "3", "4"]}
        defaultValue="1"
      />
      <Input
        register={register("file", {
          required: true,
        })}
        kind="file"
        name="file"
        label="파일"
      />
      <Input
        register={register("title", {
          required: true,
        })}
        kind="text"
        name="title"
        label="제목"
      />
      <Textarea
        register={register("detail", {
          required: true,
        })}
        name="detail"
        label="내용"
        resize
      />
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
        <Button>
          <div className="text-16pxr">작성완료</div>
        </Button>
      </div>
    </form>
  );
};

export default ProposeSubmitForm;
