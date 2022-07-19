const path = require("path");

module.exports = {
  entry: "./src/hmlr/scripts/all.mjs",
  mode: "development",
  // resolve: {
  //   alias: {
  //     "govuk-frontend": path.resolve(
  //       __dirname,
  //       "node_modules/govuk-frontend"
  //     )
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: "hmlr-frontend.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
};
