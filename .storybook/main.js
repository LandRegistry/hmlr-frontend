const path = require("path");

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
    config.resolve.alias["govuk-frontend"] = path.resolve(
      __dirname,
      "../node_modules/govuk-frontend"
    );

    config.module.rules.push({
      test: /\.njk$/,
      use: [
        {
          loader: "simple-nunjucks-loader",
          options: {
            searchPaths: ["node_modules/govuk-frontend"],
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
