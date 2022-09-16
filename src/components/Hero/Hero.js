import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { SiUpwork } from "react-icons/si";

//Files
import TextAnimations from "../Animations/TextAnimations";
//Scss Font Awesome
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Hero Image
import hero from "../images/hero.jpeg";

const Hero = () => {
  return (
    <AnimatePresence>
      <motion.section
        id="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0 }}
      >
        <div className="bio">
          <h2>I'm Michael,</h2>
          <h3>
            <TextAnimations />
          </h3>
          <h5>
            My goal is to help your business or company grow by delivering
            unique and customized services. I provide a wide range of services
            to ensure your stores success.
          </h5>
          <NavLink to="/contact" className="btn-grad">
            Contact Me
          </NavLink>
        </div>
        <div className="hero-img">
          <img src={hero} alt="hero" />
          <div className="social-icons">
            <a href="https://github.com/BMike84" target="blank">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
            <a
              href="https://linkedin.com/in/michael-buffone-072a4723a"
              target="blank"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~017b7de11424dccba0"
              target="blank"
            >
              <SiUpwork />
            </a>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Hero;
