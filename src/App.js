import React from "react";
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";

// Pages
import AnimatedRoutes from "./components/Animations/AnimatedRoutes";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/Animations/ScrolltoTop";
// import Contact from "./components/Contact/Contact";
// import AllProjects from "./components/Projects/AllProjects";
// import About from "./components/About/About";
// import Home from "./components/Home/Home";

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
        <AnimatedRoutes />
      </ScrollToTop>
    </main>
  );
}

export default App;
