const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './Develop/client/src/js/index.js', // Full path to the entry point
  output: {
    filename: 'main.js',
    path: __dirname + '/dist', // Output directory
    clean: true, // Cleans old files in the output directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './Develop/client/index.html', // Full path to the HTML template
    }),
    new MiniCssExtractPlugin(),
    new WorkboxPlugin.GenerateSW(), // Automatically generates service worker
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Converts modern JS to older versions
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Handles CSS files
      },
    ],
  },
};
