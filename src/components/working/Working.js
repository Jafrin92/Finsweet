import React from "react";
import "./working.css";

const Working = () => {
  return (
    <div className="working">
      <div className="container">
        <div className="working_heading">
          <h3>The benefits of working with us</h3>
        </div>
        <div className="row design_separate">
          <div className="design_one working_first_one">
            <a href="">
              <i className="fa-solid fa-pen-to-square"></i>
            </a>
            <h3>Uses Client First</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="design_one working_first_one">
            <a href="">
              <i className="fa-solid fa-pen-ruler"></i>
            </a>
            <h3>Perfectly Responsive</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="design_one working_first_one">
            <a href="">
              <i className="fa-solid fa-users"></i>
            </a>
            <h3>Friendly Support</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
        </div>
        <div className="row working_last_part">
          <div className="work_last_item_one">
            <h4>100.000+</h4>
            <h6>Finsweet Users</h6>
          </div>
          <div className="row work_last_item_two">
            <div className="work_client">
              <img src="images/Logo 1.png" alt="" />
            </div>
            <div className="work_client">
              <img src="images/Logo 2.png" alt="" />
            </div>
            <div className="work_client">
              <img src="images/Logo 3.png" alt="" />
            </div>
            <div className="work_client">
              <img src="images/Logo 4.png" alt="" />
            </div>
            <div className="work_client">
              <img src="images/Logo 5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
