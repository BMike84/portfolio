import React, { useState, useEffect } from "react";
import "./Hero.scss";
import titles from "./HeroData";

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevTitleIndex) => {
        if (prevTitleIndex === titles.length - 1) {
          return 0;
        }
        return prevTitleIndex + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <div className="bio">
        <h1>I'm Michael,</h1>
        <h2
          className={
            titles[titleIndex].class === "full-stack"
              ? `${titles[titleIndex].class} fade-out`
              : `${titles[titleIndex].class} fade-in`
          }
        >
          {titles[titleIndex].icon}
          <span>{titles[titleIndex].title}</span>
        </h2>
        <p>
          My goal is to help your business or company grow by delivering unique
          and customized services. I provide a wide range of services to ensure
          your stores success.
        </p>
      </div>
      <div className="hero-img">
        <img></img>
      </div>
    </section>
  );
};

export default Hero;
