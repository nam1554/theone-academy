import type { FooterProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const Footer = ({ navigation }: FooterProps) => {
  return (
    <footer className="relative w-full">
      <div className="bg-black">
        <section className="pt-40pxr">
          <div className="flex flex-wrap text-center lg:flex-nowrap lg:justify-center lg:space-x-24">
            {navigation.map((menu, menuIndex) => {
              return (
                <div key={menuIndex} className="w-1/2 pb-50pxr lg:w-auto">
                  <div className="text-white text-16pxr pb-10pxr cursor-default lg:text-18pxr">
                    {menu.en_name}
                  </div>
                  <ul className="text-theone-color4 text-12pxr space-y-1 lg:text-14pxr">
                    {menu.child?.map((item, childMenuIndex) => (
                      <li key={childMenuIndex}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
        <section className="pt-20pxr pb-100pxr border-t border-gray-900 md:px-30pxr">
          <div className="flex flex-col md:flex-row md:justify-around">
            <div className="flex items-center justify-center grow">
              <Image
                src={"/images/main/footer_log.png"}
                className="w-36 h-36"
                width={144}
                height={144}
                priority
                alt="Footer Logo"
              />
            </div>
            <div className="pt-15pxr grow-[3]">
              <div className="text-theone-color4 text-12pxr pl-10pxr space-y-1 md:space-y-5">
                <p>상호: 더원바리스타제과제빵학원</p>
                <p>
                  주소: 경기 평택시 평택로32번길 24 2층 / 사업자번호:
                  875-72-00380
                </p>
                <p>대표전화: 070-8287-2340</p>
                <p>Copyright © 2022 All Rights Reserved</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="fixed bottom-0 w-full z-10 lg:hidden">
            <div className="flex justify-between text-14pxr">
              <Link
                className="grow bg-theone-color7 p-15pxr flex items-center"
                href={"tel:07082872340"}
              >
                <div>
                  <PhoneIcon className="w-14pxr h-14pxr stroke-2 stroke-black" />
                </div>
                <div className="grow text-center">전화상담</div>
              </Link>
              <Link
                href={"/tuition-fees"}
                className="grow bg-theone-color8 p-15pxr flex items-center"
              >
                <div>
                  <ChatBubbleOvalLeftEllipsisIcon className="w-15pxr h-15pxr stroke-2 stroke-black" />
                </div>
                <div className="grow text-center">수강료조회</div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
