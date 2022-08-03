import Header from "./template.njk";
import "../../all.scss";
import "./_header.scss";

export default {
  title: "Components/Header",
  argTypes: {
    serviceName: { control: "text" },
    serviceUrl: { control: "text" },
    navigation: { control: "object" },
    navigationClasses: { control: "text" },
    navigationLabel: { control: "text" },
    menuButtonLabel: { control: "text" },
    containerClasses: { control: "text" },
    classes: { control: "text" },
    attributes: { control: "text" },
  },
};

const Template = ({
  serviceName,
  serviceUrl,
  navigation,
  navigationClasses,
  navigationLabel,
  menuButtonLabel,
  containerClasses,
  classes,
  attributes,
}) => {
  return Header({
    params: {
      serviceName,
      serviceUrl,
      navigation,
      navigationClasses,
      navigationLabel,
      menuButtonLabel,
      containerClasses,
      classes,
      attributes,
    },
  });
};

export const Standard = Template.bind({});
Standard.args = {
  serviceName: "My Service",
};

// export const Navigation = Template.bind({});
// Navigation.args = {
//   serviceName: "My Service",
//   navigation: [
//     {
//       text: "Item 1",
//       href: "#",
//       active: true,
//       attributes: {
//         foo: "bar",
//       },
//     },
//     {
//       text: "Item 2",
//       href: "#",
//       attributes: {
//         foo: "bar",
//       },
//     },
//     {
//       html: "Item 3",
//       href: "#",
//       attributes: {
//         foo: "bar",
//       },
//     },
//   ],
// };
