import React from "react";
import Logo from "../ui/logo/Logo.jsx";
import Navigation from "../navigation/Navigation.jsx";

const Header = () => {
  return (
    <div className="full-width-container">
      <div className="container container__header">
        <header className="header d-flex justify-content-between align-items-center">
          <Logo />
          <Navigation />
        </header>
      </div>
    </div>
  );
};

export default Header;
