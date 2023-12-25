import React, { useState } from "react";
import "./frequently.css";

const Frequently = () => {
  let [accordian, setAccordian] = useState([
    {
      title: "How much time does it take?",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: true,
      icon: "fa-solid fa-xmark",
    },
    {
      title: "What is your class naming convention?",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: false,
      icon: "fa-solid fa-plus",
    },
    {
      title: "How do you communicate?",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: false,
      icon: "fa-solid fa-plus",
    },
    {
      title: "I have a bigger project. Can you handle it?",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: false,
      icon: "fa-solid fa-plus",
    },
    {
      title: "What is your class naming convention?",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: false,
      icon: "fa-solid fa-plus",
    },
  ]);
  let handleAccordian = (id) => {
    console.log(id);
    accordian.map((item, index) => {
      if (id == index) {
        item.status = true;
        item.icon = "fa-solid fa-xmark";
        setAccordian([...accordian]);
        // console.log("x");
        // icon :'fa-solid fa plus'
      } else {
        item.status = false;
        item.icon = "fa-solid fa-plus";
        setAccordian([...accordian]);
        // icon :'fa-solid fa-xmark'
      }
    });
  };
  return (
    <section className="frequently">
      <div className="container">
        <div className="row">
          <div className="left_text">
            <h2>Frequently asked questions</h2>
            <p>Contact us for more info</p>
          </div>
          <div className="right_text">
            {accordian.map((item, index) => (
              <div
                className="right_text_items"
                onClick={() => handleAccordian(index)}
              >
                <span>{index + 1 > 9 ? index + 1 : `0${index + 1}`}</span>
                <div className="one">
                  <h4>{item.title}</h4>
                  {item.status && <p>{item.details}</p>}
                </div>
                <a href="#">
                  <i className={item.icon}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
