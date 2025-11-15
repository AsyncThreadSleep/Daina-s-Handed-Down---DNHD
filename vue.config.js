const { defineConfig } = require('@vue/cli-service')
const ElementPlusPlugin = require('unplugin-element-plus/webpack')

module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  productionSourceMap: false,

  configureWebpack: {
    plugins: [
      ElementPlusPlugin({})
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true
          }
        }
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: { quality: 85, progressive: true },
        pngquant: { quality: [0.7, 0.9] },
        gifsicle: { enabled: false },
        optipng: { enabled: false },
        svgo: { enabled: true }
      })
      .end()
  }
})