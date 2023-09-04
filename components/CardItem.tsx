import { classNames } from "@/utils/utils";
import Image from "next/image";
import { ReactElement } from "react";

export interface CardItemProps {
  imgUrl?: string;
  labelText?: string;
  labelBgClassName?: string;
  content?: string | ReactElement | ReactElement[];
}

const CardItem = ({
  imgUrl,
  labelText,
  labelBgClassName,
  content,
}: CardItemProps) => {
  return (
    <div className="p-5pxr">
      <div className="relative h-32 md:h-52">
        {imgUrl ? (
          <Image
            className="rounded-t"
            src={imgUrl}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            alt="중간 이미지"
          />
        ) : (
          <div className="bg-gray-600 h-full rounded-t" />
        )}
      </div>
      <div className="relative pt-32pxr pl-5pxr pb-4pxr rounded-b bg-white h-70pxr md:h-85pxr">
        <div className="absolute top-0 left-0">
          <div
            className={classNames(
              "text-11pxr text-white px-6pxr py-5pxr flex items-center md:text-13pxr",
              labelBgClassName || "bg-theone-color5"
            )}
          >
            {labelText}
          </div>
        </div>
        <div className="text-11pxr md:text-15pxr">{content}</div>
      </div>
    </div>
  );
};

export default CardItem;
