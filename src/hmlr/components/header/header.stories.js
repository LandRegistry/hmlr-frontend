import Header from "./template.njk";
import "../../all.scss";
import "./_header.scss";

export default {
  title: "Components/Header",
  argTypes: {
    logo: { control: "boolean" },
    productName: { control: "text" },
    homepageUrl: { control: "text" },
    serviceName: { control: "text" },
    serviceUrl: { control: "text" },
    containerClasses: { control: "text" },
    classes: { control: "text" },
    attributes: { control: "text" },
  },
};

const Template = ({
  logo,
  productName,
  homepageUrl,
  serviceName,
  serviceUrl,
  containerClasses,
  classes,
  attributes,
}) => {
  return Header({
    params: {
      logo,
      productName,
      homepageUrl,
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

export const ServiceNameWithLink = Template.bind({});
ServiceNameWithLink.args = {
  serviceName: "My Service",
  serviceUrl: "#",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  serviceName: "My Service",
  containerClasses: "govuk-header__container--full-width",
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  logo: true,
  serviceName: "My Service",
};

export const WithProductName = Template.bind({});
WithProductName.args = {
  productName: "My Product",
  serviceName: "My Service",
};

export const WithProductNameAndLogo = Template.bind({});
WithProductNameAndLogo.args = {
  logo: true,
  productName: "My Product",
  serviceName: "My Service",
};

export const WithProductNameAndLogoAndLink = Template.bind({});
WithProductNameAndLogoAndLink.args = {
  logo: true,
  productName: "My Product",
  homepageUrl: "#",
  serviceName: "My Service",
};
