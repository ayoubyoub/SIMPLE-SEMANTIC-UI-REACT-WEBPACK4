/* eslint-disable */

const config = require("./webpack.config.base");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = config({
  plugins: [
    new ExtractTextPlugin({
      disable: true
    })
  ]
});
