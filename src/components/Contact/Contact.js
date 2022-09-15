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
          <h2>Let's work together!</h2>
          <p>
            Got a project in mind? Wether it's a shopify store or a custom
            website. Contact me and let's get started working on making you're
            dream site.
          </p>
          {footerContacts.map((item, index) => {
            return (
              <h3 key={index}>
                <span>{item.icon}</span>
                {item.title}
              </h3>
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
