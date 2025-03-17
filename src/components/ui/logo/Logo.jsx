import React from "react";

const Logo = () => {
  return (
    <a href="/">
      <div className="logo d-flex align-items-center justify-content-center">
        <div className="logo__text">Frontend</div>
        <div className="logo__text logo__text--IS">
          IS
          <div className="point-wrapper">
            <div className="point"></div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Logo;
