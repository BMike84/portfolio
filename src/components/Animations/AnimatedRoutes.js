import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// import AllProjects from "./components/Projects/AllProjects";
import About from "../About/About";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        {/* <Route path="allprojects" element={<AllProjects />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
