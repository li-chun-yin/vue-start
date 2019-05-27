const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {app : './src/index.js', print : './src/print.js'},
//   entry: './src/index.js',
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({title: 'webpack once'}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
      contentBase: './dist',
      hot: true
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
      rules:[
          {test: /\.css$/, use: ['style-loader', 'css-loader']},
          {test: /\.png$/, use: ['file-loader']}
        ]
  },
  devtool: 'hidden-source-map'
};