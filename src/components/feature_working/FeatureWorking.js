import React from "react";
import "./featureworking.css";

const FeatureWorking = () => {
  return (
    <div className="working  feature_working">
      <div className="container">
        <div className="working_last_part feature_working_last">
          <div className="work_last_item_one">
            <h4>100.000+</h4>
            <h6>Finsweet Users</h6>
          </div>
          <div className="work_last_item_two">
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
        <div className="working_heading">
          <h3>The benefits of working with us</h3>
        </div>

        <div className="design_hole_part design_separate">
          <div className="design_one working_first_one">
            <a href="">
              <i className="fa-solid fa-pen-to-square"></i>
            </a>
            <h3>Customize with ease</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
          <div className="design_one working_first_one">
            <a href="">
              <i className="fa-solid fa-pen-ruler"></i>
            </a>
            <h3>Perfectly Responsive</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
          <div className="design_one working_first_one">
            <a href="">
              <i className="fa-solid fa-users"></i>
            </a>
            <h3>Friendly Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureWorking;
