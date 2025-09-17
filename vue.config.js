const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

const ASSET_PATH = process.env.NODE_ENV === 'production' ? '/wedispatch.pro/' : '/';

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: ASSET_PATH,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/variables.scss";',
      },
    },
  },
  devServer: {
    proxy: {
      '/ip': {
        target: 'https://api.country.is/',
        changeOrigin: true,
        pathRewrite: { '^/ip': '' },
      },
    },
  },
  outputDir: 'dist/',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
      }),
    ],
  },
});
