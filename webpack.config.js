/*eslint-env node*/
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

var babelLoader = "babel?" + [
  "presets[]=react",
  "presets[]=es2015",
  "presets[]=stage-0",
  "plugins[]=transform-runtime"
].join(",");

module.exports = {
  context: path.join(__dirname, "src"),

  entry: ["./"],

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: process.env.NODE_ENV === "production" ? "TODO!!!!" : "/",
    filename: process.env.NODE_ENV === "production" ? "bundle-[hash].js" : "bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Serials", 
      template: "./src/index.html", // Load a custom template
      inject: "body" //scripts are injected to here
    }),
    new webpack.ProvidePlugin({
      fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
        APP_ENV: JSON.stringify(process.env.APP_ENV || "development")
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: process.env.NODE_ENV === "production" ? [
          babelLoader
        ] : [
          "react-hot",
          babelLoader
        ]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  }
};
