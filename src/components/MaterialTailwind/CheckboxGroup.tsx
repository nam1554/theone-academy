import type { UseFormRegisterReturn } from "react-hook-form";
import { classNames } from "@utils/utils";
import Checkbox from "./Checkbox";

interface CheckboxGroupProps {
  name: string;
  label: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  labels?: string[];
  values?: string[];
  className?: string;
}

export default function CheckboxGroup({
  name,
  label,
  register,
  required = false,
  labels = [],
  values = [],
  className = "",
}: CheckboxGroupProps) {
  return (
    <div className={classNames("flex flex-col", className)}>
      <label htmlFor={name} className="text-16pxr text-gray-700">
        {label}
      </label>
      {labels.length > 0 &&
      values.length > 0 &&
      labels.length === values.length ? (
        <div className="flex flex-wrap gap-3 mt-10pxr">
          {labels.map((item, index) => (
            <Checkbox
              key={index}
              register={register}
              required={required}
              name={name}
              label={item}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
