import TitleWithBar from "@components/TitleWithBar";
import { MENU_NAME } from "@constants/constants";
import PartnershipSubmitForm from "@containers/partnership/PartnershipSubmitForm";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto mt-20pxr md:mt-50pxr">
          <TitleWithBar text={MENU_NAME.사업제휴제안} />
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-gray-100">
        <div className="flex flex-col p-15pxr pb-50pxr space-y-20pxr md:flex-row md:space-y-0 md:space-x-20pxr md:pt-40pxr">
          <div className="flex flex-col rounded-md bg-white shadow-sm md:w-1/3">
            <div className="relative h-44 md:h-64">
              <Image
                className="rounded-t-md"
                src={"/images/partnership/partnership_menu_img_0.jpeg"}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                alt="사업제휴 이미지"
              />
            </div>
            <div className="p-25pxr space-y-10pxr">
              <h2 className="text-16pxr font-normal lg:text-18pxr">
                1. Partnership 기업 및 학교 단체교육
              </h2>
              <div className="text-12pxr text-gray-600 lg:text-14pxr">
                기업단체, 공공기관 및 학교에서 교육을 지원하고 있습니다.
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md bg-white shadow-sm md:w-1/3">
            <div className="relative h-44 md:h-64">
              <Image
                className="rounded-t-md"
                src={"/images/partnership/partnership_menu_img_1.jpeg"}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                alt="사업제휴 이미지"
              />
            </div>
            <div className="p-25pxr space-y-10pxr">
              <h2 className="text-16pxr font-normal lg:text-18pxr">
                2. Partnership 카페홍보 및 메뉴솔루션지원
              </h2>
              <div className="text-12pxr text-gray-600 lg:text-14pxr">
                카페 홍보에 필요한 이미지 제작물 제공 및 전체적인 메뉴 솔루션을
                받아보실수 있습니다.
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md bg-white shadow-sm md:w-1/3">
            <div className="relative h-44 md:h-64">
              <Image
                className="rounded-t-md"
                src={"/images/partnership/partnership_menu_img_2.jpeg"}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                alt="사업제휴 이미지"
              />
            </div>
            <div className="p-25pxr space-y-10pxr">
              <h2 className="text-16pxr font-normal lg:text-18pxr">
                3. Partnership 학교 업무협약
              </h2>
              <div className="text-12pxr text-gray-600 lg:text-14pxr">
                전문적이며 창의적인 인재들을 육성을 하고 있으며, 진로상담
                지원까지 해드리고 있습니다.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-4xl mx-auto mt-30pxr md:mt-100pxr md:mb-20pxr lg:mt-100pxr">
          <div className="flex justify-center items-center text-20pxr md:text-30pxr">
            제휴문의하기
          </div>
          <div className="px-15pxr py-30pxr">
            <PartnershipSubmitForm />
          </div>
        </div>
      </section>
    </main>
  );
}
