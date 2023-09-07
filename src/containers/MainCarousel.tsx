"use client";

import Slider, { CustomArrowProps, Settings } from "react-slick";
import type { MainCarouselProps } from "@/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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

const MainCarousel = ({ children }: MainCarouselProps) => {
  const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default MainCarousel;
