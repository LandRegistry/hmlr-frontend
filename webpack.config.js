const path = require("path");
const glob = require('glob');

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
    ...glob.sync('./src/hmlr/components/**/*.mjs').reduce((acc, path) => {
      acc[path.replace('./src/hmlr/', '').replace('.mjs', '')] = path;
      return acc;
    }, {})
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
    library: ["HMLRFrontend", "[name]"],
    libraryTarget: "umd",
    umdNamedDefine: true,
    path: path.resolve(__dirname, "package/hmlr"),
  },
  devtool: "source-map",
};
