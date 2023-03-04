import React from "react";
import "../CustomGridView/CustomGridView.scss";
import Thumb1 from "../../images/thumbs/community_thumb_1.png";
import Thumb2 from "../../images/thumbs/community_thumb_2.png";
import Thumb3 from "../../images/thumbs/community_thumb_3.png";
import Thumb4 from "../../images/thumbs/community_thumb_4.png";
import UsersIconDark from "../../images/icons/users_icon.png";
import TimeIcon from "../../images/icons/time.png";
import FbIcon from "../../images/icons/fb.png";

import Forward from "../../images/icons/forward_link.png";

const CustomGridView = ({ headingIcon, headingText, totalBox }) => {
  return (
    <div className="custom_grid_view_wrapper">
      <div className="boxes">
        <div className="box">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <img src={Thumb1} alt={Thumb1} srcset="" id="change_img_1" />
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="inner-section">
                <div className="top_button">
                  <img src={UsersIconDark} alt={UsersIconDark} srcset="" />
                  698 members
                </div>
                <div className="second_heading">
                  Flutter Developers Community <br></br>@Bangladesh
                </div>
                <div className="fb_btn">
                  ফেসবুক গ্রুপে জয়েন করুন
                  <img src={FbIcon} alt={FbIcon} className="src" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <img src={Thumb2} alt={Thumb2} srcset="" id="change_img_2" />
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="inner-section">
                <div className="top_button">
                  <img src={UsersIconDark} alt={UsersIconDark} srcset="" />
                  698 members
                </div>
                <div className="second_heading">
                  Flutter Developers Community <br></br>@Bangladesh
                </div>
                <div className="fb_btn">
                  ফেসবুক গ্রুপে জয়েন করুন
                  <img src={FbIcon} alt={FbIcon} className="src" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <img src={Thumb3} alt={Thumb3} srcset="" id="change_img_3" />
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="inner-section">
                <div className="top_button">
                  <img src={UsersIconDark} alt={UsersIconDark} srcset="" />
                  698 members
                </div>
                <div className="second_heading">
                  Flutter Developers Community <br></br>@Bangladesh
                </div>
                <div className="fb_btn">
                  ফেসবুক গ্রুপে জয়েন করুন
                  <img src={FbIcon} alt={FbIcon} className="src" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <img src={Thumb4} alt={Thumb4} srcset="" id="change_img_4" />
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="inner-section">
                <div className="top_button">
                  <img src={UsersIconDark} alt={UsersIconDark} srcset="" />
                  698 members
                </div>
                <div className="second_heading">
                  Flutter Developers Community <br></br>@Bangladesh
                </div>
                <div className="fb_btn">
                  ফেসবুক গ্রুপে জয়েন করুন
                  <img src={FbIcon} alt={FbIcon} className="src" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomGridView;
