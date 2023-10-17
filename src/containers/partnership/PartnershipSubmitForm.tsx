"use client";

import Checkbox from "@components/MaterialTailwind/Checkbox";
import Input from "@components/MaterialTailwind/Input";
import Button from "@components/MaterialTailwind/Button";
import Textarea from "@components/MaterialTailwind/Textarea";
import { useForm } from "react-hook-form";
import Select from "@components/MaterialTailwind/Select";
import Link from "next/link";

interface PartnershipForm {
  companyName: string;
  category: "1" | "2" | "3";
  phone: string;
  detail: string;
  privacyPolicyAgree: boolean;
}

const PartnershipSubmitForm = () => {
  const { register, control, handleSubmit, reset } = useForm<PartnershipForm>();
  return (
    <form className="flex flex-col space-y-40pxr">
      <Input
        register={register("companyName", {
          required: true,
        })}
        kind="text"
        name="companyName"
        label="회사명"
      />
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
      <Input
        register={register("phone", {
          required: true,
        })}
        kind="text"
        name="phone"
        label="연락처"
        placeholder="000-0000-0000"
      />
      <Textarea
        register={register("detail", {
          required: true,
        })}
        name="detail"
        label="문의내용"
        placeholder="문의내용을 상세하게 작성해 주세요."
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
          <div className="text-16pxr">접수하기</div>
        </Button>
      </div>
    </form>
  );
};

export default PartnershipSubmitForm;
