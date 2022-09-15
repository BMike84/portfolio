import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const FooterPages = () => {
  return (
    <>
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
      <Link
        to="projects"
        spy={true}
        smooth={true}
        // offset={}
        duration={1000}
      >
        Projects
      </Link>
      <NavLink to="about">About Me</NavLink>
      <NavLink to="contact">Contact Me</NavLink>
    </>
  );
};

export default FooterPages;
