import React from "react";
import { Link } from "react-router";
import logo from "../../../../assets/icons/logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <div className="logo__text d-flex gap-2">
          Frontend
          <div className="logo__img">
            <div className="point-wrapper">
              <div className="point"></div>
            </div>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
