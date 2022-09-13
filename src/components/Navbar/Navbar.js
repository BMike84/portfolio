import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

//Scss Font Awesome
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  useNavigate();

  return (
    <nav id="nav">
      <div className="logo">
        <NavLink to="/" duration={1000}>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-code" />
          </span>
          Michael Buffone
        </NavLink>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        {window.location.href === "http://localhost:3000/" ? (
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
          >
            Services
          </Link>
        ) : (
          <NavLink to="/">Services</NavLink>
        )}
        {window.location.href === "http://localhost:3000/" ? (
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-50}
          >
            Projects
          </Link>
        ) : (
          <NavLink to="/">Projects</NavLink>
        )}
        <NavLink to="about">About Me</NavLink>
      </div>

      <NavLink className="btn-contact" to="contact">
        Contact Me
      </NavLink>
    </nav>
  );
};

export default Navbar;
