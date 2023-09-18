import MenuBox from "@components/MenuBox";
import TitleBox from "@components/TitleBox";
import { MENU_CATEGORY, NAVIGATION } from "@constants/constants";

interface CommunityCategoryLayoutProps {
  children: React.ReactNode;
}

export default function CommunityCategoryLayout({
  children,
}: CommunityCategoryLayoutProps) {
  const menus = NAVIGATION.filter(
    (category) => category.name === MENU_CATEGORY.커뮤니티
  )[0].child;
  return (
    <>
      <section>
        <TitleBox
          title="COMMUNITY"
          subTitle="커 뮤 니 티"
          backgroundImageUrl="/images/category/community.jpeg"
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
