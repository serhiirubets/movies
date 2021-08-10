const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  entry: {
    main: path.resolve(__dirname, 'index.js'),
  },
  devServer: {
    contentBase: './',
    port: 7777,
    inline: false,
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Movie',
      minify: true,
    }),
    new ESLintPlugin(),
  ],
};
