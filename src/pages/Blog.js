import React from "react";
import BottomFooter from "../components/bottomfooter/BottomFooter";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ReadBlog from "../components/readblog/ReadBlog";

const Blog = () => {
  return (
    <>
      <Navbar />
      <ReadBlog/>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default Blog;
