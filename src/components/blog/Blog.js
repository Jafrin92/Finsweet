import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="section_header">
          <h2>Our blog</h2>
        </div>
        <div className="row">
          <div className="blog_items">
            <img src="./images/blog-1.png" />
            <span>19 Jan 2022</span>
            <h4>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h4>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a href="#">
              Read More<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="blog_items">
            <img src="./images/blog-2.png" />
            <span>19 Jan 2022</span>
            <h4>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h4>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a href="#">
              Read More<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="blog_items">
            <img src="./images/blog-3.png" />
            <span>19 Jan 2022</span>
            <h4>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h4>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a href="#">
              Read More<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
