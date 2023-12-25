import React from "react";
import "./contactform.css";

const ContactForm = () => {
  return (
    <section className="contact_page">
      <div className="container">
        <div className="contact_text">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="contact_form">
          <div className="row">
            <div className="contact_form_input">
              <h4>Name</h4>
              <input type="text" placeholder="Enter your name" />
              <h4>Subject</h4>
              <input type="text" placeholder="Provide context" />
            </div>
            <div className="contact_form_input">
              <h4>Email</h4>
              <input type="email" placeholder="Enter your Emial" />
              <h4>Subject</h4>
              <input type="text" placeholder="Select Subject" />
            </div>
          </div>
          <div className="contact_form_msg">
            <h4>Message</h4>
            <input type="massage" placeholder="Write your  question here"/>
          </div>
          <div className="contact_form_btn">
            <button type="submit">Send Messege</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
