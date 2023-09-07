import MenuBox from "@components/MenuBox";
import TitleBox from "@components/TitleBox";
import { MENU_CATEGORY, NAVIGATION } from "@constants/constants";

interface BakingCategoryLayoutProps {
  children: React.ReactNode;
}

export default function BakingCategoryLayout({
  children,
}: BakingCategoryLayoutProps) {
  const menus = NAVIGATION.filter(
    (category) => category.name === MENU_CATEGORY.베이킹
  )[0].child;
  return (
    <>
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
      {children}
    </>
  );
}
