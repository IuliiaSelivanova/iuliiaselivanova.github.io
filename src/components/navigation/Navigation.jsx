import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <ul className="navbar-nav flex-grow-1 justify-content-start">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              aria-current="page"
              href="#"
            >
              Обо мне
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              className="nav-link"
              href="#"
            >
              Портфолио
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contacts"
              className="nav-link"
              href="#"
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
