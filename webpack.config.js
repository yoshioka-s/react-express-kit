const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: path.join(__dirname, 'front', 'src', 'index.js')
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, exclude: /node_modules/, use: 'ts-loader' },
      { test: /\.js(x?)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.html$/, loader: 'html-loader' }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'front-dist'),
    compress: false,
    port: 8000,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },

  devtool: 'sourcemap',

  plugins: [
    new HtmlWebpackPlugin({
      template: './front/src/index.html',
      filename: 'index.html'
    })
  ]
}