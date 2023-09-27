"use client";

import Checkbox from "@components/MaterialTailwind/Checkbox";
import Input from "@components/MaterialTailwind/Input";
import Button from "@components/MaterialTailwind/Button";
import Textarea from "@components/MaterialTailwind/Textarea";
import { useForm } from "react-hook-form";
import CheckboxGroup from "@components/MaterialTailwind/CheckboxGroup";

type BaristaCategory = "";

type BakingCategory = "";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  baristaCategory: BaristaCategory;
  bakingCategory: BakingCategory;
  detail: string;
  privacyPolicyAgree: boolean;
}

const ContactSubmitForm = () => {
  const { register, handleSubmit, reset } = useForm<ContactForm>();
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
      <CheckboxGroup
        register={register("baristaCategory", {
          required: true,
        })}
        name="baristaCategory"
        label="바리스타학과"
        labels={[
          "선택사항",
          "바리스타자격증",
          "센서리&브루잉",
          "로스팅",
          "바리스타자격증",
          "SCA디플로마",
          "카페음료제조반",
        ]}
        values={["1", "2", "3", "4", "5", "6", "7"]}
      />
      <CheckboxGroup
        register={register("bakingCategory", {
          required: true,
        })}
        name="bakingCategory"
        label="베이킹학과"
        labels={[
          "선택사항",
          "자격증 클래스",
          "카페디저트",
          "케이크디자인",
          "실전케이크",
          "블랑제리",
          "홈베이킹 클래스",
        ]}
        values={["1", "2", "3", "4", "5", "6", "7"]}
      />
      <Textarea
        register={register("detail", {
          required: true,
        })}
        name="detail"
        label="상담내용"
        placeholder="상담내용을 상세하게 작성해 주세요."
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
          <div className="text-16pxr">상담신청접수</div>
        </Button>
      </div>
    </form>
  );
};

export default ContactSubmitForm;
