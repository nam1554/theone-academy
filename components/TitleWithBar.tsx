interface TitleWithBarProps {
  text: string;
}

const TitleWithBar = ({ text }: TitleWithBarProps) => {
  return (
    <div className="py-10pxr">
      <div className="py-15pxr">
        <span
          className="flex justify-center items-center w-full mx-auto
          before:block before:border-t before:content-[''] before:border-black before:grow
          after:block after:border-t after:content-[''] after:border-black after:grow"
        >
          <h1 className="text-24pxr font-medium mx-14pxr md:text-40pxr">
            {text}
          </h1>
        </span>
      </div>
    </div>
  );
};

export default TitleWithBar;
