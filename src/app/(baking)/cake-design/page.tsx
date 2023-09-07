import SubTitleBox from "@components/SubTitleBox";
import TextWithCheckIcon from "@components/TextWithCheckIcon";
import TitleWithBar from "@components/TitleWithBar";
import { MENU_NAME } from "@constants/constants";
import CakeDesignDeepening from "@containers/cake-design/CakeDesignDeepening";
import CakeDesignIntroduction from "@containers/cake-design/CakeDesignIntroduction";
import CakeDesignWorkinglevel from "@containers/cake-design/CakeDesignWorkinglevel";
import { classNames } from "@utils/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const 강의개요 = [
  { title: "정원", content: "4~6명" },
  { title: "교육기간", content: "1~2개월" },
  { title: "시간표", content: "주2회, 주3회, 주말반 수업" },
  { title: "강의시간", content: "오전반, 오후반, 저녁반, 주말반" },
];

export default function Page() {
  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto mt-20pxr md:mt-50pxr">
          <TitleWithBar text={MENU_NAME.케이크디자인} />
        </div>
        <div className="max-w-7xl mx-auto md:mt-20pxr lg:mt-30pxr">
          <div className="relative h-28 md:h-80">
            <Image
              src="/images/cake-design/cakedesign_menu_img_0.jpeg"
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
              “Basic Process”
            </div>
            <div>
              <p className="text-12pxr text-center leading-6 md:text-18pxr md:leading-10">
                케이크디자인 수업은 시트제조, 생크림 제조, 버터크림 제조와
                케이크의 아이싱 및 고급 기술의 데코레이션을 익히고
                <br />
                <br />
                케이크 디자인에 기본이 되는 블라썸 ,아이싱,파이핑 등 디자인에
                중요한 기본기와 고급 제조 기술로 구성된 클래스입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-100 bg-opacity-80 pt-30pxr md:pb-30pxr lg:py-100pxr">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="flex justify-center items-center px-10pxr md:w-2/5 lg:w-1/2">
                <div className="relative w-full h-60 lg:h-[27rem]">
                  <Image
                    src="/images/cake-design/cakedesign_menu_img_1.jpeg"
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
                  <TextWithCheckIcon text="취미로 시작하여 베이킹 기초를 배워보실분들!" />
                  <TextWithCheckIcon text="베이커리 종사자 중 자격증이 없으시분들!" />
                  <TextWithCheckIcon text="특성화고 조리대 입시를 위해 자격증 취득을 목표로 하시는분들!" />
                  <TextWithCheckIcon text="취득후 베이커리업장 또는 카페에 취업이나 창업을 희망하신분들!" />
                </div>
              </div>
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
        <div className="bg-gray-100 bg-opacity-80 py-30pxr md:py-100pxr">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="md:mb-30pxr">
              <SubTitleBox
                title="케이크디자인입문"
                content={
                  <>
                    현재 트렌드에 맞춘 인기품목을 배움으로써
                    <br />
                    취미 또는 실무향상을 원하시는 분들에게 추천드립니다.
                  </>
                }
                backgroundImageUrl="/images/cake-design/cakedesign_menu_img_2.jpeg"
                titleClassName="text-theone-color13"
              />
            </div>
            <CakeDesignIntroduction />
          </div>
        </div>
      </section>
      <section>
        <div className="py-30pxr md:py-100pxr">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="md:mb-30pxr">
              <SubTitleBox
                title="케이크디자인심화"
                content={
                  <>
                    실무에 필요한 제품 응용과 고급 스킬을 배움으로써
                    <br />
                    취업이나 창업을 원하시는 분들에게 추천드립니다.
                  </>
                }
                backgroundImageUrl="/images/cake-design/cakedesign_menu_img_3.jpeg"
                titleClassName="text-theone-color13"
              />
            </div>
            <CakeDesignDeepening />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-100 bg-opacity-80 py-30pxr md:py-100pxr">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="md:mb-30pxr">
              <SubTitleBox
                title="케이크 실무"
                content={
                  <>
                    현재 트렌드에 맞춘 인기품목을 배움으로써
                    <br />
                    취미 또는 실무향상을 원하시는 분들에게 추천드립니다.
                  </>
                }
                backgroundImageUrl="/images/cake-design/cakedesign_menu_img_4.jpeg"
                titleClassName="text-theone-color13"
              />
            </div>
            <CakeDesignWorkinglevel />
          </div>
        </div>
      </section>
    </main>
  );
}
