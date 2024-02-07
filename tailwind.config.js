/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f9f9ff",
        call:"#4852d5",
        heading:"#0e0e25",
        link : "#dedffa",
        imagescolor:"#f0f2f6",
        iconcolor:"#4851D5",
        serviceColor:"#f3f3ff",
        serviceBorder:"#e8e8f7",
        workborder:"#5a64d9",
        hrline:"#d4d7f7",
        patientcolor:"#5b62d9"
      }
    },
  },
  plugins: [],
}