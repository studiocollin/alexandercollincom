module.exports = {
        content: [
          './src/app/**/*.{js,ts,jsx,tsx}',
          './src/components/**/*.{js,ts,jsx,tsx}', // if you're using a components folder
        ],
        theme: {
          extend: {
            fontFamily: {
                sans: ['"neue-haas-unica"', 'sans-serif'], // tailwind class: font-sans
            },
          },
        },
        plugins: [],
      };