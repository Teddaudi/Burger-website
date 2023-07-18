import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-lg pb-2 pt-2 ">
        <a className="navbar-brand" href="#">
          Burger King
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fw-semibold justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="d-flex justify-content-center " role="search">
            <button className="btn btn-outline-dark border-0 me-2" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;

