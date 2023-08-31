import Link from "next/link";
import type { MenuProps, MagaMenuProps } from "@/types";

const MegaMenu = ({ navigation }: MagaMenuProps) => {
  return (
    <div className="absolute inset-x-0 top-28 bg-theone-color3">
      <ul className="flex justify-center gap-x-24 pl-56 2xl:gap-x-28 2xl:pl-64 transition-all duration-700 py-0 group-hover:py-8">
        {navigation.map((menu, menuIndex) => {
          return (
            <li
              key={menuIndex}
              className="text-center flex flex-col space-y-4 transition-all duration-700 h-0 group-hover:h-52"
            >
              <div className="cursor-default transition-all duration-700 text-white text-lg invisible group-hover:visible opacity-0 group-hover:opacity-100">
                {menu.name}
              </div>
              <ul className="flex flex-col space-y-5pxr transition-all duration-700 invisible group-hover:visible opacity-0 group-hover:opacity-100">
                {menu.child?.map((item, childMenuIndex) => (
                  <li
                    key={childMenuIndex}
                    className="text-15pxr text-theone-color4 hover:text-theone-color6 cursor-pointer
                    transition-all duration-700 invisible group-hover:visible opacity-0 group-hover:opacity-100 ease-in"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Menu = ({ navigation }: MenuProps) => {
  return (
    <>
      {navigation.map((menu, menuIndex) => {
        return (
          <div
            key={menuIndex}
            className="hover:text-theone-color1 cursor-default"
          >
            {menu.en_name}
          </div>
        );
      })}
      <MegaMenu navigation={navigation} />
    </>
  );
};

export default Menu;
