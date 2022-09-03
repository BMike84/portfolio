import React from "react";
// Pages
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

// Scss
import "./App.scss";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faShopify, faPagelines } from "@fortawesome/free-brands-svg-icons";
library.add(faCode, faShopify, faPagelines);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
