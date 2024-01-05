import React from "react";
import "../styles/Navbar.css";
import log from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav nav-default nav-info">
        <div className="container-fluid">
          <img src={log} className="logo" alt="company logo" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
