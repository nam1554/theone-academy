import MenuBox from "@components/MenuBox";
import TitleBox from "@components/TitleBox";
import { MENU_CATEGORY, NAVIGATION } from "@constants/constants";

interface BaristaCategoryLayoutProps {
  children: React.ReactNode;
}

export default function BaristaCategoryLayout({
  children,
}: BaristaCategoryLayoutProps) {
  const menus = NAVIGATION.filter(
    (category) => category.name === MENU_CATEGORY.바리스타
  )[0].child;
  return (
    <>
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
      {children}
    </>
  );
}
