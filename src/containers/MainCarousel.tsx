"use client";

import Slider, { CustomArrowProps, Settings } from "react-slick";
import type { children } from "@/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export interface MainCarouselProps {
  children: children;
  settings?: Settings;
}

const PrevArrow = ({ className, style, onClick }: CustomArrowProps) => (
  <div className="absolute top-1/2 left-10pxr z-[1]" onClick={onClick}>
    <ChevronLeftIcon
      className="absolute -top-12pxr w-25pxr h-25pxr stroke-white stroke-[3]
    lg:w-30pxr lg:h-30pxr"
    />
  </div>
);

const NextArrow = ({ className, style, onClick }: CustomArrowProps) => (
  <div className="absolute top-1/2 right-35pxr" onClick={onClick}>
    <ChevronRightIcon
      className="absolute -top-12pxr w-25pxr h-25pxr stroke-white stroke-[3]
    lg:w-30pxr lg:h-30pxr"
    />
  </div>
);

const MainCarousel = ({ children, settings = {} }: MainCarouselProps) => {
  const defaultSettings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    ...settings,
  };
  return <Slider {...defaultSettings}>{children}</Slider>;
};

export default MainCarousel;
