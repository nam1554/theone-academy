import SubTitleBox from "@components/SubTitleBox";
import TitleWithBar from "@components/TitleWithBar";
import { MENU_NAME } from "@constants/constants";
import BaristaLv1 from "@containers/barista/BaristaLv1";
import BaristaLv2 from "@containers/barista/BaristaLv2";
import { classNames } from "@utils/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const 강의개요 = [
  { title: "정원", content: "2~6명" },
  { title: "교육기간", content: "1~3개월" },
  { title: "시간표", content: "주2회, 주3회, 주말반 수업" },
  { title: "강의시간", content: "오전반, 오후반, 저녁반, 주말반" },
];

export default function Page() {
  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto mt-20pxr md:mt-50pxr">
          <TitleWithBar text={MENU_NAME.바리스타자격증} />
        </div>
        <div className="max-w-7xl mx-auto md:mt-20pxr lg:mt-30pxr">
          <div className="relative h-28 md:h-80">
            <Image
              src="/images/barista/barista_menu_img_0.jpeg"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              alt="중간 이미지"
            />
          </div>
          <div className="px-15pxr pt-30pxr pb-30pxr space-y-4">
            <div
              className={classNames(
                montserrat.className,
                "font-medium text-center text-20pxr md:text-37pxr"
              )}
            >
              “Professional Barista”
            </div>
            <div>
              <p className="text-12pxr text-center leading-6 md:text-18pxr md:leading-10">
                <strong>바리스타 자격증</strong> <br />
                <strong>[활용]</strong>: 취업/창업/입시/취미까지 내 목표에
                전문성을 더해주는 커피 수업입니다 <br />
                <strong>[교육과정]</strong>:머신 사용 방법부터 기본 원리를
                익힘으로 기술력 습득에 중점을 두고 있습니다
                <br />
                <strong>[추천]</strong>: 자격증으로 능력이 증명 가능하며,
                바리스타 현업 실무로 활용 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto mb-30pxr md:mb-60pxr">
          <div className="flex flex-col px-5pxr space-y-2">
            <div>
              <h2 className="text-center font-medium text-22pxr md:text-25pxr lg:text-28pxr">
                강의개요
              </h2>
            </div>
            <div className="divide-y divide-gray-300 border-y border-gray-300">
              {강의개요.map((item, index) => (
                <div key={index} className="flex">
                  <div className="p-10pxr w-[30%] bg-gray-100 flex justify-center">
                    <span className="text-15pxr md:text-17pxr">
                      {item.title}
                    </span>
                  </div>
                  <div className="p-10pxr w-[70%] flex">
                    <span className="text-13pxr md:text-15pxr">
                      {item.content}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-100 bg-opacity-80 py-30pxr md:py-100pxr">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="md:mb-30pxr">
              <SubTitleBox
                title="바리스타2급(LV1)"
                content={
                  <>
                    바리스타를 목적으로 커피를 처음접하시거나,
                    <br />
                    취미로 배우시는분들에게 추천드립니다.
                  </>
                }
                backgroundImageUrl="/images/barista/barista_menu_img_1.jpeg"
                titleClassName="text-theone-color10"
              />
            </div>
            <BaristaLv1 />
          </div>
        </div>
      </section>
      <section>
        <div className="py-30pxr md:py-100pxr">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="md:mb-30pxr">
              <SubTitleBox
                title="바리스타1급(LV2)"
                content={
                  <>
                    바리스타LV1 자격증 소지하시거나,
                    <br />
                    커피에 대해 깊게 배워보고 싶은분들에게 추천드립니다.
                  </>
                }
                backgroundImageUrl="/images/barista/barista_menu_img_2.jpeg"
                titleClassName="text-theone-color10"
              />
            </div>
            <BaristaLv2 />
          </div>
        </div>
      </section>
    </main>
  );
}
