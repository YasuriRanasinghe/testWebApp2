import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h4>HOW WE USE YOUR INFORMATION</h4>
          <h2>
            Personal and non-personal information that we collect from you is
            used for a number of purposes:
          </h2>
          <p>
            It helps us to improve the content of our website or retail store
            environment.
          </p>
          <p>It permits us to better understand our customers' needs.</p>
          <p>It enables us to communicate with our customers.</p>
          <p>
            It is used to make business and financial decisions within our
            company.
          </p>
          <p>It allows us to comply with legal and regulatory requirements.</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
