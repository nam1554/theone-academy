import { CheckIcon } from "@heroicons/react/24/outline";

interface TextWithCheckIconProps {
  text: string;
}

const TextWithCheckIcon = ({ text }: TextWithCheckIconProps) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="flex items-center justify-center bg-theone-color5 rounded-sm w-12pxr h-12pxr md:w-14pxr md:h-14pxr">
        <CheckIcon className="w-12pxr stroke-white stroke-[2]" />
      </span>
      <span className="flex items-center text-12pxr md:text-14pxr lg:text-17pxr">
        {text}
      </span>
    </div>
  );
};

export default TextWithCheckIcon;
