import React from "react";
import "../CareerHelp/CareerHelp.scss";
import FlagIcon from "../../images/icons/flag_icon.png";
import LiveIcon from "../../images/icons/live_icon.png";
import GridViews from "../GridViews/GridViews";
import WorkShopIcon from "../../images/icons/workshop.png";

const CareerHelp = () => {
  return (
    <div className="career_help_wrapper">
      <div className="top_section custom-margin">
        <div className="top-section-up">
          <img src={FlagIcon} alt={FlagIcon} />
          <h1>Ostad helps you in your career with</h1>
        </div>
        <p>
          স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
          বাটনে।
        </p>
      </div>

      <div
        className="grid-sections custom-margin"
        style={{ borderRadius: "7px" }}
      >
        <GridViews
          headingIcon={LiveIcon}
          headingText={"লাইভ কোর্সসমূহ"}
          totalBox={6}
        />
      </div>
      <div
        className="grid-sections custom-margin"
        style={{ borderRadius: "7px" }}
      >
        <GridViews
          headingIcon={WorkShopIcon}
          headingText={"ওয়ার্কশপ"}
          totalBox={3}
        />
      </div>
    </div>
  );
};

export default CareerHelp;
