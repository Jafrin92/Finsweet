import React from "react";
import BottomFooter from "../components/bottomfooter/BottomFooter";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const contact = () => {
  return (
    <>
      <Navbar />
      <ContactForm/>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default contact;
