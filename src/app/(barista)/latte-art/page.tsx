import SubTitleBox from "@components/SubTitleBox";
import TitleWithBar from "@components/TitleWithBar";
import { MENU_NAME } from "@constants/constants";
import LatteartLv1 from "@containers/latte-art/LatteartLv1";
import LatteartLv2 from "@containers/latte-art/LatteartLv2";
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
          <TitleWithBar text={MENU_NAME.라떼아트} />
        </div>
        <div className="max-w-7xl mx-auto md:mt-20pxr lg:mt-30pxr">
          <div className="relative h-28 md:h-80">
            <Image
              src="/images/latte-art/latteart_menu_img_0.jpeg"
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
              “Professional Latte Art”
            </div>
            <div>
              <p className="text-12pxr text-center leading-6 md:text-18pxr md:leading-10">
                요즘은 디자인 시대!
                <br />
                다양한 패턴과 핸들링을 숙지하여, 2단 하트, 3단 하트, 로제타,
                스완 등 커피 위에 작품 만드는걸 배워보실 수 있습니다.
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
                title="라떼아트LV1"
                content={
                  <>
                    기초적인 그림을 그리는 방법 이해 또는
                    <br />
                    면하트, 2단 하트, 3단 하트와 핸들링
                  </>
                }
                backgroundImageUrl="/images/latte-art/latteart_menu_img_1.jpeg"
                titleClassName="text-theone-color12"
              />
            </div>
            <LatteartLv1 />
          </div>
        </div>
      </section>
      <section>
        <div className="py-30pxr md:py-100pxr">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="md:mb-30pxr">
              <SubTitleBox
                title="라떼아트LV2"
                content={
                  <>
                    심화적인 그림을 그리는 수업
                    <br /> 결하트, 결튤립, 로제타
                  </>
                }
                backgroundImageUrl="/images/latte-art/latteart_menu_img_2.jpeg"
                titleClassName="text-theone-color12"
              />
            </div>
            <LatteartLv2 />
          </div>
        </div>
      </section>
    </main>
  );
}
