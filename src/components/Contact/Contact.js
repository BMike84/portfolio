import React from "react";
//files
import footerContacts from "../Footer/FooterContact.js";
import ContactForm from "./ContactForm.js";
import Footer from "../Footer/Footer";
//Scss
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="contact-info">
          <h1>Have a project in mind?</h1>
          <p>
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and I'll get back to you in the next 48 hours.
          </p>
          {footerContacts.map((item) => {
            return (
              <h2>
                <span>{item.icon}</span>
                {item.title}
              </h2>
            );
          })}
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
