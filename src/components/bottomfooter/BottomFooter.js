import React from "react";
import "./bottomfooter.css";
import { Link } from "react-router-dom";

const BottomFooter = () => {
  return (
    <footer className="bottomfooter">
      <div className="container">
        <div className="row">
          <div className="bottomfooter_left">
            <p>Copyright 2022, Finsweet.com</p>
          </div>
          <div className="bottomfooter_right">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/feature">Features</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/fqa">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;
