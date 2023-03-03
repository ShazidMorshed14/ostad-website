import React from "react";
import "../CareerBox/CareerBox.scss";
import CourseThumb from "../../images/thumbs/course_thumb.png";
import PlayCircle from "../../images/icons/play-circle-line.png";
import Instructor from "../../images/icons/instructor.png";

export const CareerBox = () => {
  return (
    <div className="career_box_wrapper">
      <img style={{}} src={CourseThumb} alt={CourseThumb} />
      <div className="bottom-section">
        <div className="heading-section">
          <img src={PlayCircle} alt={PlayCircle} className="src" />
          <p>ক্যারিয়ার করুন ওয়েব ডিজাইনে</p>
        </div>

        <div className="instructor-section">
          <div className="ins-img">
            <img src={Instructor} alt={Instructor} className="s" />
          </div>
          <div className="ins-desc">
            <span className="big_one">
              <p>Instructor name</p>
            </span>
            <span className="small_one">
              <p>Expertise field name</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
