export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(19, 0, 122, 0.658), rgba(29, 0, 95, 0.658))',
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1060px",
        xl: "1200px"
      },
    },
  },
  plugins: [],
}