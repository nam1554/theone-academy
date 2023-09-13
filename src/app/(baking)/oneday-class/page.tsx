import TextWithCheckIcon from "@components/TextWithCheckIcon";
import TitleWithBar from "@components/TitleWithBar";
import { MENU_NAME } from "@constants/constants";
import { classNames } from "@utils/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import onedayclass_menu_img_0 from "@public/images/oneday-class/onedayclass_menu_img_0.jpeg";
import onedayclass_menu_img_1 from "@public/images/oneday-class/onedayclass_menu_img_1.jpeg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const 강의개요 = [
  { title: "정원", content: "4~6명" },
  { title: "교육기간", content: "1~3개월" },
  { title: "시간표", content: "주2회, 주3회, 주말반 수업" },
  { title: "강의시간", content: "오전반, 오후반, 저녁반, 주말반" },
];

export default function Page() {
  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto mt-20pxr md:mt-50pxr">
          <TitleWithBar text={MENU_NAME.원데이클래스} />
        </div>
        <div className="max-w-7xl mx-auto md:mt-20pxr lg:mt-30pxr">
          <div className="relative h-28 md:h-80">
            <Image
              src={onedayclass_menu_img_0}
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
              “Curriculum to Enjoy”
            </div>
            <div>
              <p className="text-12pxr text-center leading-6 md:text-18pxr md:leading-10">
                남녀 노소 상관없이 누구나 자신들이 원하는 시간대를 선택하여
                <br />
                편하고 쉽게 즐길수 있는 교육과정입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto mt-30pxr mb-30pxr md:mb-60pxr">
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
        <div className="bg-gray-100 bg-opacity-80 py-30pxr lg:py-100pxr">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="flex justify-center items-center px-10pxr md:w-2/5 lg:w-1/2">
                <div className="relative w-full h-60 lg:h-[27rem]">
                  <Image
                    src={onedayclass_menu_img_1}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                    alt="중간 이미지"
                  />
                </div>
              </div>
              <div className="p-15pxr flex flex-col justify-center space-y-5 divide-y divide-gray-400 md:grow lg:ml-30pxr">
                <div>
                  <h2 className="text-20pxr md:text-30pxr lg:text-33pxr">
                    이런분들께 <span className="font-semibold">추천드려요</span>
                  </h2>
                </div>
                <div className="flex flex-col pt-20pxr space-y-7pxr">
                  <TextWithCheckIcon text="학생,주부,직장인분들 자유롭게 수업일정을 선택해서 수업받으실분들" />
                  <TextWithCheckIcon text="홈베이킹을 시작했으나 생각보다 작품이 잘 나오지 않으신분들" />
                  <TextWithCheckIcon text="평소에 디저트를 즐겨 드시는분들" />
                  <TextWithCheckIcon text="내가 원하는 품목만 골라서 수강하시는분들" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
