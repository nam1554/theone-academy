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

const 센서리브루잉LV1 = [
  {
    title: "센서리 기초이론|커피 향미 인지 훈련",
    imgUrl: "/images/sensory-brewing/brewing_lv1_img_1.jpeg",
  },
  {
    title: "아로마키트 카테고리|향미 평가훈련",
    imgUrl: "/images/sensory-brewing/brewing_lv1_img_2.jpeg",
  },
  {
    title: "커핑 테이블 셋팅연습|아로마 키트 카테고리",
    imgUrl: "/images/sensory-brewing/brewing_lv1_img_3.jpeg",
  },
  {
    title: "커핑 테이블 셋팅 실습|SCA커핑시트 작성연습",
    imgUrl: "/images/sensory-brewing/brewing_lv1_img_4.jpeg",
  },
  {
    title: "브루잉 기초 이론|브루잉 방식의 차이",
    imgUrl: "/images/sensory-brewing/brewing_lv1_img_5.jpeg",
  },
  {
    title: "푸어방식+린싱",
    imgUrl: "/images/sensory-brewing/brewing_lv1_img_6.jpeg",
  },
  {
    title: "추출 변수 이해|구간별 커피향미",
    imgUrl: "/images/sensory-brewing/brewing_lv1_img_7.jpeg",
  },
  {
    title: "추출 변수[입자크기]|물온도",
    imgUrl: "/images/sensory-brewing/brewing_lv1_img_8.jpeg",
  },
];

const 센서리브루잉LV2 = [
  {
    title: "미각 5원미 이해|아로마 키트 연습",
    imgUrl: "/images/sensory-brewing/brewing_lv2_img_1.jpeg",
  },
  {
    title: "맛의 강도 차이|인지 연습",
    imgUrl: "/images/sensory-brewing/brewing_lv2_img_2.jpeg",
  },
  {
    title: "특성 차이 비교 실습|트라이 앵글 커핑 실습",
    imgUrl: "/images/sensory-brewing/brewing_lv2_img_3.jpeg",
  },
  {
    title: "커핑 테이블 셋팅 실습|커핑시 발생 오류|주의사항 이해",
    imgUrl: "/images/sensory-brewing/brewing_lv2_img_4.jpeg",
  },
  {
    title: "TDS+추출 수율이해|브루잉 컨트롤 차트이|해",
    imgUrl: "/images/sensory-brewing/brewing_lv2_img_5.jpeg",
  },
  {
    title: "드리퍼+블루밍차이",
    imgUrl: "/images/sensory-brewing/brewing_lv2_img_6.jpeg",
  },
  {
    title: "추출 변수 이해|물온도,물비율 입자",
    imgUrl: "/images/sensory-brewing/brewing_lv2_img_7.jpeg",
  },
  {
    title: "추출변수 통제|TDS,추출 수율 조절",
    imgUrl: "/images/sensory-brewing/brewing_lv2_img_8.jpeg",
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
          backgroundImageUrl="/images/category/barista.jpeg"
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
          <TitleWithBar text={MENU_NAME.센서리브루잉} />
        </div>
        <div className="max-w-7xl mx-auto md:mt-20pxr lg:mt-30pxr">
          <div className="relative h-28 md:h-80">
            <Image
              src="/images/sensory-brewing/brewing_menu_img_0.jpeg"
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
              “Professional Sensory&Brewing”
            </div>
            <div>
              <p className="text-12pxr text-center leading-6 md:text-18pxr md:leading-10">
                <strong>[센서리]</strong>커피의 맛과 향을 분별하는 스킬업을 위한
                단맛,쓴맛,신맛,감칠맛,짠맛등 배우는 센서리수업과
                <br />
                다양한 추출도구 활용법을 배우고 핸드드립에 대한 개념을
                전문적으로 배우실수 있습니다
                <br />
                <br />
                <strong>[브루잉]</strong> 쉽게 말해 ‘핸드드립’으로 드립포트와
                원두, 드리퍼만 있으면 나도 핸드드립 왕!
                <br />
                핸드드립의 개념과 실용적인 기술력 습득으로 나만의 홈
                카페/회사/캠핑 등 다양한 장소에서 즐겨보세요.
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
            <div className="md:mb-30pxr">
              <SubTitleBox
                title="센서리&브루잉LV1"
                content={
                  <>
                    커피의 향과 맛을 평가하는 수업으로 홈카페 및 로스터리,브루잉
                    <br />
                    카페 창업을 목표로 하시는분께 추천드립니다.
                  </>
                }
                backgroundImageUrl="/images/sensory-brewing/brewing_menu_img_1.jpeg"
                titleClassName="text-theone-color11"
              />
            </div>
            <CardList columns={"3 md:4"}>
              {센서리브루잉LV1.map((item, index) => (
                <CardList.CardItem
                  key={index}
                  imgUrl={item.imgUrl}
                  labelText={index + 1 + "회차"}
                  labelBgClassName="bg-theone-color11"
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
            <div className="md:mb-30pxr">
              <SubTitleBox
                title="센서리&브루잉LV2"
                content={
                  <>
                    스페셜티 카페 창업을 목표로 하시는분 또는
                    <br /> 대회준비를 하시는 바리스타분
                  </>
                }
                backgroundImageUrl="/images/sensory-brewing/brewing_menu_img_2.jpeg"
                titleClassName="text-theone-color11"
              />
            </div>
            <CardList columns={"3 md:4"}>
              {센서리브루잉LV2.map((item, index) => (
                <CardList.CardItem
                  key={index}
                  imgUrl={item.imgUrl}
                  labelText={index + 1 + "회차"}
                  labelBgClassName="bg-theone-color11"
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
