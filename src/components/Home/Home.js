import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div className="homepage">
      <Hero />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
