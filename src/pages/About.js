import React from "react";
import Aboutpage from "../components/about/Aboutpage";
import BottomFooter from "../components/bottomfooter/BottomFooter";
import Footer from "../components/footer/Footer";
import Mission from "../components/mission/Mission";
import Navbar from "../components/navbar/Navbar";
import Team from "../components/team/Team";
import Working from "../components/working/Working";

const About = () => {
  return (
    <>
      <Navbar />
      <Aboutpage/>
      <Mission/>
      <Working/>
      <Team/>
      <Footer/>
      <BottomFooter/>
    </>
  );
};

export default About;
