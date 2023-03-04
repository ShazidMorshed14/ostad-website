import React from "react";
import "../GridViews/GridViews.scss";
import Thumb from "../../images/thumbs/live_course_thumb.png";
import UsersIcon from "../../images/icons/peoples.png";
import TimeIcon from "../../images/icons/time.png";

import Forward from "../../images/icons/forward_link.png";

const GridViews = ({ headingIcon, headingText, totalBox }) => {
  return (
    <div className="grid_view_wrapper">
      <div className="top_heading_section">
        <img src={headingIcon} alt="" srcset="" />
        <h4>{headingText}</h4>
      </div>
      <div className="boxes">
        {Array(totalBox)
          .fill("")
          .map(() => (
            <div className="box">
              <div className="grabber-section-grid">
                <img src={Thumb} alt={Thumb} className="src" />
                <div className="second-inner-section">
                  <div className="icon-box-1">ব্যাচ ২৬</div>
                  <div className="icon-box-2">
                    <img src={UsersIcon} alt={UsersIcon} className="src" />
                    ২০ টি সিট বাকি
                  </div>
                  <div className="icon-box-2">
                    <img src={TimeIcon} alt={TimeIcon} className="src" />৫ দিন
                    বাকি
                  </div>
                </div>
                <div className="inner-heading-section">
                  <p>SolidWorks with KeyShot</p>
                </div>
                <div className="pricing-section">
                  <div className="prices">
                    <span className="upper-price">
                      <p>3000TK</p>
                    </span>
                    <span className="lower-price">
                      <p>200TK</p>
                    </span>
                  </div>
                  <div className="details-link">
                    বিস্তারিত দেখি
                    <img src={Forward} alt={Forward} className="src" />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridViews;
