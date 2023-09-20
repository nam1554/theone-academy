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
    (category) => category.name === MENU_CATEGORY.상담문의
  )[0].child;
  return (
    <>
      <section>
        <TitleBox
          title="CONTACT US"
          subTitle="온 라 인 문 의"
          backgroundImageUrl="/images/category/contact.jpeg"
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
