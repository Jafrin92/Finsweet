import React from "react";
import "./mission.css";

const Mission = () => {
  return (
    <div className="mission_about">
        <div className="container">
            <div className="row mission_part">
                <div className="mission_part_one">
                    <div className="mission_part_one_text">
                        <h6>Our Mission</h6>
                        <h3>Inspire, Innovate, Share</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laborum. Autem error eligendi velit molestias quis non nam iste ipsa similique eum, deserunt laborum, dolorem accusantium magni soluta aspernatur rerum!</p>
                    </div>
                   
                </div>
                <div className="mission_part_two">
                    <img src="/images/Mission 1.png" alt=""/>
                </div>
            </div>
            <div className="row mission_part missiont_margin_top">
                <div className="mission_part_two">
                    <img src="/images/Mission 2.png" alt=""/>
                </div>
                <div className="mission_part_one">
                    <div className="mission_part_one_text">
                        <h6>Our Vision</h6>
                        <h3>Laser focus</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laborum. Autem error eligendi velit molestias quis non nam iste ipsa similique eum, deserunt laborum, dolorem accusantium magni soluta aspernatur rerum!</p>
                    </div>
                   
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default Mission;
