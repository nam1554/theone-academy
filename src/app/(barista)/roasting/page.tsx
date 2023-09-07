import SubTitleBox from "@components/SubTitleBox";
import TitleWithBar from "@components/TitleWithBar";
import { MENU_NAME } from "@constants/constants";
import Roasting from "@containers/roasting/Roasting";
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
          <TitleWithBar text={MENU_NAME.로스팅} />
        </div>
        <div className="max-w-7xl mx-auto md:mt-20pxr lg:mt-30pxr">
          <div className="relative h-28 md:h-80">
            <Image
              src="/images/roasting/roasting_menu_img_0.jpeg"
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
              “Professional Roasting”
            </div>
            <div>
              <p className="text-12pxr text-center leading-6 md:text-18pxr md:leading-10">
                <strong>[로스팅]</strong>커피콩 성분 파악과 &quot;콩
                볶기&quot;로, 향을 만드는 과정입니다! 원두의 향미를 만들고
                살리는 과정이며 저가/중가/고가의 원두를 섞고 볶아서 사용하며
                직접 커피 맛을 내면서 차별화를 둘 수 있습니다.
                <br />
                ∙추천: 카페 창업주분/R&D 연구소 예비 취업 준비하시는 분/유통
                판매업 준비하시는분들
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
                title="로스팅"
                content={
                  <>
                    로스터리 카페 창업 목표로 하시거나,
                    <br />
                    유통 판매업쪽으로 고민하시는분
                  </>
                }
                backgroundImageUrl="/images/roasting/roasting_menu_img_1.jpeg"
                titleClassName="text-theone-color11"
              />
            </div>
            <Roasting />
          </div>
        </div>
      </section>
    </main>
  );
}
