import React from "react";
import "../Branding/Branding.scss";
import Brand1 from "../../images/brands/brand1.png";
import Brand2 from "../../images/brands/brand2.png";
import Brand3 from "../../images/brands/brand3.png";
import Brand4 from "../../images/brands/brand4.png";

export const Branding = () => {
  return (
    <div className="branding_wrapper">
      <p>Top companies trust Ostad</p>
      <div className="boxes">
        <div className="box">
          {" "}
          <img src={Brand1} alt={Brand1} className="src" />{" "}
        </div>
        <div className="box">
          {" "}
          <img src={Brand1} alt={Brand1} className="src" />{" "}
        </div>
        <div className="box">
          {" "}
          <img src={Brand2} alt={Brand2} className="src" />{" "}
        </div>
        <div className="box">
          {" "}
          <img src={Brand3} alt={Brand3} className="src" />{" "}
        </div>
        <div className="box">
          {" "}
          <img src={Brand4} alt={Brand4} className="src" />{" "}
        </div>
        <div className="box">
          {" "}
          <img src={Brand1} alt={Brand1} className="src" />{" "}
        </div>
      </div>
    </div>
  );
};
