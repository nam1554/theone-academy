import TitleWithBar from "@components/TitleWithBar";
import { MENU_NAME } from "@constants/constants";
import ProposeSubmitForm from "@containers/propose/ProposeSubmitForm";
import Image from "next/image";
import background_overlay_img from "@public/images/background_overlay_img.png";

export default function Page() {
  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto mt-20pxr md:mt-50pxr px-10pxr">
          <TitleWithBar text={MENU_NAME.더원에바란다} />
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto md:mt-20pxr lg:mt-30pxr">
          <div className="relative">
            <div className="relative h-44 md:h-80 w-full -z-10">
              <Image
                src="/images/propose/propose_menu_img_0.jpeg"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                alt="중간 이미지"
              />
              <Image
                className="absolute w-full h-full top-0 opacity-40"
                src={background_overlay_img}
                alt="overlay image"
              />
            </div>
            <div className="absolute top-0 w-full h-full px-15pxr pt-30pxr pb-30pxr space-y-4">
              <div className="flex justify-center items-center h-full">
                <p className="text-12pxr text-center text-white leading-6 md:text-18pxr md:leading-10">
                  수강생 한분한분 귀기울려 들으며 개선하는
                  <br />
                  더원아카데미가 되겠습니다.
                  <br />
                  <br />- 더원아카데미그룹 일동 -
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-4xl mx-auto mt-30pxr md:mt-100pxr md:mb-20pxr lg:mt-100pxr">
          <div className="px-15pxr py-30pxr">
            <ProposeSubmitForm />
          </div>
        </div>
      </section>
    </main>
  );
}
