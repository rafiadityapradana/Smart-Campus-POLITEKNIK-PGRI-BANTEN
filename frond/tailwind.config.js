module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    cursor: {
      pointer: "pointer",
    },
    //
    extend: {
      backgroundImage: (theme) => ({
        login: "url('/5315093.jpg')",
        login2: "url('/SL_092320_35480_11.jpg')",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        bgdas: "#F5F7FF",
        bghsidebar: "#4B49AC",
        indigocover: "#7C83FD",
      }),
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {},
    },
  },
  variants: {
    extend: {},
    animation: ["responsive", "motion-safe", "motion-reduce", "hover"],
  },
  plugins: [],
};
