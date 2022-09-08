import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="homepage">
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
