import MenuBox from "@components/MenuBox";
import TitleBox from "@components/TitleBox";
import { MENU_CATEGORY, NAVIGATION } from "@constants/constants";

interface ConsultingCategoryLayoutProps {
  children: React.ReactNode;
}

export default function ConsultingCategoryLayout({
  children,
}: ConsultingCategoryLayoutProps) {
  const menus = NAVIGATION.filter(
    (category) => category.name === MENU_CATEGORY.카페컨설팅
  )[0].child;
  return (
    <>
      <section>
        <TitleBox
          title="CAFE CONSULTING"
          subTitle="카 페 컨 설 팅"
          backgroundImageUrl="/images/category/consulting.jpeg"
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
