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
  { title: "교육기간", content: "1~3개월" },
  { title: "시간표", content: "주2회, 주3회, 주말반 수업" },
  { title: "강의시간", content: "오전반, 오후반, 저녁반, 주말반" },
];

const 카페디저트입문 = [
  {
    title: "아메리칸쿠키(2종)|클래식/너티초콜릿",
    imgUrl: "/images/dessert/dessert_introduction_img_1.jpg",
  },
  {
    title: "갈레트오쇼콜라",
    imgUrl: "/images/dessert/dessert_introduction_img_2.jpg",
  },
  {
    title: "마들렌2종|(커스터드, 레밍턴)",
    imgUrl: "/images/dessert/dessert_introduction_img_3.jpg",
  },
  {
    title: "휘낭시에(2종)|무화과크림/치즈누네띠네",
    imgUrl: "/images/dessert/dessert_introduction_img_4.jpg",
  },
  {
    title: "얼그레이스콘",
    imgUrl: "/images/dessert/dessert_introduction_img_5.jpg",
  },
  {
    title: "티라미수컵케이크",
    imgUrl: "/images/dessert/dessert_introduction_img_6.jpg",
  },
  {
    title: "솔티카라멜 파운드",
    imgUrl: "/images/dessert/dessert_introduction_img_7.jpeg",
  },
  {
    title: "블루베리 치즈|크럼블",
    imgUrl: "/images/dessert/dessert_introduction_img_8.jpeg",
  },
];

const 카페디저트심화 = [
  {
    title: "레몬 구겔호프",
    imgUrl: "/images/dessert/dessert_deepening_img_1.jpg",
  },
  {
    title: "메이플 피칸파이",
    imgUrl: "/images/dessert/dessert_deepening_img_2.jpg",
  },
  {
    title: "에그타르트",
    imgUrl: "/images/dessert/dessert_deepening_img_3.jpg",
  },
  {
    title: "얼그레이 갸토 쇼콜라",
    imgUrl: "/images/dessert/dessert_deepening_img_4.jpg",
  },
  {
    title: "넛츠 가나슈 타르트",
    imgUrl: "/images/dessert/dessert_deepening_img_5.jpg",
  },
  {
    title: "당근케이크",
    imgUrl: "/images/dessert/dessert_deepening_img_6.jpg",
  },
  {
    title: "비스퀴 과일 롤",
    imgUrl: "/images/dessert/dessert_deepening_img_7.jpg",
  },
  {
    title: "다쿠아즈 몽블랑",
    imgUrl: "/images/dessert/dessert_deepening_img_8.jpg",
  },
];

export default function Page() {
  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto mt-20pxr md:mt-50pxr">
          <TitleWithBar text={MENU_NAME.카페디저트} />
        </div>
        <div className="max-w-7xl mx-auto md:mt-20pxr lg:mt-30pxr">
          <div className="relative h-28 md:h-80">
            <Image
              src="/images/dessert/dessert_menu_img_0.png"
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
              “Best Course”
            </div>
            <div>
              <p className="text-12pxr text-center leading-6 md:text-18pxr md:leading-10">
                실제로 카페에서 판매되고 있는 품목중 BEST를 선정해서 비주얼 뿐만
                아니라 맛도 보장하는 과정입니다.
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
                    src="/images/dessert/dessert_menu_img_1.jpeg"
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
                  <TextWithCheckIcon text="베이킹 처음 입문하시는 분들" />
                  <TextWithCheckIcon text="자격증 취득은 하지 않더라도 나만의 카페 창업을 목표로 하시는분들" />
                  <TextWithCheckIcon text="홈베이킹을 통해 가족,친지분들께 맛있는 디저트를 선물하실분들" />
                  <TextWithCheckIcon text="베이커리 종사자분중 디저트 레시피가 필요하신분들" />
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
                title="카페디저트입문"
                content={
                  <>
                    현재 트렌드에 맞춘 인기품목을 배움으로써
                    <br />
                    취미 또는 실무향상을 원하시는 분들에게 추천드립니다.
                  </>
                }
                backgroundImageUrl="/images/dessert/dessert_menu_img_2.jpeg"
                titleClassName="text-theone-color9"
              />
            </div>
            <CardList columns={3} mdColumns={4}>
              {카페디저트입문.map((item, index) => (
                <CardList.CardItem
                  key={index}
                  imgUrl={item.imgUrl}
                  labelText={index + 1 + "회차"}
                  labelBgClassName="bg-theone-color9"
                  content={item.title.split("|").map((text, textIndex) => (
                    <p key={textIndex}>{text}</p>
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
                title="카페디저트심화"
                content={
                  <>
                    실무에 필요한 제품 응용과 고급 스킬을 배움으로써
                    <br />
                    취업이나 창업을 원하시는 분들에게 추천드립니다.
                  </>
                }
                backgroundImageUrl="/images/dessert/dessert_menu_img_2.jpeg"
                titleClassName="text-theone-color9"
              />
            </div>
            <CardList columns={3} mdColumns={4}>
              {카페디저트심화.map((item, index) => (
                <CardList.CardItem
                  key={index}
                  imgUrl={item.imgUrl}
                  labelText={index + 1 + "회차"}
                  labelBgClassName="bg-theone-color9"
                  content={item.title.split("|").map((text, textIndex) => (
                    <p key={textIndex}>{text}</p>
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
