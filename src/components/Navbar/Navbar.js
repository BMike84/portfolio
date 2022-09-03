import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  return (
    <nav id="nav">
      <div className="logo">
        <FontAwesomeIcon icon="fa-solid fa-code" />
        <a>Michael Buffone</a>
      </div>
      <div className="links">
        <a>Home</a>
        <a>Projects</a>
        <a>Testimonials</a>
        <a>About Me</a>
        <a>Skills</a>
      </div>
      <a className="contact-btn">Contact</a>
    </nav>
  );
};

export default Navbar;
