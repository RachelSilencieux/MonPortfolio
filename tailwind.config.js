/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // si tu utilises le dossier app/
    "./pages/**/*.{js,ts,jsx,tsx}", // si tu as encore pages/
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textDark: "#463B3B", // pour h1
        textBody: "#333333", // pour paragraphes
        sectionBg: "#F0EADD", // fond de la section progress
        borderLight: "#BEB3A1", // bordure
        buttonBg: "#A19684", 
        buttonHover: "#BEB3A1",
        buttonHover2: "#AAA090",
        // PARTIE FOOTER
        footerBg: "#000000",
        footerText: "#FFFFFF",
        footerIcon: "#BFBFBF",
      }
    },
  },
  plugins: [],
};
