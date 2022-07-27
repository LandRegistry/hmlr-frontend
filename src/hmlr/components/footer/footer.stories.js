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

export const Meta = Template.bind({});
Meta.args = {
  meta: {
    visuallyHiddenTitle: "Other links",
    html: "Some HTML",
    text: "Some text",
    items: [
      {
        text: "Some text",
        href: "#",
        attributes: {
          foo: "bar",
        },
      },
    ],
  },
};

export const Navigation = Template.bind({});
Navigation.args = {
  navigation: [
    {
      title: "Navigation section title 1",
      columns: 4,
      width: "200px",
      items: [
        {
          text: "Item 1",
          href: "#",
          attributes: {
            foo: "bar",
          },
        },
        {
          text: "Item 2",
          href: "#",
          attributes: {
            foo: "bar",
          },
        },
        {
          text: "Item 3",
          href: "#",
          attributes: {
            foo: "bar",
          },
        },
      ],
    },
  ],
};
