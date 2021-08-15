const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/index.ts'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 7777,
    compress: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Movie',
      minify: true,
      template: 'src/index.html',
    }),
  ],
};

