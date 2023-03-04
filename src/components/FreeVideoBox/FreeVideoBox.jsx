import React from "react";
import "../FreeVideoBox/FreeVideoBox.scss";
import CourseThumb from "../../images/thumbs/free_view_thumb.png";
import PlayCircle from "../../images/icons/play-circle-line.png";
import Instructor from "../../images/icons/instructor.png";
import time from "../../images/icons/time_dark.png";
import date from "../../images/icons/date.png";

export const FreeVideoBox = () => {
  return (
    <div className="free_video_box_wrapper">
      <div className="free-vid-grabber">
        <img src={CourseThumb} alt={CourseThumb} id="thumb_img" />
        <div className="bottom-section">
          <div className="top_title">Language Learning</div>
          <div className="second_title">IELTS Listening: 15 Days Challenge</div>
          <div className="icons_section">
            <div className="each_secion">
              <img src={time} alt={time} className="src" />
              60 mins
            </div>
            <div className="each_secion">
              <img src={date} alt={date} className="src" />
              30 March, 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
