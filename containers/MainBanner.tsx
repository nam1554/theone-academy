import MainCarousel from "./MainCarousel";
import Link from "next/link";
import Image from "next/image";

const mobileImages = [
  {
    name: "main_banner_mobile_0",
    src: "/images/main/main_banner_mobile_0.png",
    href: "/notice",
  },
  {
    name: "main_banner_mobile_1",
    src: "/images/main/main_banner_mobile_1.jpeg",
    href: "/contact",
  },
];

const images = [
  {
    name: "main_banner_0",
    src: "/images/main/main_banner_0.png",
    href: "/notice",
  },
  {
    name: "main_banner_1",
    src: "/images/main/main_banner_1.jpeg",
    href: "/contact",
  },
];

const MainBanner = () => {
  return (
    <>
      <div className="lg:hidden">
        <MainCarousel>
          {mobileImages.map((image, imageIndex) => (
            <Link key={imageIndex} href={image.href} className="!flex">
              <Image
                src={image.src}
                width={640}
                height={512}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt={image.name}
              />
            </Link>
          ))}
        </MainCarousel>
      </div>
      <div className="hidden lg:block">
        <MainCarousel>
          {images.map((image, imageIndex) => (
            <Link key={imageIndex} href={image.href} className="!flex">
              <Image
                src={image.src}
                width={1440}
                height={465}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt={image.name}
              />
            </Link>
          ))}
        </MainCarousel>
      </div>
    </>
  );
};

export default MainBanner;
