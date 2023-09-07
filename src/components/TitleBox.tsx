import Image from "next/image";
import { Poppins } from "next/font/google";
import { classNames } from "@utils/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

interface TitleBoxProps {
  title: string;
  subTitle: string;
  backgroundImageUrl: string;
}

const TitleBox = ({ title, subTitle, backgroundImageUrl }: TitleBoxProps) => {
  return (
    <div className={classNames(poppins.className, "relative font-bold")}>
      <div className="absolute w-full h-full flex flex-col justify-center items-center z-[2]">
        <div className="text-white text-13pxr font-medium md:text-25pxr">
          {subTitle}
        </div>
        <div className="text-white text-30pxr leading-7 font-medium md:text-50pxr md:leading-none">
          {title}
        </div>
      </div>
      <div className="relative h-40 md:h-80">
        <Image
          src={backgroundImageUrl}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          alt={`${title} 이미지`}
        />
        <Image
          className="absolute w-full h-full top-0 opacity-40"
          src={"/images/background_overlay_img.png"}
          fill
          sizes="100vw"
          style={{
            objectFit: "fill",
          }}
          alt="overlay image"
        />
      </div>
    </div>
  );
};

export default TitleBox;
