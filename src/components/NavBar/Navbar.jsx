import React, { useState } from "react";
import logo from "/src/assets/logo/logo_01.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand px-5" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#lateralMenu"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="lateralMenu"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div id="items" className="links offcanvas-body fs-5 fw-bold justify-content-end">
            <a
              className="active nav-link p-2 py-md-1 "
              aria-current="page"
              href="#"
            >
              HOME
            </a>
            <a className="nav-link p-2 py-md-1" href="#">
              TENDENCIA
            </a>
            <a className="nav-link p-2 py-md-1" href="#">
              BLOG
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
