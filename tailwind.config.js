const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        'primary': withOpacity("--orange"),
      },
      // create custom fonts here
      fontFamily: {
        mono: ["'Kumbh Sans'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--text-fill"),
        muted: withOpacity("--text-muted"),
        'muted-50': withOpacity("--grayish-blue"),
        inverted: withOpacity("--text-inverted"),
        primary: withOpacity("--text-primary"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        muted: withOpacity("--bg-muted"),
        primary: withOpacity("--bg-primary"),
        "primary-50": withOpacity("--bg-primary-50"),
      },
      decorationColor: {
        'muted-50': withOpacity("--grayish-blue"),
      },
      borderColor: {
        danger: withOpacity("--border-danger"),
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen 2xl": {
            maxWidth: "1440px",
          },
        },
      });
    }),
  ],
};
