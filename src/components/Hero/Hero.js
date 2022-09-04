import React from "react";
import TextAnimations from "../Animations/TextAnimations";
import "./Hero.scss";
import laptop from "../images/laptop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <section id="hero">
      <div className="bio">
        <h2>I'm Michael,</h2>
        <h3>
          <TextAnimations />
        </h3>
        <h5>
          My goal is to help your business or company grow by delivering unique
          and customized services. I provide a wide range of services to ensure
          your stores success.
        </h5>
        <a className="btn-grad ">Contact Me</a>
      </div>
      <div className="hero-img">
        <img src={laptop} />
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
