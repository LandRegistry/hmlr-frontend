import Header from "./template.njk";
import "../../all.scss";
import "./_header.scss";

export default {
  title: "Experimental/Header",
  argTypes: {
    service: { control: "text" },
  },
};

const Template = ({ service }) => {
  return Header({ params: { service } });
};

export const Standard = Template.bind({});
Standard.args = {
  service: "My Service",
};
