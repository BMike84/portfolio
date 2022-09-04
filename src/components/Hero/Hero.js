import React from "react";
import TextAnimations from "../Animations/TextAnimations";
import "./Hero.scss";
import laptop from "../images/laptop.jpg";

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
      </div>
      <div className="hero-img">
        <img src={laptop} />
      </div>
    </section>
  );
};

export default Hero;
