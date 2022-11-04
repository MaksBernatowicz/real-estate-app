import React from "react";

import Apt1 from "../../assets/best1.jpg";
import Apt2 from "../../assets/best2.jpg";
import Apt3 from "../../assets/best3.jpg";

import "./Best.css";

const Best = () => {
  return (
    <div className="best">
      <h1>Find Best Rated Properties</h1>
      <div>
        <p>
          <span className="bold">All</span>
        </p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agricultural</p>
      </div>
      <div className="container">
        <img src={Apt1} alt="Apartment 1" />
        <img src={Apt2} alt="Apartment 2" />
        <img src={Apt3} alt="Apartment 3" />
      </div>
      <button className="btn">View All</button>
    </div>
  );
};

export default Best;
