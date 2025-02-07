import React from "react";
import "./header.css";
import Navigation from "./navigation/Navigation";
import Logo from "../ui/logo/Logo";

const Header = () => {
  return (
    <>
      <header className="header container d-flex justify-content-between align-items-center mt-2">
        <Logo />
        <Navigation />
      </header>
      <div className="header__line"></div>
    </>
  );
};

export default Header;
