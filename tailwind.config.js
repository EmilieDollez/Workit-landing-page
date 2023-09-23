/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lt': '1024px',
      'lg': '1440px', // => @media (min-width: 1440px) { ... }
    },
    extend: {
      /* Fonts */

      fontFamily: {
        Fraunces_144pt: ["fraunces_144pt", "bold", "semi_bold", "regular"],
        Manrope: ["manrope"],
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

      /* Background image */

      backgroundImage: {
        "dark_wave_mobile": "url('./assets/images/dark_wave_mobile.svg')",
        "light_wave_mobile": "url('./assets/images/light_wave_mobile.svg')",
        "dark_wave": "url('./assets/images/dark_wave.svg')",
        "light_wave": "url('./assets/images/light_wave.svg')",
        "dark_wave_desktop": "url('./assets/images/dark_wave_desktop.svg')",
        "light_wave_desktop": "url('./assets/images/light_wave_desktop.svg')",
      },

      /* Media Query */

      screens: {
        'lt': '1024px',
        // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [],
}
}
