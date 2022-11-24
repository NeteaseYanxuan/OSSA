module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    // runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      minSize: 20000,
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
