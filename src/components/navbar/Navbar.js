import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="manu">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src="./images/logo.png" />
          </div>
          <div className="main_manu">
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
            <div className="nav_btn">
              <Link to="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
