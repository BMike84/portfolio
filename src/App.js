import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import AllProjects from "./components/Projects/AllProjects";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import ScrollToTop from "./components/Animations/ScrolltoTop";

// Scss
import "./App.scss";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCode,
  faPencil,
  faShare,
  faEnvelope,
  faPhone,
  faLocationPin,
  faUser,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import {
  faShopify,
  faPagelines,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faCode,
  faShopify,
  faPagelines,
  faGithub,
  faLinkedin,
  faPencil,
  faShare,
  faEnvelope,
  faPhone,
  faLocationPin,
  faUser,
  faMessage
);

function App() {
  return (
    <main>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="projects" element={<AllProjects />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </ScrollToTop>
    </main>
  );
}

export default App;
