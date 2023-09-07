import MenuBox from "@components/MenuBox";
import TitleBox from "@components/TitleBox";
import TitleWithBar from "@components/TitleWithBar";
import { MENU_CATEGORY, MENU_NAME, NAVIGATION } from "@constants/constants";
import { Handshake } from "@public/svgs";
import { classNames } from "@utils/utils";
import {
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Page() {
  const menus = NAVIGATION.filter(
    (category) => category.name === MENU_CATEGORY.아카데미
  )[0].child;
  return (
    <main>
      <section>
        <TitleBox
          title="ACADEMY"
          subTitle="아 카 데 미"
          backgroundImageUrl="/images/academy/introuduce_menu_img_0.jpeg"
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
          <TitleWithBar text={MENU_NAME.아카데미소개} />
          <div className="p-15pxr flex justify-center">
            <h2
              className={classNames(
                montserrat.className,
                "text-16pxr font-medium md:text-23pxr lg:text-30pxr"
              )}
            >
              PREMIUM QUALITY CLASS “The ONE”
            </h2>
          </div>
          <div className="mb-10pxr">
            <div className="relative h-28 md:h-52 lg:h-80">
              <Image
                src={"/images/academy/introuduce_menu_img_1.jpeg"}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                alt="아카데미 소개 중간 이미지"
              />
            </div>
          </div>
          <div className="p-15pxr">
            <div className="flex flex-col justify-center text-12pxr space-y-4 md:text-16pxr">
              <div className="text-center">
                <p>깊이감 있는 수업은 “Detail”에서 차이 납니다.</p>
                <p>오직 더원 수강생분들을 위해 마련한 “친절한 수업</p>
              </div>
              <div className="text-center">
                <p>• 소수 정예 환경의 밀착 수업</p>
                <p>• 다양한 커리큘럼</p>
                <p>• 고효율 기회비용 절감</p>
                <p>• 최신 기물과 최고의 환경</p>
                <p>• 전문 ‘LICENSE’ 강사님들 수업 직강 기회</p>
              </div>
              <div className="text-center">
                <p>
                  수업 외적은 고민하시지 않도록, 최고의 환경은 더원이
                  마련하였습니다.
                </p>
                <p>내가 갖춘 실력은 오직 나만의 것입니다.</p>
              </div>
              <div className="text-center">
                <p>지금 바로 시작하세요.</p>
                <p>“The ONE PREMIUM CLASS”</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-10pxr py-30pxr bg-gray-100 flex flex-col justify-center md:py-100pxr">
          <h2 className="text-18pxr text-center md:text-24pxr lg:text-26pxr">
            더원교육그룹&nbsp;
            <span className="font-semibold">3대 핵심가치</span>
          </h2>
          <div className="py-15pxr flex justify-center">
            <span className="w-1/3 border-t border-black md:h-1/6 lg:w-1/12"></span>
          </div>
          <div className="w-full md:flex md:justify-center md:max-w-5xl md:mx-auto lg:max-w-7xl">
            <div
              className="m-10pxr px-15pxr py-35pxr flex flex-col justify-center
             bg-white border border-gray-300 space-y-2 md:w-1/3"
            >
              <div className="flex justify-center">
                <ClipboardDocumentCheckIcon className="w-85pxr stroke-[0.7] md:w-95pxr" />
              </div>
              <div className="text-16pxr text-center font-bold md:text-18pxr">
                ‘ONE’ 하다
              </div>
              <div className="text-13pxr text-center md:text-15pxr">
                메뉴얼화된 수업이 아닌 고객이 원하는
                <br />
                맞춤형 교육을 제공을 목적으로 한다
              </div>
            </div>
            <div
              className="m-10pxr px-15pxr py-35pxr flex flex-col justify-center
             bg-white border border-gray-300 space-y-2 md:w-1/3"
            >
              <div className="flex justify-center">
                <UserGroupIcon className="w-85pxr stroke-[0.7] md:w-95pxr" />
              </div>
              <div className="text-16pxr text-center font-bold md:text-18pxr">
                화려한 스타보단 ‘ONE’팀
              </div>
              <div className="text-13pxr text-center md:text-15pxr">
                한사람에 의지한 조직이 아닌
                <br />
                하나의 팀으로 성과를 내는 조직을 지향한다
              </div>
            </div>
            <div
              className="m-10pxr px-15pxr py-35pxr flex flex-col justify-center
             bg-white border border-gray-300 space-y-2 md:w-1/3"
            >
              <div className="flex justify-center">
                <div className="relative w-85pxr h-85pxr stroke-[1] md:w-95pxr  md:h-95pxr">
                  <Image src={Handshake} fill priority alt="Logo" />
                </div>
              </div>
              <div className="text-16pxr text-center font-bold md:text-18pxr">
                ‘ONE’ TO ONE
              </div>
              <div className="text-13pxr text-center md:text-15pxr">
                직원과 고객 한분한분 만족과
                <br />
                발전을 도모한다
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
