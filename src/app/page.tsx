import {
  BuildingLibraryIcon,
  LightBulbIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { classNames } from "@utils/utils";
import MainBanner from "@containers/MainBanner";
import ClassBanner from "@containers/ClassBanner";
import PartnerBanner from "@containers/PartnerBanner";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  return (
    <main>
      <div>
        <section>
          <MainBanner />
        </section>
        <section>
          <div className="flex justify-between flex-col text-16pxr lg:flex-row">
            <Link
              className="bg-black flex justify-center items-center py-10pxr lg:grow"
              href={"/notice"}
            >
              <div className="text-center text-white lg:grow">공지사항</div>
              <div className="absolute right-15pxr lg:relative lg:right-auto lg:pr-15pxr">
                <PlusCircleIcon className="w-25pxr h-25pxr stroke-white" />
              </div>
            </Link>
            <Link
              className="bg-[#F6F5EF] flex justify-center items-center py-10pxr lg:grow"
              href={"/tuition-fees"}
            >
              <div className="text-center lg:grow">수강료조회</div>
              <div className="absolute right-15pxr lg:relative lg:right-auto lg:pr-15pxr">
                <PlusCircleIcon className="w-25pxr h-25pxr stroke-black" />
              </div>
            </Link>
          </div>
        </section>
        <section>
          <div className="py-20pxr md:py-50pxr">
            <div
              className={classNames(
                montserrat.className,
                "max-w-7xl mx-auto flex justify-between"
              )}
            >
              <div
                className="w-1/3 flex flex-col items-center justify-center border border-[#DADADA]
              space-y-5pxr px-5pxr py-10pxr m-5pxr md:py-30pxr md:px-15pxr md:space-y-10pxr"
              >
                <LightBulbIcon strokeWidth={1} className="w-40pxr md:w-70pxr" />
                <div className="text-14pxr md:text-22pxr font-bold">TRUST</div>
                <div className="text-13pxr md:text-17pxr">신뢰할 수 있는</div>
              </div>
              <div
                className="w-1/3 flex flex-col items-center justify-center border border-[#DADADA]
              space-y-5pxr px-5pxr py-10pxr m-5pxr md:py-30pxr md:px-15pxr md:space-y-10pxr"
              >
                <BuildingLibraryIcon
                  strokeWidth={1}
                  className="w-40pxr md:w-70pxr"
                />
                <div className="text-14pxr md:text-22pxr font-bold">
                  EXPERIENCE
                </div>
                <div className="text-13pxr md:text-17pxr">풍부한 경험</div>
              </div>
              <div
                className="w-1/3 flex flex-col items-center justify-center border border-[#DADADA]
              space-y-5pxr px-5pxr py-10pxr m-5pxr md:py-30pxr md:px-15pxr md:space-y-10pxr"
              >
                <UserGroupIcon strokeWidth={1} className="w-40pxr md:w-70pxr" />
                <div className="text-14pxr md:text-22pxr font-bold">EXPERT</div>
                <div className="text-13pxr md:text-17pxr">최고의 전문가</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <ClassBanner />
        </section>
        <section>
          <PartnerBanner />
        </section>
        <section>
          <div className="mt-20pxr relative">
            <div className="absolute w-full h-full flex flex-col justify-center items-center z-[2]">
              <div className="text-white text-25pxr font-medium md:text-50pxr">
                &apos;ONE&apos; TO ONE
              </div>
              <div className="my-10pxr w-1/3 mx-auto border-t border-white md:my-15pxr md:w-1/6"></div>
              <div className="text-white text-12pxr text-center leading-5 p-10pxr md:text-19pxr md:leading-7">
                더원바리스타제과제빵학원은 현재 트렌드에 맞는
                <br /> 맞춤식 교육을 제공해드리고 있으며 최대한의 스킬로 응용
                가능할 수 있도록
                <br /> 소수정예 수업을 원칙으로 운영하고 있습니다
                <br />
                수업에 집중하실수 있도록 1:1 수강담당 케어서비스 및 전임강사진
                분들이
                <br />
                수강생분들 수업을 책임지고 있습니다.
              </div>
            </div>
            <div className="relative h-72 md:h-96 lg:h-[35rem]">
              <Image
                src={"/images/main/main_bottom_img_0.jpeg"}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                alt="'ONE' TO ONE image"
              />
              <Image
                className="absolute w-full h-full top-0 opacity-40"
                src={"/images/background_overlay_img.png"}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                alt="overlay image"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
