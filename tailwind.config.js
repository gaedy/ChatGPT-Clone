/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        ahBackColor: 'hsl(0, 0%, 15%)',
        ahBackColor2: 'hsl(0, 0%, 10%)',
        ahBackColor3: 'hsl(0, 0%, 5%)',
        ahHoverColor: 'hsl(0, 0%, 20%)',
        ahBorderColor: 'hsl(0, 0%, 25%)',

        ahTextColor00: 'hsl(0, 0%, 95%)',
        ahTextColor: 'hsl(0, 0%, 85%)',
        ahTextColor2: 'hsl(0, 0%, 75%)',


      },
     
    }
  },
  plugins: [],
}

