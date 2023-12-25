import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Work from "../components/work/Work";
import OurWork from "../components/ourwork/OurWork";
import Product from "../components/product/Product";
import Client from "../components/client/Client";
import Frequently from "../components/frequently/Frequently";
import HomeForm from "../components/homeform/HomeForm";
import Blog from "../components/blog/Blog";
import Footer from "../components/footer/Footer";
import BottomFooter from "../components/bottomfooter/BottomFooter";

const home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Work />
      <OurWork />
      <Product />
      <Client />
      <Frequently />
      <HomeForm />
      <Blog />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default home;
