import React, { useState } from "react";

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
            <a
              className="nav-link"
              aria-current="page"
              href="#"
            >
              Обо мне
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Портфолио
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
