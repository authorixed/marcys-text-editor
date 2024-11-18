const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './Develop/client/src/js/index.js', // Entry file
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './Develop/client/index.html', // HTML template
    }),
    new MiniCssExtractPlugin(),
    new WorkboxPlugin.GenerateSW(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
