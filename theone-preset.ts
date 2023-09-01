const pxToRem = (px: number, base = 16) => `${px / base}rem`;
const pxrs = new Array(101).fill("").reduce((prev, curr, index) => {
  const px = index;
  prev[`${px}pxr`] = pxToRem(px);
  return prev;
}, {});

module.exports = {
  theme: {
    extend: {
      screens: {
        tablet: "640px", // => @media (min-width: 640px) { ... }
        laptop: "1024px", // => @media (min-width: 1024px) { ... }
        desktop: "1280px", // => @media (min-width: 1280px) { ... }
        "3xl": "1500px",
      },
      spacing: {
        ...pxrs,
      },
      fontSize: {
        ...pxrs,
      },
      colors: {
        "theone-color0": "rgb(17, 17, 17)",
        "theone-color1": "rgb(0, 112, 74)",
        "theone-color2": "rgb(24, 24, 24)",
        "theone-color3": "rgb(46, 46, 46)",
        "theone-color4": "rgb(202, 202, 202)",
        "theone-color5": "#023c28",
        "theone-color6": "#00704a",
        "theone-color7": "#fe9329",
        "theone-color8": "#ECD554",
        "theone-color9": "#C59213",
      },
      backgroundColor: {
        "theone-color0": "rgb(17, 17, 17)",
        "theone-color1": "rgb(0, 112, 74)",
        "theone-color2": "rgb(24, 24, 24)",
        "theone-color3": "rgb(46, 46, 46)",
        "theone-color4": "rgb(202, 202, 202)",
        "theone-color5": "#023c28",
        "theone-color6": "#00704a",
        "theone-color7": "#fe9329",
        "theone-color8": "#ECD554",
        "theone-color9": "#C59213",
      },
      transitionProperty: {
        height: "height",
        width: "width",
        spacing: "margin, padding",
      },
    },
  },
};
