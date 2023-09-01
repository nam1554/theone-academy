import InteriorCarousel from "./InteriorCarousel";
import Image from "next/image";

const images = [
  { name: "interior_img_0", src: "/images/location/interior_img_0.jpeg" },
  { name: "interior_img_1", src: "/images/location/interior_img_1.jpeg" },
  { name: "interior_img_2", src: "/images/location/interior_img_2.jpeg" },
  { name: "interior_img_3", src: "/images/location/interior_img_3.jpeg" },
  { name: "interior_img_4", src: "/images/location/interior_img_4.jpeg" },
  { name: "interior_img_5", src: "/images/location/interior_img_5.jpeg" },
  { name: "interior_img_6", src: "/images/location/interior_img_6.jpeg" },
  { name: "interior_img_7", src: "/images/location/interior_img_7.jpeg" },
  { name: "interior_img_8", src: "/images/location/interior_img_8.jpeg" },
  { name: "interior_img_9", src: "/images/location/interior_img_9.jpeg" },
  { name: "interior_img_10", src: "/images/location/interior_img_10.jpg" },
  { name: "interior_img_11", src: "/images/location/interior_img_11.jpg" },
  { name: "interior_img_12", src: "/images/location/interior_img_12.jpg" },
  { name: "interior_img_13", src: "/images/location/interior_img_13.jpg" },
  { name: "interior_img_14", src: "/images/location/interior_img_14.jpg" },
  { name: "interior_img_15", src: "/images/location/interior_img_15.jpg" },
];

const InteriorBanner = () => {
  return (
    <div className="relative">
      <InteriorCarousel>
        {images.map((image, imageIndex) => (
          <Image
            className="px-5pxr"
            key={imageIndex}
            src={image.src}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            alt={image.name}
          />
        ))}
      </InteriorCarousel>
    </div>
  );
};

export default InteriorBanner;
