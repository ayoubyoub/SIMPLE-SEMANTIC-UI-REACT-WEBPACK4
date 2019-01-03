/* eslint-disable */

const config = require("./webpack.config.base");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = config({
  plugins: [
    new CleanWebpackPlugin(["public"]),
    new UglifyWebpackPlugin(),
    new ExtractTextPlugin("./css/app.[hash].css")
  ]
});
