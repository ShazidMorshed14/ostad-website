import React from "react";
import "../JoinCommunity/JoinCommunity.scss";
import FlagIcon from "../../images/icons/flag_icon.png";
import LiveIcon from "../../images/icons/live_icon.png";
import CommunityIcon from "../../images/icons/community_icon.png";
import GridViews from "../GridViews/GridViews";
import WorkShopIcon from "../../images/icons/workshop.png";
import CustomGridView from "../CustomGridView/CustomGridView";

const JoinCommunity = () => {
  return (
    <div className="join_community_wrapper">
      <div
        className="top_section custom-margin"
        style={{ padding: "1rem 0em" }}
      >
        <div className="top-section-up">
          <img src={CommunityIcon} alt={CommunityIcon} />
          <h1>জয়েন করুন আমাদের কমিউনিটিতে</h1>
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
        <CustomGridView
          headingIcon={LiveIcon}
          headingText={"লাইভ কোর্সসমূহ"}
          totalBox={4}
        />
      </div>
    </div>
  );
};

export default JoinCommunity;
