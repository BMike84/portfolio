import React from "react";
//files
import footerContacts from "./FooterContact";
import FooterPages from "./FooterPages";
import FooterSocial from "./FooterSocial";
//Scss
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-contact">
        {footerContacts.map((item) => {
          return (
            <h2>
              <span>{item.icon}</span>
              {item.title}
            </h2>
          );
        })}
      </div>
      <div className="footer-links">
        <div className="footer-pages">
          <h4>Pages</h4>
          <FooterPages />
        </div>
        <div className="footer-social">
          <h4>Social</h4>
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
