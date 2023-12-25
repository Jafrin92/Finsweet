import React from "react";
import "./featurebanner.css";

const Featurebanner = () => {
  return (
    <section className="fbanner">
      <div className="container">
        <div className="row">
          <div className="banner_text">
            <h1>All the features you need</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="banner_btn" href="#">
            View Pricing
            </a>
          </div>
          <div className="banner_img featbanner">
            <img src="./images/feature_banner.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featurebanner;
