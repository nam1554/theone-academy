import { SelectStylesType } from "@material-tailwind/react";

interface CustomThemeType {
  select: SelectStylesType;
}

const CustomTheme: CustomThemeType = {
  select: {
    styles: {
      base: {},
      variants: {
        outlined: {},
        standard: {},
        static: {
          colors: {
            label: {
              gray: {
                close: {
                  color: "text-gray-600",
                },
                withValue: {
                  color: "text-gray-600",
                },
              },
            },
          },
        },
      },
    },
  },
};

export default CustomTheme;
