import Header from "@containers/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Footer from "@containers/Footer";
import { ThemeProvider } from "@components/MaterialTailwind";
import { NAVIGATION } from "@constants/constants";
import { Analytics } from "@vercel/analytics/react";
import CustomTheme from "@components/MaterialTailwind/CustomTheme";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "더원바리스타제과제빵학원",
  description:
    "더원바리스타제과제빵학원 평택점은 메뉴얼화된 수업이 아닌 수강생이 원하는 맞춤형 교육 제공을 목적으로 합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <ThemeProvider value={CustomTheme}>
          <Header navigation={NAVIGATION} />
          {children}
          <Footer navigation={NAVIGATION} />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
