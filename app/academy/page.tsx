import MenuBox from "@/components/MenuBox";
import TitleBox from "@/components/TitleBox";
import { navigation } from "@/constants/constants";

export default function Page() {
  const menus = navigation.filter((menu) => menu.name === "아카데미")[0].child;
  return (
    <main>
      <section>
        <TitleBox
          title="ACADEMY"
          subTitle="아 카 데 미"
          backgroundImageUrl="/images/academy/introuduce_menu_img_0.jpeg"
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
      <section>아카데미소개</section>
    </main>
  );
}
