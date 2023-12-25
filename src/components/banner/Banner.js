import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="banner_text">
            <h1>Building stellar websites for early startups</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <a className="banner_btn" href="#">View our work</a>
            <a href="#">View Pricing<i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="banner_img">
            <img src="./images/banner.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
