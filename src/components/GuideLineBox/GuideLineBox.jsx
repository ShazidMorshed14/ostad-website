import React from "react";
import "../GuideLineBox/GuideLineBox.scss";
import CourseThumb from "../../images/thumbs/guideline_thumb.png";
import PlayCircle from "../../images/icons/play-circle-line.png";
import Instructor from "../../images/icons/instructor.png";
import time from "../../images/icons/time_dark.png";
import date from "../../images/icons/date.png";

export const GuideLineBox = () => {
  return (
    <div className="career_guiding_box_wrapper">
      <div className="guideline_box_inner_wrapper">
        <img src={CourseThumb} alt={CourseThumb} />
        <div className="bottom-section">
          <div className="top_title">March 3, 2022 . 5 min read</div>
          <div className="second_title">IELTS Reading Test</div>
          <div className="icons_section">
            <div className="each_secion">IELTS Reading</div>
          </div>
        </div>
      </div>
    </div>
  );
};
