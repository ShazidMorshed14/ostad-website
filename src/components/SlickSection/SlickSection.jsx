import React from "react";
import "../SlickSection/SlickSection.scss";
import { useRef } from "react";
import { useEffect } from "react";

import { AiFillBackward } from "react-icons/ai";
import { AiFillForward } from "react-icons/ai";
import CourseThumb from "../../images/thumbs/course_thumb.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "../../common/Setting";

const SlickSection = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <h1 style={{ fontStyle: "italic" }}>Match Highlights</h1>
        <div style={{ display: "flex" }}>
          <AiFillBackward
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickPrev()}
          ></AiFillBackward>
          <AiFillForward
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickNext()}
          ></AiFillForward>
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <Slider
          {...Settings}
          ref={sliderRef}
          slidesToShow={4}
          slidesToScroll={4}
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-10px",
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          {Array(10)
            .fill("")
            .map(() => (
              <div style={{ margin: 20 }}>
                <img
                  style={{ width: 310, objectFit: "contain", borderRadius: 10 }}
                  src={CourseThumb}
                  alt={CourseThumb}
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlickSection;
