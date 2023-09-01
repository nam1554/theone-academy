import MenuBox from "@/components/MenuBox";
import TitleBox from "@/components/TitleBox";
import TitleWithBar from "@/components/TitleWithBar";
import { MENU_CATEGORY, MENU_NAME, NAVIGATION } from "@/constants/constants";
import InteriorBanner from "@/containers/location/InteriorBanner";
import { classNames } from "@/utils/utils";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Montserrat } from "next/font/google";

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
        <div className="max-w-7xl mx-auto">
          <TitleWithBar text={MENU_NAME.위치조회시설소개} />
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="my-30pxr px-10pxr">
            <div className="text-center py-15pxr">
              <div
                className={classNames(
                  montserrat.className,
                  "text-11pxr text-theone-color9 md:text-14pxr lg:text-18pxr"
                )}
              >
                L O C A T I O N
              </div>
              <div
                className={classNames(
                  montserrat.className,
                  "mt-4pxr text-20pxr md:text-28pxr lg:text-37pxr"
                )}
              >
                찾아오시는 길
              </div>
              <div className="mt-10pxr text-12pxr md:text-15pxr lg:text-19pxr">
                더원교육그룹으로 오시는 길을 소개합니다.
              </div>
            </div>
            <div className="py-10pxr">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.7857173734883!2d127.08669897550982!3d36.99104777219338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b3afb765c1de1%3A0xbfb3e53c7b068a4!2z6rK96riw64-EIO2Pie2DneyLnCDtj4ntg53roZwzMuuyiOq4uCAyNA!5e0!3m2!1sko!2skr!4v1693554665423!5m2!1sko!2skr"
                  className="w-full h-72 md:h-[29rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="경기 평택시 평택로32번길 24"
                  aria-label="경기 평택시 평택로32번길 24"
                />
              </div>
            </div>
            <div className="py-5pxr flex">
              <div className="w-1/3 py-10pxr md:w-1/4 bg-theone-color1 flex justify-center items-center">
                <MapPinIcon className="w-15pxr stroke-white fill-white" />
                <span className="text-white text-15pxr ml-5pxr md:text-17pxr lg:text-20pxr">
                  Adress
                </span>
              </div>
              <div className="w-2/3 md:w-3/4 flex items-center bg-gray-100">
                <span className="text-13pxr ml-10pxr md:text-14pxr lg:text-16pxr">
                  위치: 경기 평택시 평택로32번길 24 2층
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="mt-50pxr mb-50pxr md:mb-80pxr lg:mb-100pxr">
            <div className="text-center py-15pxr px-10pxr">
              <div
                className={classNames(
                  montserrat.className,
                  "text-11pxr text-theone-color9 md:text-14pxr lg:text-18pxr"
                )}
              >
                I N T E R I O R
              </div>
              <div
                className={classNames(
                  montserrat.className,
                  "mt-4pxr text-20pxr md:text-28pxr lg:text-37pxr"
                )}
              >
                시설소개
              </div>
              <div className="mt-10pxr px-15pxr text-12pxr md:text-15pxr lg:text-19pxr">
                더원교육그룹은 국내 최고의 트렌드에 따른 시설과 장비로
                수강생분들의 최고의 교육을 위하겠습니다.
              </div>
            </div>
            <div className="px-10pxr py-15pxr">
              <InteriorBanner />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
