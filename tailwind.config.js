/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  // ...

  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "mobile-max-media": { max: "470px" },
    },
    extend: {
      colors: {
        "regal-green": "#24445B",
        "regal-green-one": "#476D73",
        "text-color-wt": "#E4E4E4",
        "transparent-color": "#CCCCCC",
        "transparent-color-one": "#C4C4C4",
        "background-color-button": "#27485D",
        "text-color-icon": "#6E9195",

        //colors for dark class
        "background-color-dark": "#1F2937",
        "backgound-color-button-dark": "#6B7280",
      },
    },
  },
  plugins: [],
};

//
