import Button from "./template.njk";
import "../../all.scss";
import "./_button.scss";

export default {
  title: "Components/Button",
  argTypes: {
    text: { control: "text" },
    classes: { control: "text" },
    disabled: { control: "boolean" },
    href: { control: "text" },
    isStartButton: { control: "boolean" },
  },
};

const Template = ({ text, disabled, isStartButton, href, classes }) => {
  return Button({ params: { text, disabled, isStartButton, href, classes } });
};

export const Standard = Template.bind({});
Standard.args = {
  text: "Click me",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Can't click me",
  disabled: true,
};

export const StartButton = Template.bind({});
StartButton.args = {
  text: "Click me",
  isStartButton: true,
};

export const AnchorButton = Template.bind({});
AnchorButton.args = {
  text: "Click me",
  href: "https://hmlr-design-system-staging.herokuapp.com/",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  text: "Click me",
  classes: "govuk-button--secondary",
};
