const path = require("path");
const webpackConfig = require("../webpack.config");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // config.resolve.alias = { ...webpackConfig.resolve.alias };

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: "./src/hmlr", to: "./" },
          // {
          //   from: "./node_modules/govuk-frontend/govuk-esm",
          //   to: "./node_modules/govuk-frontend/govuk-esm",
          // },
        ],
      })
    );

    config.module.rules = [
      ...config.module.rules,
      ...webpackConfig.module.rules,
      {
        test: /\.njk$/,
        use: [
          {
            loader: "simple-nunjucks-loader",
            options: {
              searchPaths: ["node_modules/govuk-frontend"],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
      },
    ];

    return config;
  },
};
