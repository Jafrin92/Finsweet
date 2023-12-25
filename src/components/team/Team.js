import React from "react";
import "./team.css"

const Team = () => {
  return (
    <div className="team">
    <div className="container">
        <div className="row team_part">
            <div className="team_one_part">
                <div className="team_img">
                    <img src="/images/team 1.png" alt=""/>
                    <div class="team_img_overlay">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <h3>John Smith</h3>
                <h4>CEO</h4>
            </div>
            <div className="team_one_part">
                <div className="team_img">
                    <img src="/images/team 2.png" alt=""/>
                    <div className="team_img_overlay">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <h3>Simon Adams</h3>
                <h4>CTO</h4>
            </div>
            <div className="team_one_part">
                <div className="team_img">
                    <img src="/images/team 3.png" alt=""/>
                    <div className="team_img_overlay">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <h3>Paul Jones</h3>
                <h4>Design Lead</h4>
            </div>
            <div className="team_one_part">
                <div className="team_img">
                    <img src="/images/team 4.png" alt=""/>
                    <div className="team_img_overlay">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <h3>Sara Hardin</h3>
                <h4>Project Manager</h4>
            </div>
         
        </div>
    </div>
</div>
    );
};

export default Team;
