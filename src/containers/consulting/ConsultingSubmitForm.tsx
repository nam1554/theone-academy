"use client";

import Checkbox from "@components/MaterialTailwind/Checkbox";
import Input from "@components/MaterialTailwind/Input";
import Button from "@components/MaterialTailwind/Button";
import RadioGroup from "@components/MaterialTailwind/RadioGroup";
import Textarea from "@components/MaterialTailwind/Textarea";
import { useForm } from "react-hook-form";

interface ConsultingForm {
  name: string;
  phone: string;
  email: string;
  shopYn: "Y" | "N";
  ageRange: "20" | "30" | "40" | "50more";
  desiredArea: string;
  desiredCost: string;
  franchiseYn: "Y" | "N";
  title: string;
  detail: string;
  privacyPolicyAgree: boolean;
}

const ConsultingSubmitForm = () => {
  const { register, handleSubmit, reset } = useForm<ConsultingForm>();
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
      <RadioGroup
        register={register("shopYn", {
          required: true,
        })}
        name="shopYn"
        label="점포유무"
        labels={["있음", "없음"]}
        values={["Y", "N"]}
      />
      <RadioGroup
        register={register("ageRange", {
          required: true,
        })}
        name="ageRange"
        label="연령대"
        labels={["20대", "30대", "40대", "50대 이상"]}
        values={["20", "30", "40", "50more"]}
      />
      <Input
        register={register("desiredArea", {
          required: true,
        })}
        kind="text"
        name="desiredArea"
        label="창업 희망 지역"
      />
      <Input
        register={register("desiredCost", {
          required: true,
        })}
        kind="text"
        name="desiredCost"
        label="창업 희망 비용"
        placeholder="창업 희망비용은 보증금/권리금/별도사항 등이 포함된 토탈금액을 뜻합니다."
      />
      <RadioGroup
        register={register("franchiseYn", {
          required: true,
        })}
        name="franchiseYn"
        label="프랜차이즈"
        labels={["있음", "없음"]}
        values={["Y", "N"]}
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
                  [약관 자세히 보기]
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

export default ConsultingSubmitForm;
