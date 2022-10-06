const path = require("path");

module.exports = {
  entry: {
    main: {
      import: "./src/hmlr/all.mjs",
      filename: "all.js",
      library: {
        name: "HMLRFrontend",
        type: "umd"
      }
    },
    Header: "./src/hmlr/components/header/header.mjs",
  },
  mode: "production",
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
    filename: (pathData, assetInfo) => {
      console.log(pathData)
      console.log(assetInfo)
      return "[path]/[base][url].js"},
    library: ["HMLRFrontend", "[name]"],
    libraryTarget: "umd",
    umdNamedDefine: true,
    path: path.resolve(__dirname, "package/hmlr"),
  },
  devtool: "source-map",
};
