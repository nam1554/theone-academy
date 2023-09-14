import type { UseFormRegisterReturn } from "react-hook-form";
import { Radio } from "@components/MaterialTailwind";
import { classNames } from "@utils/utils";

interface RadioGroupProps {
  name: string;
  label: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  placeholder?: string;
  labels?: string[];
  values?: string[];
  className?: string;
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-full w-full scale-[2.5]"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default function RadioGroup({
  name,
  label,
  register,
  required = false,
  labels = [],
  values = [],
  className = "",
}: RadioGroupProps) {
  return (
    <div className={classNames("flex flex-col", className)}>
      <label htmlFor={name} className="text-sm text-gray-700">
        {label}
      </label>
      {labels.length > 0 &&
      values.length > 0 &&
      labels.length === values.length ? (
        <div className="flex gap-3 mt-10pxr">
          {labels.map((item, index) => (
            <Radio
              key={index}
              id={`${name}_${index}`}
              required={required}
              {...register}
              label={item}
              ripple={false}
              icon={<Icon />}
              labelProps={{
                className: "text-sm -mt-2pxr pl-8pxr",
              }}
              containerProps={{
                className: "p-0",
              }}
              className="p-0 transition-all hover:before:opacity-0 w-4 h-4 before:w-4 before:h-4"
              crossOrigin=""
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
