const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// env 环境参数
// argv 所有参数
module.exports = {
  target: 'web',
  entry: __dirname + '/src/main.js',
  output: {
    // filename: '[name]-[contenthash].bundle.js', // 使用文件级别的hash
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    // publicPath: './'
  },
  optimization: {
    usedExports: true, // 模块只导出被使用的成员
    concatenateModules: true, // 尽可能合并每一个模块到一个函数中
    // 压缩输出结果
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
            name: '[name].[ext]',
            limit: 10 * 1024
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Work',
      meta: {
        viewport: 'width=device-width'
      },
      template: './public/index.html'
      // chunks: ['App']
    }),
    new VueLoaderPlugin()
  ]

}
