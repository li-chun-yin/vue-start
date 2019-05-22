const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {app : './src/index.js', print : './src/print.js'},
  plugins: [
      new ManifestPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({title: 'webpack once'})
  ],
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules:[
          {test: /\.css$/, use: ['style-loader', 'css-loader']},
          {test: /\.png$/, use: ['file-loader']}
        ]
  },
  devtool: 'hidden-source-map'
};