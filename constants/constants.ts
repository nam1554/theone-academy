import { Navigation } from "@/types";

export const navigation: Navigation = [
  {
    name: "아카데미",
    en_name: "ACADEMY",
    href: "/academy",
    child: [
      { name: "아카데미 소개", href: "/academy" },
      { name: "위치조회 & 시설소개", href: "/location" },
      { name: "사업제휴 제안", href: "/partnership" },
    ],
  },
  {
    name: "바리스타",
    en_name: "BARISTA",
    href: "/barista",
    child: [
      { name: "바리스타 자격증", href: "/barista" },
      { name: "센서리&브루잉", href: "/sensory-brewing" },
      { name: "로스팅", href: "/roasting" },
      { name: "라떼아트", href: "/latte-art" },
    ],
  },
  {
    name: "베이킹",
    en_name: "BAKING",
    href: "/baking",
    child: [
      { name: "카페 디저트", href: "/dessert" },
      { name: "제과제빵 자격증", href: "/baking" },
      { name: "케이크디자인", href: "/cake-design" },
      { name: "블랑제리", href: "/boulangerie" },
      { name: "원데이클래스", href: "/oneday-class" },
    ],
  },
  {
    name: "카페컨설팅",
    en_name: "CAFE CONSULTING",
    href: "/consulting",
    child: [{ name: "카페컨설팅", href: "/consulting" }],
  },
  {
    name: "커뮤니티",
    en_name: "COMMUNITY",
    href: "/community",
    child: [
      { name: "공지사항", href: "/notice" },
      { name: "더원에바란다", href: "/suggestions" },
    ],
  },
  {
    name: "상담문의",
    en_name: "CONTACT US",
    href: "/contact",
    child: [{ name: "상담문의", href: "/contact" }],
  },
];
