import Footer from "./template.njk";
import "../../all.scss";
import "./_footer.scss";

export default {
  title: "Experimental/Footer",
  argTypes: {
  },
};

const Template = ({ service }) => {
  return Footer({ params: { service } });
};

export const Standard = Template.bind({});
Standard.args = {};
