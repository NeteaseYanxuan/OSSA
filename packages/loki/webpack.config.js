const commonConfig = require("./build/common");
const devConfig = require("./build/dev");
const buildDevH5Config = require("./build/build.dev");
const buildProdConfig = require("./build/build.prod");
const { merge } = require("webpack-merge");
const NODE_ENV = process.env.NODE_ENV;

const configMap = {
  development: devConfig,
  build_development_h5: buildDevH5Config,
  build_production: buildProdConfig,
};
module.exports = merge(commonConfig, configMap[NODE_ENV]);
