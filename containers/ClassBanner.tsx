"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider, { Settings } from "react-slick";

const bannerGroups = [
  [
    {
      title: "바리스타 자격증",
      imgUrl: "/images/main/class_banner_img_0.jpeg",
      href: "/barista",
    },
    {
      title: "케이크디자인",
      imgUrl: "/images/main/class_banner_img_1.jpeg",
      href: "/cake-design",
    },
  ],
  [
    {
      title: "제과제빵 자격증",
      imgUrl: "/images/main/class_banner_img_2.jpeg",
      href: "/baking",
    },
    {
      title: "센서리브루잉",
      imgUrl: "/images/main/class_banner_img_3.jpeg",
      href: "/sensory-brewing",
    },
  ],
  [
    {
      title: "카페디저트",
      imgUrl: "/images/main/class_banner_img_4.jpeg",
      href: "/dessert",
    },
    {
      title: "로스팅",
      imgUrl: "/images/main/class_banner_img_5.jpeg",
      href: "/roasting",
    },
  ],
  [
    {
      title: "블랑제리",
      imgUrl: "/images/main/class_banner_img_6.jpeg",
      href: "/boulangerie",
    },
    {
      title: "라떼아트",
      imgUrl: "/images/main/class_banner_img_7.jpeg",
      href: "/latte-art",
    },
  ],
];

const ClassBanner = () => {
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    lazyLoad: "anticipated",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderRef = useRef<Slider>(null);
  const previous = () => sliderRef.current?.slickPrev();
  const next = () => sliderRef.current?.slickNext();

  return (
    <div className="max-w-7xl mx-auto my-0 px-15pxr py-0">
      <div className="flex justify-between mb-15pxr">
        <h2 className="text-20pxr font-medium">수강알아보기</h2>
        <div className="flex space-x-3">
          <button className="rounded-full lg:hidden" onClick={previous}>
            <ArrowLeftIcon className="w-24pxr h-24pxr" />
          </button>
          <button className="rounded-full lg:hidden" onClick={next}>
            <ArrowRightIcon className="w-24pxr h-24pxr" />
          </button>
          <button className="rounded-full">
            <Link href={"/barista"}>
              <Bars3Icon className="w-24pxr h-24pxr" />
            </Link>
          </button>
        </div>
      </div>
      <div>
        <Slider {...settings} ref={sliderRef}>
          {bannerGroups.map((bannerGroup, bannerGroupIndex) => {
            return (
              <ul
                key={bannerGroupIndex}
                className="flex flex-col px-2pxr space-y-1"
              >
                {bannerGroup.map((banner) => (
                  <li key={banner.title}>
                    <Link href={banner.href}>
                      <div className="relative">
                        <div className="absolute z-[1] flex justify-center items-center w-full h-full hover:bg-white hover:opacity-80 transition duration-300 group">
                          <div className="text-white text-18pxr font-semibold transition duration-300 group-hover:text-theone-color1 md:text-22pxr lg:text-28pxr">
                            {banner.title}
                          </div>
                        </div>
                        <div className="relative h-56 md:h-64">
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
                    </Link>
                  </li>
                ))}
              </ul>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ClassBanner;
