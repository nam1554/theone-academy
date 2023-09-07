import MenuBox from "@components/MenuBox";
import TextWithCheckIcon from "@components/TextWithCheckIcon";
import TitleBox from "@components/TitleBox";
import TitleWithBar from "@components/TitleWithBar";
import { MENU_CATEGORY, MENU_NAME, NAVIGATION } from "@constants/constants";
import { classNames } from "@utils/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const 강의개요 = [
  { title: "정원", content: "6~8명" },
  { title: "교육기간", content: "1~3개월" },
  { title: "시간표", content: "주2회, 주3회, 주말반 수업" },
  { title: "강의시간", content: "오전반, 오후반, 저녁반, 주말반" },
];

export default function Page() {
  const menus = NAVIGATION.filter(
    (category) => category.name === MENU_CATEGORY.베이킹
  )[0].child;
  return (
    <main>
      <section>
        <TitleBox
          title="BAKING"
          subTitle="베 이 킹"
          backgroundImageUrl="/images/category/baking.jpeg"
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
          <TitleWithBar text={MENU_NAME.제과제빵자격증} />
        </div>
        <div className="max-w-7xl mx-auto md:mt-20pxr lg:mt-30pxr">
          <div className="relative h-28 md:h-80">
            <Image
              src="/images/baking/baking_menu_img_0.jpeg"
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
                쿠키, 파이, 식빵, 케이크 베이글 등 다양한 제과,제빵 실기품목을
                배우는 과정으로 제과,제빵기능사 실기시험에
                <br />
                해당하는 제빵품목 20가지, 제과품목 20가지를 실습하며, 제과제빵의
                기본이 되는 공정을 배우는 과정입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-100 pt-30pxr md:pb-30pxr lg:py-100pxr">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="flex justify-center items-center px-10pxr md:w-2/5 lg:w-1/2">
                <div className="relative w-full h-60 lg:h-[27rem]">
                  <Image
                    src="/images/baking/baking_menu_img_1.jpeg"
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
        <div className="bg-gray-100 py-30pxr md:py-100pxr">
          <div className="max-w-7xl mx-auto flex flex-col space-y-25pxr">
            <div className="flex justify-center items-center">
              <h3 className="text-23pxr font-medium md:text-26pxr lg:text-30pxr">
                제과기능사 회차 및 품목
              </h3>
            </div>
            <div className="flex justify-center items-center px-10pxr">
              <div className="relative w-full h-60 md:h-96 lg:h-[27rem]">
                <Image
                  src="/images/baking/baking_menu_img_2.jpeg"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  alt="제과기능사 회차 및 품목 상단 이미지"
                />
              </div>
            </div>
            <div className="px-10pxr flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-10pxr">
              <div className="flex flex-col md:w-1/4">
                <div className="bg-theone-color5 text-white text-center py-8pxr text-18pxr">
                  STEP 1~5 ≫
                </div>
                <div className="flex flex-col p-20pxr space-y-8pxr bg-white md:grow">
                  <TextWithCheckIcon text="1.버터스펀지(공립법)" />
                  <TextWithCheckIcon text="2.버터스펀지(별립법)" />
                  <TextWithCheckIcon text="3.젤리롤케이크" />
                  <TextWithCheckIcon text="4.마들렌" />
                  <TextWithCheckIcon text="5.브라우니" />
                </div>
              </div>
              <div className="flex flex-col md:w-1/4">
                <div className="bg-theone-color5 text-white text-center py-8pxr text-18pxr">
                  STEP 6~10 ≫
                </div>
                <div className="flex flex-col p-20pxr space-y-8pxr bg-white md:grow">
                  <TextWithCheckIcon text="6.슈" />
                  <TextWithCheckIcon text="7.초코롤케이크" />
                  <TextWithCheckIcon text="8.소프트롤케이크" />
                  <TextWithCheckIcon text="9.시폰케이크" />
                  <TextWithCheckIcon text="10.쇼트브레드쿠키" />
                </div>
              </div>
              <div className="flex flex-col md:w-1/4">
                <div className="bg-theone-color5 text-white text-center py-8pxr text-18pxr">
                  STEP 11~15 ≫
                </div>
                <div className="flex flex-col p-20pxr space-y-8pxr bg-white md:grow">
                  <TextWithCheckIcon text="11.치즈케이크" />
                  <TextWithCheckIcon text="12.과일케이크" />
                  <TextWithCheckIcon text="13.초코머핀" />
                  <TextWithCheckIcon text="14.마데라컵케이크" />
                  <TextWithCheckIcon text="15.파운드케이크" />
                </div>
              </div>
              <div className="flex flex-col md:w-1/4">
                <div className="bg-theone-color5 text-white text-center py-8pxr text-18pxr">
                  STEP 16~20 ≫
                </div>
                <div className="flex flex-col p-20pxr space-y-8pxr bg-white md:grow">
                  <TextWithCheckIcon text="16.다쿠와즈" />
                  <TextWithCheckIcon text="17.타르트" />
                  <TextWithCheckIcon text="18.사과파이" />
                  <TextWithCheckIcon text="19.호두파이" />
                  <TextWithCheckIcon text="20.버터쿠키" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-30pxr md:py-100pxr">
          <div className="max-w-7xl mx-auto flex flex-col space-y-25pxr">
            <div className="flex justify-center items-center">
              <h3 className="text-23pxr font-medium md:text-26pxr lg:text-30pxr">
                제빵기능사 회차 및 품목
              </h3>
            </div>
            <div className="flex justify-center items-center px-10pxr">
              <div className="relative w-full h-60 md:h-96 lg:h-[27rem]">
                <Image
                  src="/images/baking/baking_menu_img_3.jpeg"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  alt="제빵기능사 회차 및 품목 상단 이미지"
                />
              </div>
            </div>
            <div className="px-10pxr flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-10pxr">
              <div className="flex flex-col md:w-1/4">
                <div className="bg-theone-color5 text-white text-center py-8pxr text-18pxr">
                  STEP 1~5 ≫
                </div>
                <div className="flex flex-col p-20pxr space-y-8pxr bg-gray-100 md:grow">
                  <TextWithCheckIcon text="1.비상식빵" />
                  <TextWithCheckIcon text="2.옥수수식빵" />
                  <TextWithCheckIcon text="3.밤식빵" />
                  <TextWithCheckIcon text="4.버터톱식빵" />
                  <TextWithCheckIcon text="5.모카빵" />
                </div>
              </div>
              <div className="flex flex-col md:w-1/4">
                <div className="bg-theone-color5 text-white text-center py-8pxr text-18pxr">
                  STEP 6~10 ≫
                </div>
                <div className="flex flex-col p-20pxr space-y-8pxr bg-gray-100 md:grow">
                  <TextWithCheckIcon text="6.호밀빵" />
                  <TextWithCheckIcon text="7.더치빵" />
                  <TextWithCheckIcon text="8.통밀빵" />
                  <TextWithCheckIcon text="9.풀먼식빵" />
                  <TextWithCheckIcon text="10.우유식빵" />
                </div>
              </div>
              <div className="flex flex-col md:w-1/4">
                <div className="bg-theone-color5 text-white text-center py-8pxr text-18pxr">
                  STEP 11~15 ≫
                </div>
                <div className="flex flex-col p-20pxr space-y-8pxr bg-gray-100 md:grow">
                  <TextWithCheckIcon text="11.그리시니" />
                  <TextWithCheckIcon text="12.트위스트" />
                  <TextWithCheckIcon text="13.소보로" />
                  <TextWithCheckIcon text="14.단팥빵" />
                  <TextWithCheckIcon text="15.크림빵" />
                </div>
              </div>
              <div className="flex flex-col md:w-1/4">
                <div className="bg-theone-color5 text-white text-center py-8pxr text-18pxr">
                  STEP 16~20 ≫
                </div>
                <div className="flex flex-col p-20pxr space-y-8pxr bg-gray-100 md:grow">
                  <TextWithCheckIcon text="16.베이글" />
                  <TextWithCheckIcon text="17.버터롤" />
                  <TextWithCheckIcon text="18.빵도넛" />
                  <TextWithCheckIcon text="19.스위트롤" />
                  <TextWithCheckIcon text="20.소세지빵" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
