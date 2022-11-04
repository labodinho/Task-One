import React from "react";
import "./contact.css";
import Footer from "./Footer";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
  }
  return (
    <div >
      
      <div className="contact_container">
        
        <form onSubmit={handleSubmit}>
        <p className="contact_sty">Contact Me</p>
        <p className="hi_sty">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
          <div className="top_label">
            <div>
              <label className="input_names">First Name</label> <br />
              <input
                id="first_name"
                type="text"
                placeholder="Enter your first name"
              />{" "}
              <br />
            </div>
            <div>
              <label className="input_names">Last Name</label> <br />
              <input
                id="last_name"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <label className="input_email">Email</label> <br />
          <input id="email" type="text" placeholder="yourname@email.com" /> <br />
          <label>Message</label> <br />
          <textarea
            id="message"
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
      <Footer />
    </div>
  );
}
