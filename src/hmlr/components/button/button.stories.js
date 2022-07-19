import Button from "./template.njk";
import "../../all.scss";
import "./_button.scss";

export default {
  title: "Components/Button",
  argTypes: {
    text: { control: "text" },
    html: { control: "text" },
    value: { control: "text" },
    name: { control: "text" },
    classes: { control: "text" },
    attributes: { control: "text" },
    disabled: { control: "boolean" },
    href: { control: "text" },
    isStartButton: { control: "boolean" },
    preventDoubleClick: { control: "boolean" },
  },
};

const Template = ({
  text,
  html,
  value,
  name,
  disabled,
  isStartButton,
  href,
  classes,
}) => {
  return Button({
    params: { text, html, value, name, disabled, isStartButton, href, classes },
  });
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

export const Start = Template.bind({});
Start.args = {
  text: "Click me",
  isStartButton: true,
};

export const Anchor = Template.bind({});
Anchor.args = {
  text: "Click me",
  href: "https://hmlr-design-system-staging.herokuapp.com/",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Click me",
  classes: "govuk-button--secondary",
};

export const Warning = Template.bind({});
Warning.args = {
  text: "Click me",
  classes: "govuk-button--warning",
};
