import Header from "./template.njk";
import "../../all.scss";
import "./_header.scss";

export default {
  title: "Components/Header",
  argTypes: {
    serviceName: { control: "text" },
    serviceUrl: { control: "text" },
    containerClasses: { control: "text" },
    classes: { control: "text" },
    attributes: { control: "text" },
  },
};

const Template = ({
  serviceName,
  serviceUrl,
  containerClasses,
  classes,
  attributes,
}) => {
  return Header({
    params: {
      serviceName,
      serviceUrl,
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

export const FullWidth = Template.bind({});
FullWidth.args = {
  serviceName: "My Service",
  containerClasses: "govuk-header__container--full-width",
};
