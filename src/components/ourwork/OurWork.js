import React from "react";
import "./ourwork.css";

const OurWork = () => {
  return (
    <section className="project">
      <div className="container">
        <div className="row">
          <div className="section_header">
            <h2>View our projects</h2>
          </div>
          <div className="header_right">
            <h4>
              View More<i class="fa-solid fa-arrow-right"></i>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="project_left">
            <img src="./images/project 01.png" />
            <div className="ovarly">
              <h5>Workhub office Webflow Webflow Design</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam{" "}
              </p>
              <a href="#">
                View More<i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="project_right">
            <div className="project_item">
              <img src="./images/project  02.png" />
              <div className="ovarly">
                <h3>Unisaas Website Design</h3>
                <a href="#">
                  View More<i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="project_item img">
              <img  src="./images/project  03.png" />
              <div className="ovarly">
                <h3>Unisaas Website Design</h3>
                <a href="#">
                  View More<i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
