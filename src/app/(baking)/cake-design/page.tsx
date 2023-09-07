import CardList from "@components/CardList";
import SubTitleBox from "@components/SubTitleBox";
import TextWithCheckIcon from "@components/TextWithCheckIcon";
import TitleWithBar from "@components/TitleWithBar";
import { MENU_NAME } from "@constants/constants";
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

const 케이크디자인입문 = [
  {
    title: "케이크 아이싱 종류(원형)",
    imgUrl: "/images/cake-design/cakedesign_introduction_img_1.jpeg",
  },
  {
    title: "케이크 아이싱 종류(돔형)|기초 파이핑",
    imgUrl: "/images/cake-design/cakedesign_introduction_img_2.jpeg",
  },
  {
    title: "제누아즈 제조 이해 및 각종 깍지를 이용한 파이핑 연습",
    imgUrl: "/images/cake-design/cakedesign_introduction_img_3.jpeg",
  },
  {
    title: "도안 및 실전 케이크 제작",
    imgUrl: "/images/cake-design/cakedesign_introduction_img_4.jpeg",
  },
  {
    title: "레터링, 실전 파이핑 응용법",
    imgUrl: "/images/cake-design/cakedesign_introduction_img_5.jpeg",
  },
  {
    title: "레이스 파이핑 응용,|커스텀 케이크 시트제작",
    imgUrl: "/images/cake-design/cakedesign_introduction_img_6.jpeg",
  },
  {
    title: "다양한 크림 제조법 이해,|도안 파이핑",
    imgUrl: "/images/cake-design/cakedesign_introduction_img_7.jpeg",
  },
  {
    title: "나만의 커스텀 케이크 제작",
    imgUrl: "/images/cake-design/cakedesign_introduction_img_8.jpeg",
  },
];

const 케이크디자인심화 = [
  {
    title: "케이크 아이싱 종류(쉬폰)",
    imgUrl: "/images/cake-design/cakedesign_deepening_img_1.jpeg",
  },
  {
    title: "아이싱 응용법(사각) 및 시트제작",
    imgUrl: "/images/cake-design/cakedesign_deepening_img_2.jpeg",
  },
  {
    title: "쉬폰케이크 디자인 및 디자인 실전 연습",
    imgUrl: "/images/cake-design/cakedesign_deepening_img_3.jpeg",
  },
  {
    title: "플라워 파이핑(장미,작약) 및 조색 방법 이해 제조",
    imgUrl: "/images/cake-design/cakedesign_deepening_img_4.jpeg",
  },
  {
    title: "플라워 파이핑(여러가지 꽃) 및 조색 실습(그라데이션)",
    imgUrl: "/images/cake-design/cakedesign_deepening_img_5.jpeg",
  },
  {
    title: "플라워 파이핑 실습 시트제작",
    imgUrl: "/images/cake-design/cakedesign_deepening_img_6.jpeg",
  },
  {
    title: "다양한 크림 제조 및 컬러나 디자인에 따른 꽃 배치 연습",
    imgUrl: "/images/cake-design/cakedesign_deepening_img_7.jpeg",
  },
  {
    title: "나만의 플라워 케이크 제작",
    imgUrl: "/images/cake-design/cakedesign_deepening_img_8.jpeg",
  },
];

const 케이크실무 = [
  {
    title: "빅토리아 케이크",
    imgUrl: "/images/cake-design/cakedesign_workinglevel_img_1.jpeg",
  },
  {
    title: "바스크 치즈 케이크",
    imgUrl: "/images/cake-design/cakedesign_workinglevel_img_2.jpeg",
  },
  {
    title: "마스카포네 티라미슈",
    imgUrl: "/images/cake-design/cakedesign_workinglevel_img_3.jpeg",
  },
  {
    title: "요거트 보틀케이크",
    imgUrl: "/images/cake-design/cakedesign_workinglevel_img_4.jpeg",
  },
  {
    title: "제철과일 샤를로트",
    imgUrl: "/images/cake-design/cakedesign_workinglevel_img_5.jpeg",
  },
  {
    title: "체리 포레누아",
    imgUrl: "/images/cake-design/cakedesign_workinglevel_img_6.jpeg",
  },
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
            <CardList columns={3} mdColumns={4}>
              {케이크디자인입문.map((item, index) => (
                <CardList.CardItem
                  key={index}
                  imgUrl={item.imgUrl}
                  labelText={index + 1 + "회차"}
                  labelBgClassName="bg-theone-color13"
                  content={item.title.split("|").map((text, textIndex) => (
                    <p key={textIndex} className="lg:w-2/3">
                      {text}
                    </p>
                  ))}
                />
              ))}
            </CardList>
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
            <CardList columns={3} mdColumns={4}>
              {케이크디자인심화.map((item, index) => (
                <CardList.CardItem
                  key={index}
                  imgUrl={item.imgUrl}
                  labelText={index + 1 + "회차"}
                  labelBgClassName="bg-theone-color13"
                  content={item.title.split("|").map((text, textIndex) => (
                    <p key={textIndex} className="lg:w-2/3">
                      {text}
                    </p>
                  ))}
                />
              ))}
            </CardList>
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
            <CardList columns={3}>
              {케이크실무.map((item, index) => (
                <CardList.CardItem
                  key={index}
                  imgUrl={item.imgUrl}
                  labelText={index + 1 + "회차"}
                  labelBgClassName="bg-theone-color13"
                  content={item.title.split("|").map((text, textIndex) => (
                    <p key={textIndex} className="lg:w-2/3">
                      {text}
                    </p>
                  ))}
                />
              ))}
            </CardList>
          </div>
        </div>
      </section>
    </main>
  );
}
