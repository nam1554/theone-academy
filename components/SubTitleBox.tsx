import { classNames } from "@/utils/utils";
import Image from "next/image";
import { ReactElement } from "react";

interface SubTitleBoxProps {
  title: string;
  content: string | ReactElement;
  backgroundImageUrl: string;
  titleClassName?: string;
}

const SubTitleBox = ({
  title,
  content,
  backgroundImageUrl,
  titleClassName = "",
}: SubTitleBoxProps) => {
  return (
    <div className="relative">
      <div className="absolute w-full h-full flex flex-col justify-center items-center z-[2]">
        <h2
          className={classNames(
            "font-medium text-27pxr md:text-45pxr",
            titleClassName
          )}
        >
          {title}
        </h2>
        <div className="text-white text-13pxr text-center font-normal md:text-20pxr">
          {content}
        </div>
      </div>
      <div className="relative h-56 md:h-96">
        <Image
          src={backgroundImageUrl}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          alt={`${title} 서브타이틀 영역 이미지`}
        />
        <Image
          className="absolute w-full h-full top-0 opacity-70"
          src={"/images/background_overlay_img.png"}
          fill
          sizes="100vw"
          style={{
            objectFit: "fill",
          }}
          alt={`${title} 서브타이틀 영역 overlay image`}
        />
      </div>
    </div>
  );
};

export default SubTitleBox;
