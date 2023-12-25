import React from "react";
import "./work.css";

const Work = () => {
  return (
    <section className="work">
      <div className="container">
        <div className="row">
          <div className="work_left">
            <div className="section_header">
              <h2>How we work</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a href="#">
              Get in touch with us<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="work_right">
            <div className="work_items">
              <div className="work_txt">
                <img src="./images/work 01.png" />
                <h3>Strategy</h3>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
              <div className="work_txt">
              <img src="./images/work 02.png" />
                <h3>Wireframing</h3>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
            </div>
            <div className="work_items">
              <div className="work_txt">
                <img src="./images/work 03.png" />
                <h3>Design</h3>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
              <div className="work_txt">
                <img src="./images/work 04.png" />
                <h3>Development</h3>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
