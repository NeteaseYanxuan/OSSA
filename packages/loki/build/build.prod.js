const path = require("path");
const WebpackBundleAnalyzer =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "production",
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(__dirname, "./../dist/.cache/webpack"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
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
    new WebpackBundleAnalyzer(),
  ],
  optimization: {
    // runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      minSize: 20 * 1000,
      minChunks: 1,
      cacheGroups: {
        react: {
          test: /react/,
          filename: "react.bundle.js",
          priority: 10,
        },
        "react-dom": {
          test: /react\-dom/,
          filename: "react-dom.bundle.js",
          priority: 20,
        },
      },
    },
  },
};
