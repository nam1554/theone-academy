import CardList from "@/components/CardList";
import MenuBox from "@/components/MenuBox";
import SubTitleBox from "@/components/SubTitleBox";
import TitleBox from "@/components/TitleBox";
import TitleWithBar from "@/components/TitleWithBar";
import { MENU_CATEGORY, MENU_NAME, NAVIGATION } from "@/constants/constants";
import { classNames } from "@/utils/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const classInfo = [
  { title: "정원", content: "2~6명" },
  { title: "교육기간", content: "1~3개월" },
  { title: "시간표", content: "주2회, 주3회, 주말반 수업" },
  { title: "강의시간", content: "오전반, 오후반, 저녁반, 주말반" },
];

const 바리스타2급 = [
  {
    title: "커피 머신 작동법|기본적인 커피추출",
    imgUrl: "/images/barista/barista_lv1_img_1.jpeg",
  },
  {
    title: "성분추출,채널링|분쇄조절",
    imgUrl: "/images/barista/barista_lv1_img_2.jpeg",
  },
  {
    title: "스티밍[공기주입]|스트밍[혼합]",
    imgUrl: "/images/barista/barista_lv1_img_3.jpeg",
  },
  {
    title: "우유 유광 제어|낙차를 활용한 푸어링",
    imgUrl: "/images/barista/barista_lv1_img_4.jpeg",
  },
  {
    title: "라떼&카푸치노 차이|원&하트 푸어링",
    imgUrl: "/images/barista/barista_lv1_img_5.jpeg",
  },
  {
    title: "시험회차[테스트]",
    imgUrl: "/images/barista/barista_lv1_img_6.jpeg",
  },
];

const 바리스타1급 = [
  {
    title: "기초 추출복습|원두 특성파악",
    imgUrl: "/images/barista/barista_lv2_img_1.jpeg",
  },
  {
    title: "원두특성파악|원두양에 따른 변화",
    imgUrl: "/images/barista/barista_lv2_img_2.jpeg",
  },
  {
    title: "추출양에 따른 변화|분쇄도 따른 변화화",
    imgUrl: "/images/barista/barista_lv2_img_3.jpeg",
  },
  {
    title: "라떼아트|유량제어 연습",
    imgUrl: "/images/barista/barista_lv2_img_4.jpeg",
  },
  {
    title: "라떼아트 2단,3단하트|핸들링 연습",
    imgUrl: "/images/barista/barista_lv2_img_5.jpeg",
  },
  { title: "사전테스트", imgUrl: "/images/barista/barista_lv2_img_6.jpeg" },
  {
    title: "시험회차[테스트]",
    imgUrl: "/images/barista/barista_lv2_img_7.jpeg",
  },
];

export default function Page() {
  const menus = NAVIGATION.filter(
    (category) => category.name === MENU_CATEGORY.바리스타
  )[0].child;
  return (
    <main>
      <section>
        <TitleBox
          title="BARISTA"
          subTitle="바 리 스 타"
          backgroundImageUrl="/images/barista/barista_menu_img_0.jpeg"
        />
      </section>
      <section>
        {menus ? (
          <MenuBox>
            {menus.map((menu, index) => (
              <MenuBox.Button key={index} text={menu.name} href={menu.href} />
            ))}
          </MenuBox>
        ) : null}
      </section>
      <section>
        <div className="max-w-7xl mx-auto mt-20pxr md:mt-50pxr">
          <TitleWithBar text={MENU_NAME.바리스타자격증} />
        </div>
        <div className="max-w-7xl mx-auto mt-20pxr lg:mt-30pxr">
          <div className="relative h-28 md:h-80">
            <Image
              src="/images/barista/barista_menu_img_1.jpeg"
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
              {classInfo.map((item, index) => (
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
        <div className="bg-gray-200 py-30pxr md:py-100pxr">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="mb-30pxr">
              <SubTitleBox
                title="바리스타2급(LV1)"
                content={
                  <>
                    바리스타를 목적으로 커피를 처음접하시거나,
                    <br />
                    취미로 배우시는분들에게 추천드립니다.
                  </>
                }
                backgroundImageUrl="/images/barista/barista_menu_img_2.jpeg"
                titleClassName="text-theone-color10"
              />
            </div>
            <CardList columns={3}>
              {바리스타2급.map((item, index) => (
                <CardList.CardItem
                  key={index}
                  imgUrl={item.imgUrl}
                  labelText={index + 1 + "회차"}
                  labelBgClassName="bg-[#87837C]"
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
        <div className="bg-gray-100 py-30pxr md:py-100pxr">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="mb-30pxr">
              <SubTitleBox
                title="바리스타1급(LV2)"
                content={
                  <>
                    바리스타LV1 자격증 소지하시거나,
                    <br />
                    커피에 대해 깊게 배워보고 싶은분들에게 추천드립니다.
                  </>
                }
                backgroundImageUrl="/images/barista/barista_menu_img_3.jpeg"
                titleClassName="text-theone-color10"
              />
            </div>
            <CardList columns={"3 lg:4"}>
              {바리스타1급.map((item, index) => (
                <CardList.CardItem
                  key={index}
                  imgUrl={item.imgUrl}
                  labelText={index + 1 + "회차"}
                  labelBgClassName="bg-[#87837C]"
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
