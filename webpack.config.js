const path = require("path");

module.exports = {
  entry: "./src/hmlr/all.mjs",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  output: {
    filename: "all.js",
    path: path.resolve(__dirname, "package/hmlr"),
  },
  devtool: "source-map",
};
