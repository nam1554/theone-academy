import MenuBox from "@components/MenuBox";
import TitleBox from "@components/TitleBox";
import { MENU_CATEGORY, NAVIGATION } from "@constants/constants";

interface AcademyCategoryLayout {
  children: React.ReactNode;
}

export default function AcademyCategoryLayout({
  children,
}: AcademyCategoryLayout) {
  const menus = NAVIGATION.filter(
    (category) => category.name === MENU_CATEGORY.아카데미
  )[0].child;
  return (
    <>
      <section>
        <TitleBox
          title="ACADEMY"
          subTitle="아 카 데 미"
          backgroundImageUrl="/images/category/academy.jpeg"
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
