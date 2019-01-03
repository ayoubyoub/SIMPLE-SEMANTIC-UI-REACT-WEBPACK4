/* eslint-disable */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = ({ plugins = [] }) => ({
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "./js/app.[hash].js"
  },
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif|svg|ico|ttf|eot|woff|woff2|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/images/favicon.ico"
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ManifestPlugin(),
    ...plugins
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    hot: true,
    host: "192.168.1.240",
    port: 3000,
    open: true
  },
  devtool: "source-map"
});
