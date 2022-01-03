const path = require('path');
const { whenDev } = require("@craco/craco");
const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./",
        tsConfigPath: "./tsconfig.extend.json",
      }
    },
  ],
  devServer: whenDev(() => ({
    https: false,
    host: '0.0.0.0', // 如果想要被外部访问，这里需要设成这个
    port: 3001, // 启动的端口号
    compress: true, // 是否使用gzip
    hot: true, // 是否启用热加载
    proxy: { // 可用于解决跨域问题
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/api': '' },
      },
    },
  }))
}