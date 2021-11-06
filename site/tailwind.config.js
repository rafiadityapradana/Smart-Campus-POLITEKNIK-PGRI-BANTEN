module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    cursor: {
      pointer: "pointer",
    },
    extend: {
      colors: { cayn: "#3EDBF0", sky: "#96BAFF" },
      backgroundImage: (theme) => ({
        human: "url('/human.png')",
        bgb: "url('/bgb.png')",
        leftimg: "url('/3d.png')",
        roket: "url('/roket.png')",
        hero: "url('/hero.jpg')",
        heropmb: "url('/heropmb.jpg')",
        heroreg: "url('/heroreg.jpg')",
        poltek: "url('/poltek.png')",
        footer: "url('/footer.png')",
        round: "url('/round.jpg')",
      }),
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {},
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      cayn: "#3EDBF0",
      sky: "#96BAFF",
      smoke: "#FFFFFF",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
    }),
  },
  variants: {
    extend: {},
    animation: ["responsive", "motion-safe", "motion-reduce", "hover"],
  },
  plugins: [],
};
//39a9cb
//1cc5dc
