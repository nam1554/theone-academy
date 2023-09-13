"use client";

import Slider, { CustomArrowProps, Settings } from "react-slick";
import type { children } from "@/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Children, useEffect, useRef, useState } from "react";

const PrevArrow = ({ className, style, onClick }: CustomArrowProps) => (
  <div
    className="absolute top-1/2 left-10pxr z-[1] cursor-pointer"
    onClick={onClick}
  >
    <ChevronLeftIcon
      className="absolute -top-12pxr w-25pxr h-25pxr stroke-white stroke-[3]
    lg:w-30pxr lg:h-30pxr"
    />
  </div>
);

const NextArrow = ({ className, style, onClick }: CustomArrowProps) => (
  <div
    className="absolute top-1/2 right-35pxr cursor-pointer"
    onClick={onClick}
  >
    <ChevronRightIcon
      className="absolute -top-12pxr w-25pxr h-25pxr stroke-white stroke-[3]
    lg:w-30pxr lg:h-30pxr"
    />
  </div>
);

export interface InteriorCarouselProps {
  children: children;
}

const InteriorCarousel = ({ children }: InteriorCarouselProps) => {
  const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    lazyLoad: "anticipated",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const subSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    lazyLoad: "anticipated",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  const [mainSlider, setMainSlider] = useState<Slider | null>(null);
  const [subSlider, setSubSlider] = useState<Slider | null>(null);
  const sliderRef = useRef<Slider>(null);
  const subSliderRef = useRef<Slider>(null);

  useEffect(() => {
    setMainSlider(sliderRef.current);
    setSubSlider(subSliderRef.current);
  }, []);

  return (
    <>
      <Slider {...settings} ref={sliderRef} asNavFor={subSlider || undefined}>
        {Children.map(children, (child, index) => (
          <div className="relative h-56 md:h-[30rem] lg:h-[35rem] 3xl:h-[41rem] cursor-grab">
            {child}
          </div>
        ))}
      </Slider>
      <div className="mt-5pxr">
        <Slider
          {...subSettings}
          ref={subSliderRef}
          asNavFor={mainSlider || undefined}
        >
          {Children.map(children, (child, index) => (
            <div className="relative h-14 md:h-28 lg:h-40 cursor-pointer">
              {child}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default InteriorCarousel;
