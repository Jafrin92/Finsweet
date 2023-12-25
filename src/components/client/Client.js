import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./client.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
    >
      <i class="fa-solid fa-chevron-left next"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
    >
      <i class="fa-solid fa-chevron-right prev"></i>
    </div>
  );
}

const Client = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="client">
      <div className="container">
        <div className="row">
          <div className="client_left">
            <h2>What our clients say about us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>

          <div className="client_right">
            <Slider {...settings}>
              <div>
                <h3>
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h3>
                <div className="client_img">
                  <img src="./images/client.png" />
                  <div className="client_img_txt">
                    <h5>Jenny Wilson</h5>
                    <p>Vice President</p>
                  </div>
                </div>
              </div>
              <div>
                <h3>
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h3>
                <div className="client_img">
                  <img src="./images/client.png" />
                  <div className="client_img_txt">
                    <h5>Jenny Wilson</h5>
                    <p>Vice President</p>
                  </div>
                </div>
              </div>
              <div>
                <h3>
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h3>
                <div className="client_img">
                  <img src="./images/client.png" />
                  <div className="client_img_txt">
                    <h5>Jenny Wilson</h5>
                    <p>Vice President</p>
                  </div>
                </div>
              </div>
            </Slider>
            {/* <h3>
              "The best agency we’ve worked with so far. They understand our
              product and are able to add new features with a great focus."
            </h3>
            <div className="client_img">
              <img src="./images/client.png" />
              <div className="client_img_txt">
                <h5>Jenny Wilson</h5>
                <p>Vice President</p>
              </div>
              <div className="client_icon">
                <a className="icon_left" href="#">
                  <i class="fa-solid fa-chevron-left"></i>
                </a>
                <a className="icon_right" href="#">
                  <i class="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
