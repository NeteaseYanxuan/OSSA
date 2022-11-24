const path = require("path");
const CST = require("./utils/const");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./../../../node_modules/react"),
      "react-dom": path.resolve(__dirname, "./../../../node_modules/react-dom"),
      components: CST.componentSrc + "/components",
      utils: CST.componentSrc + "/utils",
      types: CST.componentSrc + "/types",
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => {
        if (chunk.name === "index") {
          return "index.css";
        }
        if (chunk.name) {
          return `components/${chunk.name}/index.css`;
        }
      },
    }),
  ],
};
