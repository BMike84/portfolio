import React from "react";
import { AnimatePresence, motion } from "framer-motion";
//files
import ContactForm from "./ContactForm.js";
import Footer from "../Footer/Footer";
//Scss
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiUpwork } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          id="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 4 } }}
          exit={{ opacity: 0, transition: { duration: 4 } }}
        >
          <div className="contact-info">
            <h1>Have a project in mind?</h1>
            <h2>Let's work together!</h2>
            <p>
              Got a project in mind? Whether it's a Shopify store or a custom
              website, contact me and let's get started working on making your
              dream site.
            </p>
            <h3>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
              </span>
              michael@michaelbuffone.net
            </h3>
            <a
              href="https://www.upwork.com/freelancers/~017b7de11424dccba0"
              target="blank"
              className="upwork"
            >
              <span>
                <SiUpwork />
              </span>
              Upwork Profile
            </a>
          </div>
          <div className="contact-form">
            <ContactForm />
          </div>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Contact;
