import React from "react";
import "../CareerGuideline/CareerGuideline.scss";
import CareerHeadingIcon from "../../images/icons/career-heading-icon.png";
import BackIcon from "../../images/icons/navigation-back.png";
import ForwardIcon from "../../images/icons/navigation-forward.png";

//slick imports
import { useRef } from "react";
import { useEffect } from "react";

import CourseThumb from "../../images/thumbs/course_thumb.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "../../common/Setting";
import { CareerBox } from "../CareerBox/CareerBox";

const CareerGuideline = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  return (
    <div className="career_guideline_wrapper">
      <div className="inner-section">
        <div
          className="back-button"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img src={BackIcon} alt={BackIcon} srcset="" />
        </div>
        <div
          className="forward-button"
          onClick={() => sliderRef.current.slickNext()}
        >
          <img src={ForwardIcon} alt={ForwardIcon} srcset="" />
        </div>

        <div className="heading-section">
          <img
            src={CareerHeadingIcon}
            alt={CareerHeadingIcon}
            className="src"
          />
          <h3>এক্সপার্টদের ক্যারিয়ার গাইডলাইন</h3>
        </div>

        <div className="slider-section" style={{ padding: "1em" }}>
          <Slider
            {...Settings}
            ref={sliderRef}
            slidesToShow={4}
            slidesToScroll={4}
            // customPaging={(i) => (
            //   <div
            //     style={{
            //       position: "absolute",
            //       width: "100%",
            //       top: "-10px",
            //       opacity: 0,
            //     }}
            //   >
            //     {i}
            //   </div>
            // )}
          >
            {Array(10)
              .fill("")
              .map(() => (
                <CareerBox />
              ))}
          </Slider>
        </div>

        <div className="bottom-nav-section">
          <div className="pagings"></div>
          <div className="bottom-buttons">
            <div
              className="back-button-alt"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <img src={BackIcon} alt={BackIcon} srcset="" />
            </div>
            <div
              className="forward-button-alt"
              onClick={() => sliderRef.current.slickNext()}
            >
              <img src={ForwardIcon} alt={ForwardIcon} srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuideline;
