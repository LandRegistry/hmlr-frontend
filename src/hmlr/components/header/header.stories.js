import Header from "./template.njk";
import "../../all.scss";
import "./_header.scss";

export default {
  title: "Components/Header",
  argTypes: {
    homepageUrl: { control: "text" },
    assetsPath: { control: "text" },
    productName: { control: "text" },
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
  homepageUrl,
  assetsPath,
  productName,
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
      homepageUrl,
      assetsPath,
      productName,
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
Standard.args = {};

export const ServiceName = Template.bind({});
ServiceName.args = {
  serviceName: "My Service",
};
