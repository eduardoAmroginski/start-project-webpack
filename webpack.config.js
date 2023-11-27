const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    about: './src/js/about.js',
    contact: './src/js/contact.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: 'file-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
        template: './src/html/index.html',
        filename: 'index.html',
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        template: './src/html/pages/about.html',
        filename: 'about.html',
        chunks: ['about'],
      }),
      new HtmlWebpackPlugin({
        template: './src/html/pages/contact.html',
        filename: 'contact.html',
        chunks: ['contact'],
      }),
    new BrowserSyncPlugin(
        {
          host: 'localhost',
          port: 3000,
          proxy: 'http://localhost:8080/',
        },
        {
          reload: false,
        }
    ),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
  },
};

console.log("Iniciando o servidor de desenvolvimento...");
console.log("Running at: http://localhost:8080/")