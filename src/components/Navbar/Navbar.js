import React from "react";
import { NavLink } from "react-router-dom";

//Scss Font Awesome
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  return (
    <nav id="nav">
      <div className="logo">
        <NavLink to="/">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-code" />
          </span>
          Michael Buffone
        </NavLink>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/">Skills</NavLink>
        <NavLink to="/about">About Me</NavLink>
      </div>
      <NavLink className="btn-contact" to="contact">
        Contact Me
      </NavLink>
    </nav>
  );
};

export default Navbar;
