import React from "react";
import { Link } from "react-router";
import "./navigation.scss";

const Navigation = () => {
  return (
    <>
      <ul className="nav nav-underline">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link text-dark active"
            aria-current="page"
          >
            Обо мне
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className="nav-link text-dark"
          >
            Проекты
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contacts"
            className="nav-link text-dark"
          >
            Контакты
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
