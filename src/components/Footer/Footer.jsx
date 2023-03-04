import React from "react";
import Logo from "../../images/icons/logo_ostad.png";
import "../Footer/Footer.scss";
import GooglePlayIcon from "../../images/icons/google-play-icon.png";
import FB from "../../images/icons/fb_footer.png";
import INSTRA from "../../images/icons/instra.png";
import LINKDIN from "../../images/icons/linkedIn.png";
import YOUTUBE from "../../images/icons/youtube.png";
import TIKTOK from "../../images/icons/tiktok.png";

import Phone from "../../images/icons/phone-line.png";
import Email from "../../images/icons/mail.png";
import Map from "../../images/icons/map-pin-line.png";

const Footer = () => {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div
        className="footer-wrapper my-5"
        style={{ backgroundColor: "#FFFBEE" }}
      >
        <footer style={{ backgroundColor: "#FFFBEE" }}>
          <div className=" p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4">
                <img
                  src={Logo}
                  alt={Logo}
                  className="src"
                  style={{ margin: "1rem 0em" }}
                />
                <ul className="list-unstyled mb-0">
                  <li className="mb-1">
                    <a href="#!">অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</a>
                  </li>
                  <li className="mb-1">
                    <h5>ডাউনলোড করুন ওস্তাদ অ্যাপ</h5>
                  </li>
                  <li className="mb-1">
                    <img
                      src={GooglePlayIcon}
                      alt={GooglePlayIcon}
                      className="s"
                    />
                  </li>
                  <li>
                    <a href="#!">কমিউনিটি -এর সাথে কানেক্টেড থাকতে</a>
                    <div className="icons">
                      <img src={FB} alt={FB} className="each-icon" />
                      <img src={INSTRA} alt={INSTRA} className="each-icon" />
                      <img src={LINKDIN} alt={LINKDIN} className="each-icon" />
                      <img src={YOUTUBE} alt={YOUTUBE} className="each-icon" />
                      <img src={TIKTOK} alt={TIKTOK} className="each-icon" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="mb-3">কুইক লিঙ্ক</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1">
                    <a href="#!">আপকামিং লাইভ ব্যাচ</a>
                  </li>
                  <li className="mb-1">
                    <a href="#!">ফ্রি লাইভ ক্লাস</a>
                  </li>
                  <li className="mb-1">
                    <a href="#!">লাইভ ওয়ার্কশপ</a>
                  </li>
                  <li>
                    <a href="#!">জয়েন করুন এক্সপার্টদের টিমে</a>
                  </li>
                  <li>
                    <a href="#!">ব্লগ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="mb-3">যোগাযোগ</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1 got_flex">
                    <img src={Phone} alt={Phone} className="src" />
                    <a href="#!">01781-611903</a>
                  </li>
                  <li className="mb-1 got_flex ">
                    <img src={Email} alt={Email} className="src" />
                    <a href="#!">support@ostad.app</a>
                  </li>
                  <li className="mb-1 got_flex">
                    <img src={Map} alt={Map} className="src" />
                    <a href="#!">
                      Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2,
                      Dhaka-1212
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="mb-3">কোম্পানি</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1">
                    <a href="#!" style={{ color: "#4f4f4f" }}>
                      আমাদের সম্পর্কে
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* End of .container */}
    </>
  );
};

export default Footer;
