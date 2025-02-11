import React from "react";
import { Link } from "react-router";
import "./navigation.scss";

const Navigation = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            aria-current="page"
          >
            Обо мне
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">
            Проекты
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts" className="nav-link">
            Контакты
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
