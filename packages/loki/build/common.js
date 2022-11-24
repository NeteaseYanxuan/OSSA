const path = require("path");
const fs = require("fs-extra");
const {
  CleanPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
} = require("webpack");

const CST = require("./utils/const");
const getComponentFiles = () => {
  let componentMap = {
    index: {
      import: `${CST.componentSrc}/index.ts`,
      filename: "index.js",
    },
  };
  const files = fs.readdirSync(CST.componentSrc + "/components");
  for (const fileName of files) {
    componentMap[
      fileName
    ] = `${CST.componentSrc}/components/${fileName}/index.tsx`;
  }
  return componentMap;
};

const DIST_PATH = CST.componentDist;
module.exports = {
  entry: getComponentFiles(),
  output: {
    filename: "components/[name]/index.js",
    libraryExport: "default",
    library: "loki",
    libraryTarget: "umd",
    // module
    path: DIST_PATH,
    clean: true,
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  resolve: {
    alias: {
      components: CST.componentSrc + "/components",
      utils: CST.componentSrc + "/utils",
      types: CST.componentSrc + "/types",
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanPlugin(),
    new DefinePlugin({
      env: process.env.NODE_ENV,
    }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, './src/index.html')
    // }),
    // new HotModuleReplacementPlugin()
  ],
};
