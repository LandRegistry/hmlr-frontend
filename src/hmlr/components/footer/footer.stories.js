import Footer from "./template.njk";
import "../../all.scss";
import "./_footer.scss";

export default {
  title: "Components/Footer",
  argTypes: {
    containerClasses: { control: "text" },
    classes: { control: "text" },
    attributes: { control: "text" },
    meta: { control: "object" },
    navigation: { control: "object" },
  },
};

const Template = ({
  containerClasses,
  classes,
  attributes,
  meta,
  navigation,
}) => {
  return Footer({
    params: { containerClasses, classes, attributes, meta, navigation },
  });
};

export const Standard = Template.bind({});
Standard.args = {};

export const MetaAndNavigation = Template.bind({});
MetaAndNavigation.args = {
  meta: {
    visuallyHiddenTitle: "Other links",
    html: "Meta <em>HTML</em>",
    text: "Meta text",
    items: [
      {
        text: "Meta item 1",
        href: "#",
      },
      {
        text: "Meta item 2",
        href: "#",
      },
      {
        text: "Meta item 3",
        href: "#",
      },
    ],
  },
  navigation: [
    {
      title: "Navigation 1",
      width: "one-third",
      items: [
        {
          text: "Item 1.1",
          href: "#",
        },
        {
          text: "Item 1.2",
          href: "#",
        },
        {
          text: "Item 1.3",
          href: "#",
        },
      ],
    },
    {
      title: "Navigation 2",
      width: "two-thirds",
      columns: 2,
      items: [
        {
          text: "Item 2.1",
          href: "#",
        },
        {
          text: "Item 2.2",
          href: "#",
        },
        {
          text: "Item 2.3",
          href: "#",
        },
        {
          text: "Item 2.4",
          href: "#",
        },
        {
          text: "Item 2.5",
          href: "#",
        },
        {
          text: "Item 2.6",
          href: "#",
        },
      ],
    },
  ],
};
