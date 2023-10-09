/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors:{
        glass: "rgba(255, 255, 255, 0.25)",
        brown: "rgb(30, 30 , 17);",
        primary:"#16132B",
        secondary:"#3D3C65",
        tartiary:"#FE754D",
        grey:"#B7B7C9"
      },
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
      fontFamily:{
        zcool:['ZCOOL KuaiLe', 'Roboto'],
        Lemon:['Lemon'],
        PalanquinDark:['Palanquin Dark'],
        Lalezar: ['Lalezar']
      }
    },

  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}

