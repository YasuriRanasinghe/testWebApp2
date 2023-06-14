import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            At Our Shoe Company, we believe style shouldn't demand a huge
            investment of time or money. Style should be comfortable, accessible
            and easy to achieve. That's why our footwear feels as good as it
            looks, effortlessly taking you from the boardroom to the restaurant,
            to the park with your family. We strive to ensure your shopping
            experience is easy on your wallet, and your schedule, by delivering
            fashion and value to everyone in your household.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
