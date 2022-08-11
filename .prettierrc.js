module.exports = {
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  proseWrap: "never",
  endOfLine: "lf",
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
    {
      files: "document.ejs",
      options: {
        parser: "html",
      },
    },
  ],
};
