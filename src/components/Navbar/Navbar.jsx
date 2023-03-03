import React from "react";
import "../Navbar/Navbar.scss";
import NavIcon from "../../images/icons/nav-icon.png";
import Logo from "../../images/icons/logo_ostad.png";
import DownIcon from "../../images/icons/down.png";
import FlagIcon from "../../images/icons/flag-icon.png";

const Navbar = () => {
  return (
    <div className="nav-section-wrapper fixed-top">
      <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light custom-margin">
        <a class="navbar-brand" href="#">
          <div className="logo-section ">
            <img src={Logo} alt={Logo} className="src" />
          </div>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <img src={NavIcon} alt={NavIcon} srcset="" />
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                সেট ইয়োর গোল
              </a>
              <img src={DownIcon} alt={DownIcon} className="src" />
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                আপকামিং লাইভ ব্যাচ
              </a>
            </li>
            <li class="nav-item">
              <span className="flag-icon">
                <img src={FlagIcon} alt={FlagIcon} className="src" />
              </span>
              <a class="nav-link" href="#">
                ENGLISH
              </a>
            </li>
            <li class="nav-item login-button-section">
              <button>LOGIN</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
