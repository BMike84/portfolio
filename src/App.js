import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import AllProjects from "./components/Projects/AllProjects";
import About from "./components/About/About";

// Scss
import "./App.scss";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faPencil } from "@fortawesome/free-solid-svg-icons";
import {
  faShopify,
  faPagelines,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Home from "./components/Home/Home";
library.add(faCode, faShopify, faPagelines, faGithub, faLinkedin, faPencil);

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
