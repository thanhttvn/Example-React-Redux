const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'app.js'
  },

  devServer: {
    contentBase: './build'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ]
}