import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactForm() {
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = (e, data) => {
    // e.preventDefault();

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
          setStatusMessage("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };
  return (
    <>
      <h5>FIll Form Below</h5>
      <form onSubmit={handleSubmit(sendEmail)} ref={form}>
        <div>
          <label>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-user" />
            </span>
            Name
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="First Name"
            {...register("user_name", { required: true })}
          />
          {errors.user_name && <p>Name is required.</p>}
        </div>
        <div>
          <label>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </span>
            Email
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            {...register("user_email", { required: true })}
          />
          {errors.user_name && <p>Email is required</p>}
        </div>
        <div>
          <label>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-message" />
            </span>
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            name="message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && <p>Please fill out this field.</p>}
        </div>
        <div className="col-md-6 text-center text-md-left py-2 py-md-0">
          <input className="btn-grad" type="submit" value="Submit Now" />
        </div>
        <p className="email-success">{statusMessage}</p>
      </form>
    </>
  );
}

export default ContactForm;
