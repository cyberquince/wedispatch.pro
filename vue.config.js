const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/wedispatch.pro/' : '/',
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
      }),
    ],
  },
});
