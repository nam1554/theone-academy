import Header from "@/containers/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Footer from "@/containers/Footer";
import type { Navigation } from "@/types";
import { ThemeProvider } from "@components/material-tailwind";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "더원바리스타제과제빵학원",
  description:
    "더원바리스타제과제빵학원 평택점은 메뉴얼화된 수업이 아닌 수강생이 원하는 맞춤형 교육 제공을 목적으로 합니다.",
};

const navigation: Navigation = [
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <ThemeProvider>
          <Header navigation={navigation} />
          {children}
          <Footer navigation={navigation} />
        </ThemeProvider>
      </body>
    </html>
  );
}
