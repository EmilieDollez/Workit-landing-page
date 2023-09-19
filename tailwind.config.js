/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      /* Fonts */

      fontFamily: {
        Fraunces: ["fraunces", "semi_bold"],
        Manrope: ["manrope", "regular"],
      },

      /* Colors */

      colors: {
        /* PRIMARY */
        primary_dark: "#24053E",
        primary_light: "#44FFA1",

        /* TEXT */
        textColor: "#584D62",

        /* SECONDARY */
        secondary_light: "#FCF8FF",

        /* BASE */
        white: "#FFFFFF",
      },

      /* Font Sizes */

      fontSize: {
        heading_L: "5rem" /* 80px */,
        heading_M: "3.125rem" /* 50px */,
        heading_S: "2rem" /* 32px */,
      },

      /* Spacing */

      lineHeight: {
        heading_L: "5rem" /* 80px */,
        heading_M: "3.125rem" /* 50px */,
        heading_S: "2.5rem" /* 40px */,
        heading_XS: "2rem" /* 32px */,
      },

      /* Background image */

      backgroundImage: {
        "dark_wave_mobile": "url('./assets/images/dark_wave_mobile.svg')",
        "light_wave_mobile": "url('./assets/images/light_wave_mobile.svg')",
      },
    },
  },
  plugins: [],
};