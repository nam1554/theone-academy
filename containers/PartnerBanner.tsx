"use client";

import { classNames } from "@/utils/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRef } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";

const banners = [
  { title: "스타벅스", imgUrl: "/images/main/partner_logo_starbucks.png" },
  { title: "파리바게트", imgUrl: "/images/main/partner_logo_paris.jpg" },
  { title: "파스쿠치", imgUrl: "/images/main/partner_logo_pascucci.jpg" },
  { title: "던킨", imgUrl: "/images/main/partner_logo_dunkin.jpg" },
  {
    title: "파리크로와상",
    imgUrl: "/images/main/partner_logo_pariscroissang.jpg",
  },
  { title: "woody", imgUrl: "/images/main/partner_logo_woody.jpg" },
  { title: "goodday", imgUrl: "/images/main/partner_logo_goodday.jpg" },
  { title: "profile", imgUrl: "/images/main/partner_logo_profile.jpg" },
];

const PrevArrow = ({ className, style, onClick }: CustomArrowProps) => (
  <div
    className={classNames(className || "", "-left-20pxr")}
    style={style}
    onClick={onClick}
  >
    <ChevronLeftIcon className="absolute top-0 w-20pxr h-20pxr stroke-gray-600" />
  </div>
);

const NextArrow = ({ className, style, onClick }: CustomArrowProps) => (
  <div
    className={classNames(className || "", "-right-20pxr")}
    style={style}
    onClick={onClick}
  >
    <ChevronRightIcon className="absolute top-0 w-20pxr h-20pxr stroke-gray-600" />
  </div>
);

const PartnerBanner = () => {
  const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    lazyLoad: "anticipated",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="max-w-7xl mx-auto mt-20pxr px-15pxr py-0">
      <h2 className="text-20pxr font-medium">파트너십업체(MOU)</h2>
      <div className="mt-15pxr mx-10pxr">
        <Slider {...settings} ref={sliderRef}>
          {banners.map((banner, bannerIndex) => (
            <div key={bannerIndex} className="p-3pxr">
              <div className="relative border border-gray-300 h-20 sm:h-28 md:h-32">
                <Image
                  alt={banner.title}
                  src={banner.imgUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerBanner;
