module.exports = {
  plugins: [
    [
      "@fullhuman/postcss-purgecss",
      {
        content: ["./src/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
  ],
};
