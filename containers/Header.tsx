import { classNames } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/public/svgs";
import { Montserrat } from "next/font/google";
import MobileMenu from "@containers/MobileMenu";
import type { HeaderProps } from "@/types";
import Menu from "@containers/Menu";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const Header = ({ navigation }: HeaderProps) => {
  return (
    <header className="bg-white sticky top-0 z-20">
      <nav
        className="mx-auto flex items-center justify-between xl:justify-center xl:gap-x-16"
        aria-label="Global"
      >
        <div className="flex p-2">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">더원바리스타제과제빵학원</span>
            <div className="relative w-40 h-11 xl:w-72 xl:h-24">
              <Image src={Logo} fill priority alt="Logo" />
            </div>
          </Link>
        </div>
        <div className="flex xl:hidden">
          <MobileMenu navigation={navigation} />
        </div>
        <div
          className={classNames(
            montserrat.className,
            "hidden xl:flex xl:gap-x-5 2xl:gap-x-10 3xl:gap-x-16 text-xl font-medium group"
          )}
        >
          <Menu navigation={navigation} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
