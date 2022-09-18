import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo/bdlogo.png";

//Scss Font Awesome
import "./Navbar.scss";

const Navbar = () => {
  useNavigate();

  // adds nav button on smller screen
  const [showLinks, setShowLinks] = useState(false);

  // makes navbar color on scroll
  const [navColor, setNavColor] = useState(false);

  const scroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

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
          <NavLink
            to="/"
            duration={1000}
            onClick={() => {
              setShowLinks(false);
              scroll();
            }}
          >
            <img src={logo} />
          </NavLink>
        </div>
        <div className="links links-media" id={showLinks ? "hidden" : ""}>
          <NavLink
            to="/"
            onClick={() => {
              setShowLinks(!showLinks);
              scroll();
            }}
          >
            Home
          </NavLink>
          {window.location.href === "https://michaelbuffone.net/" ? (
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-120}
              onClick={() => setShowLinks(!showLinks)}
            >
              Services
            </Link>
          ) : (
            <NavLink to="/" onClick={() => setShowLinks(!showLinks)}>
              Services
            </NavLink>
          )}
          {window.location.href === "https://michaelbuffone.net/" ? (
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              offset={60}
              onClick={() => setShowLinks(!showLinks)}
            >
              Projects
            </Link>
          ) : (
            <NavLink to="/" onClick={() => setShowLinks(!showLinks)}>
              Projects
            </NavLink>
          )}
          <NavLink
            to="about"
            onClick={() => {
              setShowLinks(!showLinks);
              scroll();
            }}
          >
            About Me
          </NavLink>
          <NavLink
            id="contact-media"
            className="bars"
            to="contact"
            onClick={() => {
              setShowLinks(!showLinks);
              scroll();
            }}
          >
            Contact Me
          </NavLink>
        </div>
        <div className="contact-link links-media">
          <NavLink
            className="btn-contact"
            to="contact"
            onClick={() => {
              scroll();
            }}
          >
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
