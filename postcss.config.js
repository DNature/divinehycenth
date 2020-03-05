// const purgecss = require("@fullhuman/postcss-purgecss");
// const cssnano = require("cssnano");
module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}"
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }
    ],
    "postcss-preset-env"
  ]
};

// module.exports = {
//   plugins: [
//     require("postcss-import"),
//     require("tailwindcss"),
//     process.env.NODE_ENV === "production" ? require("autoprefixer") : null,
//     process.env.NODE_ENV === "production"
//       ? cssnano({
//           preset: "default"
//         })
//       : null,
//     process.env.NODE_ENV === "production"
//       ? purgecss({
//           content: [
//             "./components/**/*.tsx",
//             "./posts/**/*.mdx",
//             "./posts/**/*.md",
//             "./pages/**/*.tsx",
//             "./theme.ts",
//             "./styles/tailwind.css",
//             "./tailwind.config.js"
//           ],
//           defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
//         })
//       : null
//   ]
// };
