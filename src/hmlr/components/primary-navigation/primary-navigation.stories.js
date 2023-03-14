import PrimaryNavigation from "./template.njk";
import "../../all.scss";
import "./_primary-navigation.scss";

export default {
  title: "Components/Primary navigation",
  argTypes: {
    navigation: { control: "object" },
    containerClasses: { control: "text" },
    classes: { control: "text" },
    attributes: { control: "text" },
  },
};

const Template = ({ navigation, containerClasses, classes, attributes }) => {
  return PrimaryNavigation({
    params: {
      navigation,
      containerClasses,
      classes,
      attributes,
    },
  });
};

export const Standard = Template.bind({});
Standard.args = {
  navigation: [
    {
      text: "Page 1",
      href: "#",
      active: true,
    },
    {
      text: "Page 2",
      href: "#",
    },
    {
      text: "Page 3",
      href: "#",
    },
  ],
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  containerClasses: "hmlr-primary-navigation__container--full-width",
  navigation: [
    {
      text: "Page 1",
      href: "#",
      active: true,
    },
    {
      text: "Page 2",
      href: "#",
    },
    {
      text: "Page 3",
      href: "#",
    },
  ],
};
