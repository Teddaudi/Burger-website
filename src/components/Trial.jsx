import React, { useState } from "react";
import "./Trial.css";
import Logo from "../images/Logo.png";
import Banner from "./Banner";

const Trial = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h-1" href="#">
        <img src={Logo} className="d-inline-block align-top"
        width="30" height="30"
        />
          Navbar
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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link active"  href="#">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>

            <li className="nav-item ">
              <a className="nav-link ">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Trial;
