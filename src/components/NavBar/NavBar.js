import React from "react";
import "./NavBar.scss";
import logo from "../../img/logo.png";

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            About
          </a>
        </li>
        <li>
          <a className="nav-link active" href="/">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
