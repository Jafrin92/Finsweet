import React from "react";
import "./product.css";

const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="section_header header">
            <h4>Features</h4>
            <h2>Design that solves problems, one product at a time</h2>
        </div>
        <div className="row">
            <div className="product_items">
                <div className="product_card">
                    <a href="#"><i class="fa-solid fa-users"></i></a>
                    <h3>Uses Client First</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
                <div className="product_card">
                <a href="#"><i class="fa-solid fa-comments"></i></a>
                    <h3>24/7 Support</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
            </div>
            <div className="product_items">
                <div className="product_card">
                <a href="#"><i class="fa-solid fa-circle-check"></i></a>
                    <h3>Uses Client First</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
                <div className="product_card">
                <a href="#"><i class="fa-solid fa-stopwatch"></i></a>
                    <h3>Quick Delivery</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
            </div>
            <div className="product_items">
                <div className="product_card">
                <a href="#"><i class="fa-solid fa-pen-ruler"></i></a>
                    <h3>Template Customization</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
                <div className="product_card">
                <a href="#"><i class="fa-solid fa-pen-to-square"></i></a>
                    <h3>Hands-on approach</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
