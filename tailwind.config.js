/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "profile-bubble": "animate-profile 2s ease-in-out infinite", // Corrected animation name
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        "animate-profile": {
          "0%": {
            borderRadius: "60% 40% 30% 70% 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% 50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% 60% 30% 70% 40%",
          },
        },
      },
    },
  },
  plugins: [],
};

// animate_profile: {
//   // '0%' : {
//   //   border-radius: 60% 40% 30% 70% 60% 30% 70% 40%;
//   // }
//   // 50% {
//   //   border-radius: 30% 60% 70% 40% 50% 60% 30% 60%;
//   // }
//   // 100% {
//   //   border-radius: 60% 40% 30% 70% 60% 30% 70% 40%;
//   // }
// },
