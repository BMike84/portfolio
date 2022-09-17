import React from "react";

// Pages
import AnimatedRoutes from "./components/Animations/AnimatedRoutes";
import Navbar from "./components/Navbar/Navbar";

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
      <Navbar />
      <AnimatedRoutes />
    </main>
  );
}

export default App;
