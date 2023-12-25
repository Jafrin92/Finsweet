import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="main_footer">
      <div className="container">
        <div className="row">
          <div className="footer_left">
            <img src="./images/logo.png" />
            <p>
              We are always open to discuss your project and improve your online
              presence.
            </p>
            <div className="footer_contact">
              <div className="footer_contact_mail">
                <h5>Email me at</h5>
                <a href="mailto:contact@website.com">contact@website.com</a>
              </div>
              <div className="footer_contact_call">
                <h5>Call us</h5>
                <a href="tel:0927 6277 28525">0927 6277 28525</a>
              </div>
            </div>
          </div>
          <div className="footer_right">
            <h3>Lets Talk!</h3>
            <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
            <div className="footer_icon">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
