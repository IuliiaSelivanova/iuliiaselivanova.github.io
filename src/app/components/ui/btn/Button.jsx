import React from "react";
import "./button.scss";

const Button = ({ value, icon, onClick, btnClassName }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div>
      <button
        className={"btn btn-warning " + btnClassName}
        onClick={handleClick}
      >
        {value}
        <img src={icon} alt="icon" />
      </button>
    </div>
  );
};

export default Button;
