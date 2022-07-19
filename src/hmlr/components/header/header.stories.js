import Header from "./template.njk";
import "../../all.scss";
import "./_header.scss";

export default {
  title: "Experimental/Header",
  argTypes: {
    serviceName: { control: "text" },
  },
};

const Template = ({ serviceName }) => {
  return Header({ params: { serviceName } });
};

export const Standard = Template.bind({});
Standard.args = {};

export const ServiceName = Template.bind({});
ServiceName.args = {
  serviceName: "My Service",
};
