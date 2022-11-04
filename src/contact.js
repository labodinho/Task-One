import React from "react";
import "./contact.css";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
  }
  return (
    <div className="contact_container">
      <div>
        <p className="contact_sty">Contact Me</p>
        <p className="hi_sty">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="top_label">
            <div>
              <label id="first_name">First Name</label> <br />
              <input
                className="input_names"
                type="text"
                placeholder="Enter your first name"
              />{" "}
              <br />
            </div>
            <div>
              <label id="last_name">Last Name</label> <br />
              <input
                className="input_names"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <label id="email">Email</label> <br />
          <input className="input_email" type="text" placeholder="yourname@email.com" /> <br />
          <label id="message">Message</label> <br />
          <textarea
            placeholder="Send me a message and I'll reply you as soon as possible..."
            required
          />{" "}
          <br />
          <input type="checkbox" required />
          <label className="textarea_label">
            You agree to providing your data to Olabode who may contact you.
          </label>{" "}
          <br />
          <button id="btn__submit">Send message</button>
        </form>
      </div>
    </div>
  );
}
