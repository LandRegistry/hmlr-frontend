import "./storybook.scss";
import "../src/hmlr/_base.scss";

document.documentElement.classList.add("govuk-template");
document.body.classList.add("govuk-template__body");

export const parameters = {
  actions: {
    disabled: true,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
