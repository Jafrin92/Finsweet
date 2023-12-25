import React from "react";
import BottomFooter from "../components/bottomfooter/BottomFooter";
import Footer from "../components/footer/Footer";
import Frequently from "../components/frequently/Frequently";
import Navbar from "../components/navbar/Navbar";
import Plan from "../components/plan/Plan";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <Plan/>
      <Frequently/>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default Pricing;
