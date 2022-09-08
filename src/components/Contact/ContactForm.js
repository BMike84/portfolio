import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactForm() {
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3gaw26l",
        "template_31bbt7t",
        form.current,
        "PUrMfxdGI8-Tr0y_c"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <h5>FIll Form Below</h5>
      <div>
        <label>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </span>
          Name
        </label>
        <input
          ref={name}
          type="text"
          name="user_name"
          placeholder="First Name"
          required
        />
      </div>
      <div>
        <label>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </span>
          Email
        </label>
        <input
          ref={email}
          type="email"
          name="user_email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-message" />
          </span>
          Message
        </label>
        <textarea
          ref={message}
          name="message"
          placeholder="Enter your message"
          required
        />
        <input className="btn-grad" type="submit" value="Submit Now" />
      </div>
    </form>
  );
}

export default ContactForm;
