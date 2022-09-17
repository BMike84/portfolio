import React from "react";
import { AnimatePresence, motion } from "framer-motion";
//files
import ContactForm from "./ContactForm.js";
import Footer from "../Footer/Footer";
//Scss
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              Got a project in mind? Wether it's a shopify store or a custom
              website. Contact me and let's get started working on making you're
              dream site.
            </p>
            <h3>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
              </span>
              michael@michaelbuffone.net
            </h3>
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
