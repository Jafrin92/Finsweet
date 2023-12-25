import React from "react";
import "./homeform.css";

const HomeForm = () => {
  return (
    <section className="homeform">
      <div className="container">
        <div className="row">
          <div className="homeform_left">
            <img src="./images/form_bg.png" />
            <div className="ovarly">
              <h3>Building stellar websites for early startups</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
          </div>
          <div className="homeform_right">
            <h3>Send inquiry</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Paste your Figma design URL" />
              <button>Send an Inquiry</button>
              <a href="#">
                Get in touch with us<i class="fa-solid fa-arrow-right"></i>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeForm;
