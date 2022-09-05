import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

//Scss Font Awesome
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav id="nav">
      <div className="logo">
        <Link to="/" smooth={true} onClick={toggleHome}>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-code" />
          </span>
          Michael Buffone
        </Link>
      </div>
      <div className="links">
        <Link to="/" smooth={true} onClick={toggleHome}>
          Home
        </Link>
        <Link to="services" spy={true} smooth={true} duration={1000}>
          Services
        </Link>
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
