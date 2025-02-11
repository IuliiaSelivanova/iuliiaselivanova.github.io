import React, { useState } from "react";
import "./navigation.scss";
import Logo from "../../ui/logo/Logo";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list"></i>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Logo />
            <button
              type="button"
              className="btn btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Обо мне
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Проекты
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
