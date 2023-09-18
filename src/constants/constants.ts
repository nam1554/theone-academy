import { Navigation } from "@/types";

export const MENU_CATEGORY = {
  아카데미: "아카데미",
  바리스타: "바리스타",
  베이킹: "베이킹",
  카페컨설팅: "카페컨설팅",
  커뮤니티: "커뮤니티",
  상담문의: "상담문의",
};

export const MENU_NAME = {
  아카데미소개: "아카데미 소개",
  위치조회시설소개: "위치조회 & 시설소개",
  사업제휴제안: "사업제휴 제안",
  바리스타자격증: "바리스타 자격증",
  센서리브루잉: "센서리&브루잉",
  로스팅: "로스팅",
  라떼아트: "라떼아트",
  카페디저트: "카페 디저트",
  제과제빵자격증: "제과제빵 자격증",
  케이크디자인: "케이크디자인",
  블랑제리: "블랑제리",
  원데이클래스: "원데이클래스",
  카페컨설팅: "카페컨설팅",
  공지사항: "공지사항",
  더원에바란다: "더원에바란다",
  상담문의: "상담문의",
};

export const NAVIGATION: Navigation = [
  {
    name: MENU_CATEGORY.아카데미,
    en_name: "ACADEMY",
    href: "/academy",
    child: [
      { name: MENU_NAME.아카데미소개, href: "/academy" },
      { name: MENU_NAME.위치조회시설소개, href: "/location" },
      { name: MENU_NAME.사업제휴제안, href: "/partnership" },
    ],
  },
  {
    name: MENU_CATEGORY.바리스타,
    en_name: "BARISTA",
    href: "/barista",
    child: [
      { name: MENU_NAME.바리스타자격증, href: "/barista" },
      { name: MENU_NAME.센서리브루잉, href: "/sensory-brewing" },
      { name: MENU_NAME.로스팅, href: "/roasting" },
      { name: MENU_NAME.라떼아트, href: "/latte-art" },
    ],
  },
  {
    name: MENU_CATEGORY.베이킹,
    en_name: "BAKING",
    href: "/baking",
    child: [
      { name: MENU_NAME.카페디저트, href: "/dessert" },
      { name: MENU_NAME.제과제빵자격증, href: "/baking" },
      { name: MENU_NAME.케이크디자인, href: "/cake-design" },
      { name: MENU_NAME.블랑제리, href: "/boulangerie" },
      { name: MENU_NAME.원데이클래스, href: "/oneday-class" },
    ],
  },
  {
    name: MENU_CATEGORY.카페컨설팅,
    en_name: "CAFE CONSULTING",
    href: "/consulting",
    child: [{ name: MENU_NAME.카페컨설팅, href: "/consulting" }],
  },
  {
    name: MENU_CATEGORY.커뮤니티,
    en_name: "COMMUNITY",
    href: "/community",
    child: [
      { name: MENU_NAME.공지사항, href: "/notice" },
      { name: MENU_NAME.더원에바란다, href: "/propose" },
    ],
  },
  {
    name: MENU_CATEGORY.상담문의,
    en_name: "CONTACT US",
    href: "/contact",
    child: [{ name: MENU_NAME.상담문의, href: "/contact" }],
  },
];
