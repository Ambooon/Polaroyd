/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myNeutral: {
          // Polaroid Picture Frame BG
          1: "#ECECEC",
          // Text overlays
          2: "#333333",
          // hover state
          3: "#A9A9A9",
          // Text color
          4: "#555555",
        },
        // Important actions upload, share
        myRed: "#FF6347",
        // Buttons, icons and interactive
        myYellow: "#FFD700",
        

        // Dark Theme
        myNeutralDark: {
          1: "#1E1E1E",
          2: "#212121",
          3: "#2C2C2C",
          4: "#424242",
          5: "#CCCCCC",
        },
        myRedDark: "#FF6347", 
        myYellowDark: "#FFD700", 
      }
    },
  },
  plugins: [],
}

