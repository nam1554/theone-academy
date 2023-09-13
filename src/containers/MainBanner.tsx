"use client";

import MainCarousel from "./MainCarousel";
import Link from "next/link";
import Image from "next/image";
import main_banner_mobile_0 from "@public/images/main/main_banner_mobile_0.png";
import main_banner_mobile_1 from "@public/images/main/main_banner_mobile_1.jpeg";
import main_banner_0 from "@public/images/main/main_banner_0.png";
import main_banner_1 from "@public/images/main/main_banner_1.jpeg";
import { MouseEventHandler, useCallback, useState } from "react";

const mobileImages = [
  {
    name: "main_banner_mobile_0",
    src: main_banner_mobile_0,
    href: "/notice",
  },
  {
    name: "main_banner_mobile_1",
    src: main_banner_mobile_1,
    href: "/contact",
  },
];

const images = [
  {
    name: "main_banner_0",
    src: main_banner_0,
    href: "/notice",
  },
  {
    name: "main_banner_1",
    src: main_banner_1,
    href: "/contact",
  },
];

const MainBanner = () => {
  const [dragging, setDragging] = useState(false);
  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const onClickBanner: MouseEventHandler = (event) => {
    if (dragging) {
      event.preventDefault();
    }
  };

  return (
    <>
      <div className="lg:hidden">
        <MainCarousel>
          {mobileImages.map((image, imageIndex) => (
            <Link key={imageIndex} href={image.href} className="!flex">
              <Image src={image.src} alt={image.name} />
            </Link>
          ))}
        </MainCarousel>
      </div>
      <div className="hidden lg:block">
        <MainCarousel
          settings={{
            beforeChange: handleBeforeChange,
            afterChange: handleAfterChange,
          }}
        >
          {images.map((image, imageIndex) => (
            <Link
              key={imageIndex}
              href={image.href}
              className="!flex"
              onClick={onClickBanner}
            >
              <Image src={image.src} alt={image.name} priority />
            </Link>
          ))}
        </MainCarousel>
      </div>
    </>
  );
};

export default MainBanner;
