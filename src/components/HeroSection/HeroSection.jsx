import React from "react";
import "../HeroSection/HeroSection.scss";
import HeroBanner from "../../images/banners/hero-banner.jpg";
import CategoryIcon from "../../images/icons/CATAGORY.png";
import LiveCourseIcon from "../../images/icons/live_course_icon.png";
import UsersIcon from "../../images/icons/users_icon.png";
import RightArrow from "../../images/icons/right_arrow.png";

const HeroSection = () => {
  return (
    <div className="hero_section_wrapper">
      <div className="inner-frame">
        <div className="icon-section">
          <img src={CategoryIcon} alt={CategoryIcon} className="src" />
        </div>
        <div className="description-section">
          <h1>Tech and development</h1>
          <p>
            স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
            বাটনে। স্কিল ডেভেলপ করুন <br></br> দেশের সেরা ইন্সট্রাক্টরদের সাথে,
            ক্লিক করুন নিচের বাটনে।
          </p>

          <div className="buttons-section">
            <div className="each-button">
              <img src={LiveCourseIcon} alt={LiveCourseIcon} className="src" />
              ৭টি লাইভ কোর্স
            </div>
            <div className="each-button">
              <img src={UsersIcon} alt={UsersIcon} className="src" />
              ১৪২৪৫ জন Ostad গ্র্যাজুয়েট
            </div>
          </div>

          <div className="big-buttons-section">
            <div className="single-button">
              START LEARNING
              <img src={RightArrow} alt={RightArrow} className="src" />
            </div>
            <div className="single-button-updated">ASSESSMENT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
