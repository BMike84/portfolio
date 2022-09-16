import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

//Scss Font Awesome
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  useNavigate();

  // adds nav button on smller screen
  const [showLinks, setShowLinks] = useState(false);

  // makes navbar color on scroll
  const [navColor, setNavColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 65) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav id="nav" className={navColor ? "nav-bg" : ""}>
        <div className="logo">
          <NavLink to="/" duration={1000}>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-code" />
            </span>
            Michael Buffone
          </NavLink>
        </div>
        <div className="links links-media" id={showLinks ? "hidden" : ""}>
          <NavLink to="/">Home</NavLink>
          {window.location.href === "https://michaelbuffone.net/" ? (
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-120}
            >
              Services
            </Link>
          ) : (
            <NavLink to="/">Services</NavLink>
          )}
          {window.location.href === "https://michaelbuffone.net/" ? (
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              offset={60}
            >
              Projects
            </Link>
          ) : (
            <NavLink to="/">Projects</NavLink>
          )}
          <NavLink to="about">About Me</NavLink>
          <NavLink id="contact-media" className="bars" to="contact">
            Contact Me
          </NavLink>
        </div>
        <div className="contact-link links-media">
          <NavLink className="btn-contact" to="contact">
            Contact Me
          </NavLink>
        </div>
        <button className="bars" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
