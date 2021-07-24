const webpack = require('webpack')
const  merge  = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-module-source-map',
  devServer: {
    hot: true,
    contentBase: './public',
    port: 3000,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
