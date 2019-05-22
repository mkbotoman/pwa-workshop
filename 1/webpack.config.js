const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = env => {
  const mode = env.mode ? env.mode : "production";

  return {
    mode,
    entry: {
      main: "./src/index.js"
    },
    output: {
      filename: "[name].[chunkhash].js",
      chunkFilename: "[name].[chunkhash].bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html",
        minify: { collapseWhitespace: true, removeComments: true },
        inject: false
      }),
      new CopyPlugin([
        { from: "src/assets/", to: "assets/", ignore: [".DS_Store"] }
      ])
    ],
    devtool: "source-map"
  };
};
