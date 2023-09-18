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
          states: {
            close: {
              label: {
                fontSize: "text-16pxr",
              },
            },
            open: {
              label: {
                fontSize: "text-16pxr",
              },
            },
            withValue: {
              label: {
                fontSize: "text-16pxr",
              },
            },
          },
        },
      },
    },
  },
};

export default CustomTheme;
