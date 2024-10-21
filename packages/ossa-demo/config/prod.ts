import type { UserConfigExport } from "@tarojs/cli";
import { argv } from "yargs";

export default {
  env: {
    NODE_ENV: '"production"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    publicPath: argv.public_path || "/OSSA",
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  },
} satisfies UserConfigExport<'vite'>
